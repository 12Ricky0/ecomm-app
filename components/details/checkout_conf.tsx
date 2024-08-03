"use client";
import Checkout from "@/components/details/checkout";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function CheckoutConfiguration({ cart }: { cart: any }) {
  const [clientSecret, setClientSecret] = useState("");
  //   useEffect(() => {
  //     // Create PaymentIntent as soon as the page loads
  //     fetch("/api/create-payment-intent", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setClientSecret(data.clientSecret));
  //   }, []);

  const appearance = {
    theme: "stripe",
  };
  const options: any = {
    // clientSecret,
    appearance,
    mode: "payment",
    amount: 200,
    currency: "usd",
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <Checkout cart={cart} />
    </Elements>
  );
}
