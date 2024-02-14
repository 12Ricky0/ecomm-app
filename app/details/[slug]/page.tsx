import { productDetails } from "@/libs/action";
import ProductDetails from "@/components/details/product-details";
import Footer from "@/components/footer";
import { NavHeader } from "@/components/header";
import { cookies } from "next/headers";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  //   const cookieStore = cookies();
  //   const theme = cookieStore.get("item");
  //   console.log(theme);
  return (
    <div>
      <NavHeader />
      <ProductDetails slug={slug} />
      <Footer />
    </div>
  );
}
