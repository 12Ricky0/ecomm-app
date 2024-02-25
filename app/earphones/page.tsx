import Earphones from "@/components/products/earphone";
import Footer from "@/components/footer";
import { EarphoneBanner } from "@/components/header";

export default async function EarphonePage() {
  return (
    <div>
      <EarphoneBanner />
      <Earphones />
      <Footer />
    </div>
  );
}
