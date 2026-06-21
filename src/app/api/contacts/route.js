import { NextResponse } from "next/server";
import { getContacts, createContact } from "@/lib/db";
import { getSession } from "../../../lib/session";

export async function GET(request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized. Please login." }, { status: 401 });
    }

    const contacts = await getContacts();
    return NextResponse.json(contacts);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch contact requests" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, website, service, message, analysisItems } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields (name, email, phone)" }, { status: 400 });
    }

    const newContact = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      email,
      phone,
      website: website || "",
      service: service || "seo",
      message: message || "",
      analysisItems: analysisItems || null,
      createdAt: new Date().toISOString(),
    };

    await createContact(newContact);

    return NextResponse.json({ success: true, contact: newContact }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save contact request" }, { status: 500 });
  }
}
