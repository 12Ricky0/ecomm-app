"use client";
import { useContext, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { QuantityButton, CheckoutButton, QtyButton2 } from "../buttons";
import { CartContext } from "@/cart-provide";
import { Cart } from "@/libs/definitions";

import Overlay from "../overlay";
export default function Cart() {
  const { cart, items, setCart, setItems, displayCart, setDisplayCart }: any =
    useContext(CartContext);
  let total = 0;
  const itemName = {
    "yx1-earphones": "yx1",
    "xx59-headphones": "xx59",
    "zx7-speaker": "zx7",
    "xx99-mark-one-headphones": "xx99 mk I",
    "xx99-mark-two-headphones": "xx99 mk II",
    "zx9-speaker": "zx9",
  };

  // const [cartContent, setCartContent] = useState<
  //   { name: string; price: number }[]
  // >([]);
  // let value = useRef<{ name: string; price: number; qty: number }[]>();

  // try {
  //   value.current = JSON.parse(localStorage.getItem("cart") || "");
  // } catch (error) {}

  cart && cart.map((c: Cart) => (total += c.price * c.qty));
  return (
    <Overlay>
      <section className="z-[1000] bg-secondary-white md:w-[377px] overflow-auto lg:mr-[165px] md:mr-10 rounded-lg mx-6 relative md:absolute md:right-0 opacity-100 mt-6">
        <article className="mx-[28px] md:mx-[33px]">
          <article className="flex justify-between pt-8">
            <h1
              // onClick={() => console.log(value)}
              className="text-secondary-dark text-[18px] font-bold leading-normal tracking-[1.29px] mb-[31px]"
            >
              Cart({cart?.length})
            </h1>
            <span
              onClick={() => {
                setCart("");
                localStorage.removeItem("cart");
                setDisplayCart(!displayCart);
              }}
              className="cursor-pointer underline opacity-50 hover:text-primary-brown hover:opacity-100 text-secondary-dark font-medium text-md leading-[25px]"
            >
              Remove all
            </span>
          </article>
          {cart &&
            cart.map((c: Cart, index: number) => (
              <div key={index} className="mb-6">
                <article className="flex justif items-center ">
                  <Image
                    src={`/assets/cart/image-${c.name}.jpg`}
                    alt="headephone image"
                    width={64}
                    height={64}
                    className="rounded-lg mb-2 mr-4"
                    quality={100}
                  />
                  <div className="inline-flex justify-between items-center">
                    <div className="">
                      <h1 className="font-bold text-md w-[75px] text-secondary-dark leading-[25px]">
                        {itemName[c.name as keyof typeof itemName]}
                      </h1>
                      <span className="font-bold text-[14px] opacity-50 text-secondary-dark leading-[25px]">
                        $ {new Intl.NumberFormat().format(Number(c.price))}
                      </span>
                    </div>
                    <div className="absolute md:right-[33px] right-[28px]">
                      {/* <QuantityButton
                          defaultValue={Number(c.qty)}
                          className="bg-primary-gray flex py-[7px] w-[96px] justify-center"
                        /> */}
                      <QtyButton2 name={c.name} quantity={c.qty} />
                    </div>
                  </div>
                </article>
              </div>
            ))}
          <article className="mt-2 flex justify-between pb-6">
            <span className="cursor-pointer opacity-50 text-secondary-dark font-medium text-md leading-[25px]">
              Total
            </span>
            <span className="font-bold text-[18px] leading-normal">
              $ {new Intl.NumberFormat().format(Number(total))}
            </span>
          </article>
        </article>
        <CheckoutButton />
      </section>
    </Overlay>
  );
}
