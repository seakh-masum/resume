// src/app/api/[category]/route.ts
import { NextResponse } from "next/server";
import { getDocs } from "firebase/firestore";
import { firebaseQuery } from "@/helper";
import { getMonth, getOnlyMonthAndYear, getYear } from "@/utils";

export async function GET() {
  try {
    const q = firebaseQuery("experience", "joiningDate");
    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => {
      const obj: any = {};
      const data = doc.data();
      const fromYear: any = getYear(data.joiningDate);
      const fromMonth: any = getMonth(data.joiningDate);
      const toYear: any = data.releaseDate
        ? getYear(data.releaseDate)
        : new Date().getFullYear();

      const toMonth = data.releaseDate
        ? getMonth(data.releaseDate)
        : new Date().getMonth() + 1;

      const monthDifference = toMonth - fromMonth;
      const monthGap =
        monthDifference > 0 ? monthDifference : 12 + monthDifference;
      const yearGap =
        monthDifference > 0 ? toYear - fromYear : toYear - fromYear - 1;

      obj.tenure =
        yearGap > 0
          ? `${yearGap} Year  ${monthGap} Months`
          : `${monthGap} Months`;

      obj.dateRange = `${getOnlyMonthAndYear(data.joiningDate)} - ${
        data.releaseDate ? getOnlyMonthAndYear(data.releaseDate) : "Present"
      }`;

      obj.stepperIndex = obj.tenure;
      obj.heading = data.designation;
      obj.extraHeading = data.company;
      obj.subHeading = obj.dateRange;
      obj.link = data.link;
      obj.list = data.roles;
      obj.yearGap = yearGap;
      obj.monthGap = monthGap;

      return { ...data, ...obj, id: doc.id };
    });

    const totalMonths = data.reduce((acc: number, curr: any) => {
      return acc + curr.yearGap * 12 + curr.monthGap;
    }, 0);

    const totalYears = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    const totalExperience = `${totalYears} Years ${
      remainingMonths > 0 ? remainingMonths + " Months" : ""
    }`;

    return NextResponse.json({ data, totalExperience });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
