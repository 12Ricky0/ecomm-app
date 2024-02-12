import Speakers from "@/components/products/speaker";
import { NavHeader } from "@/components/header";
import Footer from "@/components/footer";
import { SpeakerBanner } from "@/components/header";

export default async function SpeakerPage() {
  return (
    <div>
      <NavHeader />
      <SpeakerBanner />
      <Speakers />
      <Footer />
    </div>
  );
}
