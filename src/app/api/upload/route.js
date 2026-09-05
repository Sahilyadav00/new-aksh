import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { getSession } from "../../../lib/session";

export async function POST(request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized. Please login." }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary using Promise-wrapped upload_stream
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "akshdigital_blogs",
          resource_type: "auto",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(buffer);
    });

    return NextResponse.json({ success: true, url: result.secure_url });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return NextResponse.json({ error: "Image upload failed. Check Cloudinary environment configurations." }, { status: 500 });
  }
}
