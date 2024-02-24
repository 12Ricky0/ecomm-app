"use server";
import mongoose from "mongoose";
import Product from "./schema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CartType } from "./definitions";

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

export async function setCookies(data: CartType[]) {
  cookies().set({
    name: "item",
    value: JSON.stringify(data),
  });
}
export async function getCookies() {
  try {
    let cookieStore = JSON.parse(cookies().getAll("item")[0].value);
    return cookieStore;
  } catch (error) {}
}

export async function deleteCookie() {
  try {
    cookies().delete("item");
  } catch (error) {}
}
export async function storedCookie() {
  try {
    cookies().has("item");
  } catch (error) {}
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
  redirect("/checkout/completed");
}
