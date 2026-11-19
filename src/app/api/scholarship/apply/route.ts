import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      error:
        "This Website is temporarily unreacheable, Please contact the server administrators or the hosting company of you are the owner of the website.",
    },
    { status: 503 }
  );
}

export async function GET() {
  return NextResponse.json(
    {
      error:
        "This Website is temporarily unreacheable, Please contact the server administrators or the hosting company of you are the owner of the website.",
    },
    { status: 503 }
  );
}
