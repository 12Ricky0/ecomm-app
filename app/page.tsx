import Footer from "@/components/footer";
import { NavHeader, HeadphoneBanner } from "@/components/header";
import HomeHeader from "@/components/home/home-header";
import Headphone from "@/components/home/products";
import Headphones from "@/components/products/headphone";

export default function Home() {
  return (
    <div>
      <NavHeader />
      <HeadphoneBanner />
      <Headphones />
      <Footer />
      {/* <HomeHeader />
      <Headphone />
      <Footer /> */}
    </div>
  );
}
