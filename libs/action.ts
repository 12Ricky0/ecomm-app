"use server";
import mongoose from "mongoose";
import Product from "./schema";
import { cookies } from "next/headers";

export async function mongoDBConnection() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to MongoDB");
  } catch (error: any) {
    console.error("Error connecting to MongoDB");
    throw new Error("Error connecting to MongoDB", error);
  }
}

export async function productDetails(query: string) {
  try {
    await mongoDBConnection();
    let res = await Product.findOne({ slug: query });
    return Response.json(res);
  } catch (error) {
    console.error(error);
  }
}

export async function create(data: string) {
  cookies().set({
    name: "item",
    value: data,
  });
}
