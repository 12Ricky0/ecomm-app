import { mongoDBConnection } from "@/libs/action";
import Product from "@/libs/schema";

export const revalidate = true;

export async function POST(request: Request) {
  const res = await request.json();
  await mongoDBConnection();
  await Product.create(res);
  return Response.json(
    { message: "Data Inserted Sucessfully" },
    { status: 200 }
  );
}

export async function GET(request: Request) {
  await mongoDBConnection();
  console.log(request.url);
  let res = await Product.find();

  //   if (request) {
  //     res = await Product.findOne({ slug: query });
  //   } else {
  //   }
  return Response.json(res);
}
// export async function GET(query: string) {
//   await mongoDBConnection();
//   console.log(query);
//   let res;
//   if (query) {
//     res = await Product.findOne({ slug: query });
//   } else {
//     res = await Product.find();
//   }
//   return Response.json(res);
// }
