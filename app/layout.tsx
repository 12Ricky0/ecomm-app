import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import CartProvider from "@/cart-provide";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased bg-primary-light-gray`}
      >
        <CartProvider>
          {props.children}
          {props.modal}
        </CartProvider>
      </body>
    </html>
  );
}
