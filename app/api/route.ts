import { mongoDBConnection } from "@/libs/action";
import Product from "@/libs/schema";
import mongoose from "mongoose";

export const revalidate = true;

export async function POST(request: Request) {
  const res = await request.json();
  await mongoDBConnection();
  await Product.create(res);
  // await mongoose.connection.close();

  return Response.json(
    { message: "Data Inserted Sucessfully" },
    { status: 200 }
  );
}

export async function GET(request: Request) {
  await mongoDBConnection();
  console.log(request.url);
  let res = await Product.find();
  // await mongoose.connection.close();

  return Response.json(res);
}
