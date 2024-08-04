const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { amount } = await request.json();
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  console.log(amount);
  return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}
