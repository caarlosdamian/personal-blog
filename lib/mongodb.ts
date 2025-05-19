/* eslint-disable @typescript-eslint/ban-ts-comment */
import mongoose from 'mongoose';
declare global {
  let mongoose: unknown; // This must be a `var` and not a `let / const`
}
// @ts-ignore
let cached = global.mongoose;

if (!cached) {
  // @ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI!;
  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    );
  }

  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('connected');
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.log(e,'++++')
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
