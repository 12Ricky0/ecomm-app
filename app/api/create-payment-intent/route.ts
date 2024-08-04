import Stripe from "stripe";
import { handleUserData } from "@/libs/action";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { amount } = await request.json();
  // try {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "sek",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });
  console.log(amount);
  return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  // } catch (error) {}
}
