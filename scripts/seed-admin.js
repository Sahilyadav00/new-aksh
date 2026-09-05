import fs from "fs";
import path from "path";
import crypto from "crypto";
import { MongoClient } from "mongodb";

// Parse .env if it exists
const envPath = path.join(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, "utf8");
  envConfig.split("\n").forEach((line) => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let val = match[2] || "";
      // Strip quotes if present
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.slice(1, -1);
      }
      process.env[key] = val;
    }
  });
}

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("Error: MONGODB_URI is not defined in your environment or .env file.");
    process.exit(1);
  }

  console.log("Connecting to MongoDB...");
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection("admin_users");

    const count = await collection.countDocuments();
    if (count === 0) {
      const username = "admin";
      const password = "admin123";
      const passwordHash = hashPassword(password);

      await collection.insertOne({
        username,
        passwordHash,
        createdAt: new Date().toISOString(),
      });

      console.log("--------------------------------------------------");
      console.log(`SUCCESS: Admin user seeded successfully!`);
      console.log(`Username: ${username}`);
      console.log(`Password: ${password}`);
      console.log("--------------------------------------------------");
    } else {
      console.log("Admin user(s) already exist in collection 'admin_users'. Seeding skipped.");
    }
  } catch (err) {
    console.error("Database connection or seeding error:", err);
  } finally {
    await client.close();
  }
}

main();
