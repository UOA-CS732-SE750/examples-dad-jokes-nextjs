import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI)
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");

export default async function connectToDatabase() {
  let singleton = global.mongooseSingleton;
  if (!singleton) {
    singleton = global.mongooseSingleton = { conn: null, promise: null };
  }

  if (singleton.conn) return singleton.conn;

  if (!singleton.promise) singleton.promise = mongoose.connect(MONGODB_URI);

  singleton.conn = await singleton.promise;
  return singleton.conn;
}
