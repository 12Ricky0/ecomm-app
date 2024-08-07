"use client";
import Checkout from "@/components/details/checkout";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function CheckoutConfiguration({
  cart,
  amount,
}: {
  cart: any;
  amount: Number;
}) {
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount }),
    })
      .then((response) => response.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [amount]);

  const appearance = {
    theme: "stripe",
    variables: { colorPrimary: "#d87d4a" },
  };
  const options: any = {
    appearance,
    mode: "payment",
    amount: amount,
    currency: "usd",
  };

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <Checkout clientSecret={clientSecret} cart={cart} />
        </Elements>
      )}{" "}
    </>
  );
}
