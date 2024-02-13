"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { create } from "@/libs/action";

export function ButtonOne({ href }: { href: string }) {
  return (
    <Link href={href}>
      <button className="h-12 w-40 bg-primary-brown hover:bg-secondary-light-brown tracking-[1px] leading-normal text-secondary-white font-bold text-sm">
        SEE PRODUCT
      </button>
    </Link>
  );
}

export function ButtonTwo({ href }: { href: string }) {
  return (
    <Link href={href}>
      <button className="h-12 w-40 border hover:bg-secondary-dark tracking-[1px] leading-normal text-primary-very-dark hover:text-secondary-white font-bold text-sm">
        SEE PRODUCT
      </button>
    </Link>
  );
}

export function ButtonThree({ href }: { href: string }) {
  return (
    <div className="flex items-center justify-center">
      <Link
        href={href}
        className="tracking-[1px] leading-normal font-bold text-sm mr-[13px] hover:text-primary-brown cursor-pointer text-secondary-dark"
      >
        SHOP
      </Link>
      <div>
        <Image
          src="/assets/shared/desktop/icon-arrow-right.svg"
          alt="arrow-right"
          width={5}
          height={10}
          className="h-auto w-auto"
        />
      </div>
    </div>
  );
}

export function ButtonFour({ href }: { href: string }) {
  return (
    <Link href={href}>
      <button className="h-12 w-40 hover:border bg-secondary-dark tracking-[1px] hover:bg-none leading-normal hover:text-primary-very-dark text-secondary-white font-bold text-sm">
        SEE PRODUCT
      </button>
    </Link>
  );
}
// ("bg-primary-gray flex py-[15px] w-[120px] justify-center");
export function QuantityButton({ className }: { className: string }) {
  let [quantity, setQuantity] = useState(1);
  function handleReduce() {
    if (quantity > 1) {
      setQuantity(quantity--);
    }
  }
  return (
    <div className={className}>
      <button
        onClick={handleReduce}
        className="text-secondary-dark w-4 opacity-25 font-bold text-[13px] tracking-[1px] leading-normal"
      >
        -
      </button>
      <span className="px-[20px] text-secondary-dark font-bold text-[13px] tracking-[1px] leading-normal">
        {quantity}
      </span>
      <button
        onClick={() => setQuantity(quantity++)}
        className="text-secondary-dark opacity-25 font-bold text-[13px] tracking-[1px] w-4 leading-normal"
      >
        +
      </button>
    </div>
  );
}

export function CheckoutButton() {
  return (
    <div className="mx-7 pb-[31px]">
      <button className="h-12 w-[100%]  bg-primary-brown hover:bg-secondary-light-brown tracking-[1px] leading-normal text-secondary-white font-bold text-sm">
        CHECKOUT
      </button>
    </div>
  );
}

export function AddToCart({ query }: { query: any }) {
  let item: string[] = [];

  function handleClick() {
    item.push(query);
    console.log(item);
  }

  return (
    <button
      onClick={handleClick}
      className="h-12 w-40 bg-primary-brown hover:bg-secondary-light-brown tracking-[1px] leading-normal text-secondary-white font-bold text-sm"
    >
      ADD TO CARD
    </button>
  );
}
