import Checkout from "@/components/details/checkout";
import Footer from "@/components/footer";
import { NavHeader } from "@/components/header";
import CheckoutModal from "@/components/modal/checkout-modal";

export default function CheckoutPage() {
  return (
    <div>
      <NavHeader />
      <CheckoutModal />
      <Checkout />
      <Footer />
    </div>
  );
}
