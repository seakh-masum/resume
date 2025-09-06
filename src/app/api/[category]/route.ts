// src/app/api/[category]/route.ts
import { NextResponse } from "next/server";
import { getDocs } from "firebase/firestore";
import { firebaseQuery } from "@/helper";

export async function GET(
  req: Request,
  context: { params: Promise<{ category: string }> }
) {
  try {
    const { searchParams } = new URL(req.url);
    const orderBy = searchParams.get("orderBy") ?? "isActive";
    const { category } = await context.params;

    const q = firebaseQuery(category ?? "", orderBy);
    const snapshot = await getDocs(q);

    const data = await snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ category: category, data });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
