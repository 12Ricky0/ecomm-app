import Earphones from "@/components/products/earphone";
import { NavHeader } from "@/components/header";
import Footer from "@/components/footer";
import { EarphoneBanner } from "@/components/header";

export default async function EarphonePage() {
  return (
    <div>
      <NavHeader />
      <EarphoneBanner />
      <Earphones />
      <Footer />
    </div>
  );
}
