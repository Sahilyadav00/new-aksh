import { NextResponse } from "next/server";
import { deleteSession } from "@/lib/session";

export async function POST(request) {
  try {
    await deleteSession();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Logout API error:", error);
    return NextResponse.json({ error: "Failed to logout" }, { status: 500 });
  }
}
