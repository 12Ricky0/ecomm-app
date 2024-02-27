import Earphones from "@/components/products/earphone";
import Footer from "@/components/footer";
import { EarphoneBanner } from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earphones",
};

export default async function EarphonePage() {
  return (
    <div>
      <EarphoneBanner />
      <Earphones />
      <Footer />
    </div>
  );
}
