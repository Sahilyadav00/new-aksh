import { NextResponse } from "next/server";
import { updateAdminPassword } from "@/lib/db";
import { getSession } from "../../../../lib/session";

export async function POST(request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized. Please login again." }, { status: 401 });
    }

    const body = await request.json();
    const { username, currentPassword, newPassword } = body;

    if (!username || !currentPassword || !newPassword) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Double check session username matches update request username
    if (session.username !== username) {
      return NextResponse.json({ error: "Unauthorized to update this user's password." }, { status: 403 });
    }

    const result = await updateAdminPassword(username, currentPassword, newPassword);

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: result.error || "Failed to update password" }, { status: 400 });
    }
  } catch (error) {
    console.error("Update password API error:", error);
    return NextResponse.json({ error: "Server connection error" }, { status: 500 });
  }
}
