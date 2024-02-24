import Headphones from "@/components/products/headphone";
import { NavHeader } from "@/components/header";
import Footer from "@/components/footer";
import { HeadphoneBanner } from "@/components/header";
import { cookies } from "next/headers";

export default async function HeadphonePage() {
  return (
    <div>
      <HeadphoneBanner />
      <Headphones />
      <Footer />
    </div>
  );
}
