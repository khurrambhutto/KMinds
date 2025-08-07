import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // Basic validation
    if (!data?.name || !data?.email || !data?.message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }
    // In a real setup, send an email via a provider here.
    // For local development, we simply log the payload.
    console.log("New contact message:", data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}


