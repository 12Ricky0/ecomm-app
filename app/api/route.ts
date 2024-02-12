import mongoDBConnection from "@/libs/action";
import Product from "@/libs/schema";

export async function POST(request: Request) {
  const res = await request.json();
  await mongoDBConnection();
  await Product.create(res);
  return Response.json(
    { message: "Data Inserted Sucessfully" },
    { status: 200 }
  );
}

export async function GET() {
  await mongoDBConnection();
  const res = await Product.find();
  return Response.json({ res });
}
