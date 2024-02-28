"use client";
import Overlay from "../overlay";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { CartContext } from "@/cart-provide";
import Link from "next/link";
import { CartType } from "@/libs/definitions";
import { deleteCookie } from "@/libs/action";
import { useRouter } from "next/navigation";

export default function CheckoutModal({ carte }: { carte: CartType[] }) {
  const { setCart }: any = useContext(CartContext);
  const [count, setCount] = useState(2);
  let loader = carte && carte?.slice(0, count);
  let balance = carte?.length - loader?.length;
  let total = 0;
  carte && carte.map((c: CartType) => (total += c.price * c.qty));
  let vat = (total * 20) / 100;

  function handleCount() {
    if (balance == 0) {
      setCount(2);
    } else {
      setCount(count + 2);
    }
  }
  const itemName = {
    "yx1-earphones": "yx1",
    "xx59-headphones": "xx59",
    "zx7-speaker": "zx7",
    "xx99-mark-one-headphones": "xx99 mk I",
    "xx99-mark-two-headphones": "xx99 mk II",
    "zx9-speaker": "zx9",
  };

  const router = useRouter();

  return (
    <Overlay>
      <div className="w-[100%] mt-[60px] mb-[1000px] flex overflow-y-auto justify-center flex-row ">
        <section className="bg-secondary-white absolute  mx-6 rounded-lg">
          <article className="mx-8 lg:mx-12">
            <div className="mt-8 ">
              <Image
                src="/assets/checkout/icon-order-confirmation.svg"
                alt="headphone"
                width={84}
                height={104}
                className=" w-auto h-auto "
              />
            </div>

            <h1 className="text-secondary-dark font-bold text-[24px] tracking-[0.86px] mt-[23px] mb-4 leading-7">
              THANK YOU
              <br /> FOR YOUR ORDER
            </h1>
            <p className="font-medium text-[15px] opacity-50 text-secondary-dark mb-6 leading-[25px]">
              You will receive an email confirmation shortly.
            </p>

            <article className="md:flex ">
              <article className="bg-primary-gray pt-[16px] rounded-t-lg md:rounded-l-lg md:rounded-r-none">
                {carte &&
                  loader.map(
                    (
                      item: { name: string; price: number; qty: number },
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="flex items-center mb-2 justify-between"
                      >
                        <Image
                          src={`/assets/cart/image-${item?.name}.jpg`}
                          alt="headphone"
                          width={84}
                          height={104}
                          className=" w-auto h-auto ml-3"
                        />
                        <div className="mr-6">
                          <h1 className="font-bold text-[15px] w-[75px] text-secondary-dark mr-[70px] inline-block leading-[25px] ">
                            {itemName[item?.name as keyof typeof itemName]}
                          </h1>
                          <h1 className="font-bold text-[15px] text-secondary-dark leading-[25px] inline-block opacity-50 ">
                            X{item?.qty}
                          </h1>
                          <p className="font-bold text-[14px] text-secondary-dark leading-[25px] opacity-50">
                            $
                            {new Intl.NumberFormat().format(
                              Number(item?.price)
                            )}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                <div className=" border-b-[0.08px] mx-6  border-opacity-[0.08px]" />
                <p
                  onClick={handleCount}
                  className="font-bold text-[14px] text-secondary-dark leading-[25px] opacity-50 mt-3 pb-[25px] text-center cursor-pointer"
                >
                  {balance == 0 ? "view less" : `and ${balance} other item(s)`}
                </p>
              </article>

              <div className="bg-secondary-dark rounded-b-lg md:rounded-r-lg md:inline-flex items-end md:rounded-l-none">
                <article className="mx-6">
                  <h1 className="font-medium text-[18px] text-secondary-white opacity-50 pt-[15px] leading-[25px] ">
                    GRAND TOTAL
                  </h1>
                  <h1 className="font-bold text-[18px] text-secondary-white mt-[8px] pb-[19px] lg:pb-[40px] leading-normal ">
                    $ {new Intl.NumberFormat().format(total + vat + 50)}
                  </h1>
                </article>
              </div>
            </article>
            <Link href="/">
              <button
                onClick={() => {
                  setCart("");
                  deleteCookie();
                  !carte && router.back();
                }}
                className="h-12 w-[100%] mt-[23px] mb-6 bg-primary-brown hover:bg-secondary-light-brown tracking-[1px] leading-normal text-secondary-white font-bold text-sm"
              >
                BACK TO HOME
              </button>
            </Link>
          </article>
        </section>
      </div>
    </Overlay>
  );
}
