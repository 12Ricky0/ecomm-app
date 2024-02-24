import Earphones from "@/components/products/earphone";
import { NavHeader } from "@/components/header";
import Footer from "@/components/footer";
import { EarphoneBanner } from "@/components/header";
import { cookies } from "next/headers";

export default async function EarphonePage() {
  return (
    <div>
      <EarphoneBanner />
      <Earphones />
      <Footer />
    </div>
  );
}
