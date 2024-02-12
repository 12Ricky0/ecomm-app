import mongoose from "mongoose";

export default async function mongoDBConnection() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to MongoDB");
  } catch (error: any) {
    console.error("Error connecting to MongoDB");
    throw new Error("Error connecting to MongoDB", error);
  }
}
