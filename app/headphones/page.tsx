import Headphones from "@/components/products/headphone";
import Footer from "@/components/footer";
import { HeadphoneBanner } from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Headphones",
};

export default async function HeadphonePage() {
  return (
    <div>
      <HeadphoneBanner />
      <Headphones />
      <Footer />
    </div>
  );
}
