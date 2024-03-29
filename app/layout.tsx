import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import CartProvider from "@/cart-provide";
import { NavHeader } from "@/components/header";
import { cookies } from "next/headers";
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Audiophile",
    default: "Audiophile",
  },
  description: "Online Shopping",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  let cookieStore;

  try {
    cookieStore = JSON.parse(cookies().getAll("item")[0].value);
  } catch (error) {}

  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased bg-primary-light-gray`}
      >
        <CartProvider>
          <NavHeader cart={cookieStore} />
          {props.modal}

          {props.children}
        </CartProvider>
      </body>
    </html>
  );
}
