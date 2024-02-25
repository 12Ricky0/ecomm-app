import ProductDetails from "@/components/details/product-details";
import Footer from "@/components/footer";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  return (
    <div>
      <ProductDetails slug={slug} />
      <Footer />
    </div>
  );
}
