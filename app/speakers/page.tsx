import Speakers from "@/components/products/speaker";
import Footer from "@/components/footer";
import { SpeakerBanner } from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers",
};

export default async function SpeakerPage() {
  return (
    <div>
      <SpeakerBanner />
      <Speakers />
      <Footer />
    </div>
  );
}
