"use server";
import mongoose from "mongoose";
import Product from "./schema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function handleUserData(formData: FormData) {
  const rawFormData = Object.fromEntries(formData?.entries());
  console.log(rawFormData);
  redirect("/completed");
}
