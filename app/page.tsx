import Footer from "@/components/footer";
import {
  NavHeader,
  HeadphoneBanner,
  SpeakerBanner,
  EarphoneBanner,
} from "@/components/header";
import HomeHeader from "@/components/home/home-header";
import HomePage from "@/components/home/products";
import Headphones from "@/components/products/headphone";
import Speakers from "@/components/products/speaker";
import Earphones from "@/components/products/earphone";
import ProductDetails from "@/components/details/product-details";
import Overlay from "@/components/overlay";
import Cart from "@/components/modal/cart";
import Checkout from "@/components/details/checkout";

export default function Home() {
  return (
    <div>
      <NavHeader />
      {/* <Cart />

      <ProductDetails /> */}
      <Checkout />
      <Footer />
      {/* <HomeHeader />
      <Headphone />
      <Footer /> */}
    </div>
  );
}
