import Image from "next/image";
import { QuantityButton, CheckoutButton } from "../buttons";

import Overlay from "../overlay";
export default function Cart() {
  return (
    <Overlay>
      <section className="z-[1000] bg-secondary-white lg:w-[377px] lg:mr-[165px] md:mr-10 rounded-lg mx-6 relative md:absolute md:right-0 opacity-100 mt-6">
        <article className="mx-[28px] md:mx-[33px]">
          <article className="flex justify-between pt-8">
            <h1 className="text-secondary-dark text-[18px] font-bold leading-normal tracking-[1.29px]">
              Cart(3)
            </h1>
            <span className="cursor-pointer underline opacity-50 hover:text-primary-brown hover:opacity-100 text-secondary-dark font-medium text-md leading-[25px]">
              Remove all
            </span>
          </article>

          <div className="mt-[31px]">
            <article className="flex justify-between items-center pb-6">
              <Image
                src="/assets/cart/image-xx59-headphones.jpg"
                alt="headephone image"
                width={64}
                height={64}
                className="rounded-lg "
                quality={100}
              />
              <div>
                <h1 className="font-bold text-md text-secondary-dark leading-[25px]">
                  XX99 Mk I
                </h1>
                <span className="font-bold text-[14px] opacity-50 text-secondary-dark leading-[25px]">
                  $ 2,999
                </span>
              </div>
              <QuantityButton className="bg-primary-gray flex py-[7px] w-[96px] justify-center" />
            </article>
          </div>

          <article className="mt-2 flex justify-between pb-6">
            <span className="cursor-pointer opacity-50 text-secondary-dark font-medium text-md leading-[25px]">
              TOTAL
            </span>
            <span className="font-bold text-[18px] leading-normal">
              $ 5,396
            </span>
          </article>
        </article>
        <CheckoutButton />
      </section>
    </Overlay>
  );
}
