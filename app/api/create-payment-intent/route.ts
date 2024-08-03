import Stripe from "stripe";
import { handleUserData } from "@/libs/action";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items: number) => {
  return items;
};

export async function GET(request: Request) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(100),
      currency: "usd",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });
    return Response.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {}
}
