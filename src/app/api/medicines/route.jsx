import { getMedicines } from "@/lib/api/medicines";
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search") ?? "";

  try {
    const medicines = await getMedicines({ search });
    console.log(medicines, "medicines");

    return NextResponse.json({
      medicines,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch medicines",
      },
      {
        status: 500,
      }
    );
  }
}
