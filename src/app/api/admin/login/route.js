import { NextResponse } from "next/server";
import { verifyAdminCredentials } from "@/lib/db";
import { createSession } from "../../../../lib/session";

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json({ error: "Missing username or password" }, { status: 400 });
    }

    const isValid = await verifyAdminCredentials(username, password);

    if (isValid) {
      await createSession(username);
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
    }
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json({ error: "Server connection error" }, { status: 500 });
  }
}
