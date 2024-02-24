import Checkout from "@/components/details/checkout";
import Footer from "@/components/footer";
import { cookies } from "next/headers";

export default function CheckoutPage() {
  let cookieStore;

  try {
    cookieStore = JSON.parse(cookies().getAll("item")[0].value);
  } catch (error) {}

  return (
    <div>
      <Checkout cart={cookieStore} />
      <Footer />
    </div>
  );
}
