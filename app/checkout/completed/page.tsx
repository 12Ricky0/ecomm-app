import CheckoutModal from "@/components/modal/checkout-modal";
import { cookies } from "next/headers";

export default function Completed() {
  let cookieStore;

  try {
    cookieStore = JSON.parse(cookies().getAll("item")[0].value);
  } catch (error) {}

  return <CheckoutModal carte={cookieStore} />;
}
