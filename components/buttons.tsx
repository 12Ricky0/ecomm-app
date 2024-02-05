"use client";
import { useState } from "react";
import Image from "next/image";

export function ButtonOne() {
  return (
    <button className="h-12 w-40 bg-primary-brown hover:bg-secondary-light-brown tracking-[1px] leading-normal text-secondary-white font-bold text-sm">
      SEE PRODUCT
    </button>
  );
}

export function ButtonTwo() {
  return (
    <button className="h-12 w-40 border hover:bg-secondary-dark tracking-[1px] leading-normal text-primary-very-dark hover:text-secondary-white font-bold text-sm">
      SEE PRODUCT
    </button>
  );
}

export function ButtonThree() {
  return (
    <div className="flex items-center justify-center">
      <span className="tracking-[1px] leading-normal font-bold text-sm mr-[13px] hover:text-primary-brown cursor-pointer text-secondary-dark">
        SHOP
      </span>
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

export function ButtonFour() {
  return (
    <button className="h-12 w-40 hover:border bg-secondary-dark tracking-[1px] hover:bg-none leading-normal hover:text-primary-very-dark text-secondary-white font-bold text-sm">
      SEE PRODUCT
    </button>
  );
}

export function QuantityButton() {
  let [quantity, setQuantity] = useState(1);
  function handleReduce() {
    if (quantity > 1) {
      setQuantity(quantity--);
    }
  }
  return (
    <div className="bg-primary-gray flex py-[15px] w-[120px] justify-center">
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
