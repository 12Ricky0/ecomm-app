import Speakers from "@/components/products/speaker";
import { NavHeader } from "@/components/header";
import Footer from "@/components/footer";
import { SpeakerBanner } from "@/components/header";
import { cookies } from "next/headers";

export default async function SpeakerPage() {
  return (
    <div>
      <SpeakerBanner />
      <Speakers />
      <Footer />
    </div>
  );
}
