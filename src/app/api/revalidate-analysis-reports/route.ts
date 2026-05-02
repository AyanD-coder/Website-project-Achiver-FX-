import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!process.env.ANALYSIS_REPORTS_REVALIDATE_TOKEN) {
    return NextResponse.json(
      { error: "ANALYSIS_REPORTS_REVALIDATE_TOKEN is not configured." },
      { status: 500 },
    );
  }

  if (token !== process.env.ANALYSIS_REPORTS_REVALIDATE_TOKEN) {
    return NextResponse.json({ error: "Invalid token." }, { status: 401 });
  }

  revalidateTag("analysis-reports", "max");

  return NextResponse.json({ revalidated: true });
}
