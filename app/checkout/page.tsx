import Checkout from "@/components/details/checkout";
import CheckoutConfiguration from "@/components/details/checkout_conf";
import Footer from "@/components/footer";
import { cookies } from "next/headers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  let cookieStore;

  try {
    cookieStore = JSON.parse(cookies().getAll("item")[0].value);
  } catch (error) {}

  let total = 0;

  cookieStore && cookieStore.map((c: any) => (total += c.price * c.qty));
  let vat = (total * 20) / 100;

  const amount_to_pay = (total + 50 + vat) * 100;

  return (
    <div>
      <CheckoutConfiguration
        amount={Math.round(amount_to_pay)}
        cart={cookieStore}
      />
      <Footer />
    </div>
  );
}
