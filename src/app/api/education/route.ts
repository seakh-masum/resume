// src/app/api/[category]/route.ts
import { NextResponse } from "next/server";
import { getDocs } from "firebase/firestore";
import { firebaseQuery } from "@/helper";
import { getYear } from "@/utils";

export async function GET() {
  try {
    const q = firebaseQuery("education", "fromDate");
    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => {
      const docData = doc.data();

      return {
        ...docData,
        id: doc.id,
        stepperIndex: `${getYear(docData.fromDate)} - ${getYear(
          docData.toDate
        )}`,
        heading: `${docData.course} - ${docData.stream}`,
        subHeading: docData.institute,
        link: docData.link,
        desc: `${docData.marks} %`,
      };
    });

    return NextResponse.json({ data });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
