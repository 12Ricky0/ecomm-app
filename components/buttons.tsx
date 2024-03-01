"use client";
import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "@/cart-provide";
import { setCookies, getCookies } from "@/libs/action";
import { CartType } from "@/libs/definitions";
import { useRouter } from "next/navigation";

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
  const { setDisplayMenu }: any = useContext(CartContext);

  return (
    <div className="flex items-center justify-center">
      <Link
        onClick={() => setDisplayMenu(false)}
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
      <button className="h-12 w-40 hover:border bg-secondary-dark tracking-[1px] hover:bg-none leading-normal hover:bg-primary-very-dark text-secondary-white font-bold text-sm">
        SEE PRODUCT
      </button>
    </Link>
  );
}

export function QuantityButton({ className }: { className: string }) {
  const { quantity, setQuantity }: any = useContext(CartContext);

  function handleReduce() {
    if (quantity > 1) {
      setQuantity((prevCount: any) => prevCount - 1);
    }
  }

  return (
    <div className={className}>
      <button
        onClick={handleReduce}
        className="text-secondary-dark w-4 hover:text-primary-brown opacity-25 font-bold text-[13px] tracking-[1px] leading-normal"
      >
        -
      </button>
      <span className="px-[20px] text-secondary-dark font-bold text-[13px] tracking-[1px] leading-normal">
        {quantity}
      </span>
      <button
        onClick={() => {
          setQuantity((prevCount: any) => prevCount + 1);
        }}
        className="text-secondary-dark hover:text-primary-brown opacity-25 font-bold text-[13px] tracking-[1px] w-4 leading-normal"
      >
        +
      </button>
    </div>
  );
}

export function QtyButton2({
  quantity,
  name,
}: {
  quantity: number;
  name: string;
}) {
  const { cart }: any = useContext(CartContext);

  const [count, setCount] = useState(quantity);

  function handleIncrease() {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (item: any) => item.name === name
    );

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].qty += 1;

      setCount(count + 1);
      setCookies(updatedCart);
    }
  }

  function handleDecrease() {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (item: any) => item.name === name
    );

    if (existingItemIndex !== -1 && count > 1) {
      updatedCart[existingItemIndex].qty -= 1;
      setCount(count - 1);
      setCookies(updatedCart);
    }
  }
  return (
    <div className="bg-primary-gray flex py-[7px] w-[96px] justify-center">
      <button
        onClick={handleDecrease}
        className="text-secondary-dark hover:text-primary-brown w-4 opacity-25 font-bold text-[13px] tracking-[1px] leading-normal"
      >
        -
      </button>
      <span className="px-[20px] text-secondary-dark font-bold text-[13px] tracking-[1px] leading-normal">
        {count}
      </span>
      <button
        onClick={handleIncrease}
        className="text-secondary-dark hover:text-primary-brown opacity-25 font-bold text-[13px] tracking-[1px] w-4 leading-normal"
      >
        +
      </button>
    </div>
  );
}

export function CheckoutButton({ cart }: { cart: CartType[] }) {
  const { setDisplayCart, displayCart }: any = useContext(CartContext);

  return (
    <Link href="/checkout">
      <div className="mx-7 pb-[31px]">
        <button
          disabled={cart ? false : true}
          onClick={() => setDisplayCart(!displayCart)}
          className="h-12 w-[100%]  bg-primary-brown hover:bg-secondary-light-brown tracking-[1px] leading-normal text-secondary-white font-bold text-sm"
        >
          CHECKOUT
        </button>
      </div>
    </Link>
  );
}

export function AddToCart({ name, price }: { name: string; price: number }) {
  const { quantity, setCart, cart, setQuantity }: any = useContext(CartContext);
  const [added, setAdded] = useState("Add To Cart");

  const updatedCart = [...cart, { name: name, price: price, qty: quantity }];
  const nameInCart = cart && cart.some((c: any) => c.name === name);

  function handleClick() {
    if (nameInCart) {
      return false;
    } else {
      setCart((prevData: any) => [
        ...prevData,
        { name: name, price: price, qty: quantity },
      ]);
      setCookies(updatedCart);
      setQuantity(1);
      setAdded("Added");
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`h-12 w-40 ${
        nameInCart ? "bg-secondary-light-brown" : "bg-primary-brown"
      } hover:bg-secondary-light-brown tracking-[1px] leading-normal text-secondary-white font-bold text-sm`}
    >
      {nameInCart ? "Added " : added}
    </button>
  );
}

export function GoBack() {
  const router = useRouter();
  return (
    <div
      className=" text-secondary-dark opacity-50 font-medium text-md leading-[25px] cursor-pointer "
      onClick={() => router.back()}
    >
      <p className="mt-4 inline-block lg:mt-[80px] md:mt-[33px]">Go Back</p>
    </div>
  );
}
