import clientPromise from "./mongodb";
import crypto from "crypto";


// Cache database connection
async function getDb() {
  const client = await clientPromise;
  return client.db();
}


export async function getBlogs() {
  try {
    const db = await getDb();

    // Fetch and return blogs (exclude MongoDB _id from causing Next.js serialization warnings)
    const result = await db.collection("blogs").find({}).toArray();
    const publishedAt = (b) => new Date(b.createdAt || b.date).getTime() || 0;
    return result
      .map(({ _id, ...rest }) => rest)
      .sort((a, b) => publishedAt(b) - publishedAt(a)); // newest first
  } catch (err) {
    console.error("Error reading blogs from MongoDB", err);
    return [];
  }
}

export async function getBlogBySlug(slug) {
  try {
    const db = await getDb();
    const result = await db.collection("blogs").findOne({ slug });
    if (!result) return null;
    const { _id, ...rest } = result;
    return rest;
  } catch (err) {
    console.error(`Error reading blog ${slug} from MongoDB`, err);
    return null;
  }
}

export async function createBlog(blog) {
  try {
    const db = await getDb();
    return await db.collection("blogs").insertOne(blog);
  } catch (err) {
    console.error("Error creating blog in MongoDB", err);
    return false;
  }
}

export async function updateBlog(slug, updatedBlog) {
  try {
    const db = await getDb();
    // Exclude _id to prevent MongoDB exception when updating
    const { _id, ...updatePayload } = updatedBlog;
    return await db.collection("blogs").updateOne({ slug }, { $set: updatePayload });
  } catch (err) {
    console.error(`Error updating blog ${slug} in MongoDB`, err);
    return false;
  }
}

// Only one post can be featured at a time.
export async function unsetFeaturedExcept(slug) {
  try {
    const db = await getDb();
    return await db
      .collection("blogs")
      .updateMany({ featured: true, slug: { $ne: slug } }, { $set: { featured: false } });
  } catch (err) {
    console.error("Error clearing featured blogs in MongoDB", err);
    return false;
  }
}

export async function deleteBlog(slug) {
  try {
    const db = await getDb();
    return await db.collection("blogs").deleteOne({ slug });
  } catch (err) {
    console.error(`Error deleting blog ${slug} from MongoDB`, err);
    return false;
  }
}

export async function getContacts() {
  try {
    const db = await getDb();
    const result = await db.collection("contacts").find({}).sort({ createdAt: -1 }).toArray();
    return result.map(({ _id, ...rest }) => ({
      _id: _id.toString(), // Convert Object ID to string if needed
      ...rest
    }));
  } catch (err) {
    console.error("Error reading contacts from MongoDB", err);
    return [];
  }
}

export async function createContact(contact) {
  try {
    const db = await getDb();
    return await db.collection("contacts").insertOne(contact);
  } catch (err) {
    console.error("Error saving contact to MongoDB", err);
    return false;
  }
}

export async function deleteContact(id) {
  try {
    const db = await getDb();
    return await db.collection("contacts").deleteOne({ id });
  } catch (err) {
    console.error(`Error deleting contact ${id} from MongoDB`, err);
    return false;
  }
}

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

async function seedAdminUser(db) {
  const count = await db.collection("admin_users").countDocuments();
  if (count === 0) {
    const passwordHash = hashPassword("admin123");
    await db.collection("admin_users").insertOne({
      username: "admin",
      passwordHash,
      createdAt: new Date().toISOString(),
    });
    console.log("Seeded default admin user to MongoDB.");
  }
}

export async function verifyAdminCredentials(username, password) {
  try {
    const db = await getDb();
    await seedAdminUser(db);
    const user = await db.collection("admin_users").findOne({ username });
    if (!user) return false;
    return user.passwordHash === hashPassword(password);
  } catch (err) {
    console.error("Error verifying admin credentials", err);
    return false;
  }
}

export async function updateAdminPassword(username, currentPassword, newPassword) {
  try {
    const db = await getDb();
    await seedAdminUser(db);
    const user = await db.collection("admin_users").findOne({ username });
    if (!user) return { success: false, error: "Admin user not found" };

    if (user.passwordHash !== hashPassword(currentPassword)) {
      return { success: false, error: "Incorrect current password" };
    }

    const newPasswordHash = hashPassword(newPassword);
    await db.collection("admin_users").updateOne(
      { username },
      { $set: { passwordHash: newPasswordHash, updatedAt: new Date().toISOString() } }
    );
    return { success: true };
  } catch (err) {
    console.error("Error updating admin password", err);
    return { success: false, error: "Database error" };
  }
}

