import Headphones from "@/components/products/headphone";
import { NavHeader } from "@/components/header";
import Footer from "@/components/footer";
import { HeadphoneBanner } from "@/components/header";

export default async function HeadphonePage() {
  return (
    <div>
      <NavHeader />
      <HeadphoneBanner />
      <Headphones />
      <Footer />
    </div>
  );
}
