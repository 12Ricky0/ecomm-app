"use client";
import { useState, useContext, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { create } from "@/libs/action";
import { CartContext } from "@/cart-provide";

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
      <button className="h-12 w-40 hover:border bg-secondary-dark tracking-[1px] hover:bg-none leading-normal hover:bg-primary-very-dark text-secondary-white font-bold text-sm">
        SEE PRODUCT
      </button>
    </Link>
  );
}

export function QuantityButton({
  className,
  defaultValue,
}: {
  className: string;
  defaultValue?: number;
}) {
  // let [quantity, setQuantity] = useState(1);
  const { quantity, setQuantity, displayCart }: any = useContext(CartContext);

  function handleReduce() {
    if (quantity > 1) {
      setQuantity((prevCount: any) => prevCount - 1);
      // localStorage.setItem("quantity", JSON.stringify(quantity));
    }
  }
  // useEffect(() => {
  //   localStorage.setItem("quantity", JSON.stringify(quantity));
  // }, [quantity]);
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
          // localStorage.setItem("quantity", JSON.stringify(quantity));
        }}
        className="text-secondary-dark hover:text-primary-brown opacity-25 font-bold text-[13px] tracking-[1px] w-4 leading-normal"
      >
        +
      </button>
    </div>
  );
}

export function QtyButton2({ quantity }: { quantity: number }) {
  return (
    <div className="bg-primary-gray flex py-[7px] w-[96px] justify-center">
      <button className="text-secondary-dark hover:text-primary-brown w-4 opacity-25 font-bold text-[13px] tracking-[1px] leading-normal">
        -
      </button>
      <span className="px-[20px] text-secondary-dark font-bold text-[13px] tracking-[1px] leading-normal">
        {quantity}
      </span>
      <button
        // onClick={() => {
        //   setQuantity((prevCount: any) => prevCount + 1);
        // }}
        className="text-secondary-dark hover:text-primary-brown opacity-25 font-bold text-[13px] tracking-[1px] w-4 leading-normal"
      >
        +
      </button>
    </div>
  );
}

export function CheckoutButton() {
  let value = useRef<{ name: string; price: number; qty: number }[]>();
  const { setDisplayCart, displayCart }: any = useContext(CartContext);

  try {
    value.current = JSON.parse(localStorage.getItem("cart") || "");
  } catch (error) {}

  return (
    <Link href="/checkout">
      <div className="mx-7 pb-[31px]">
        <button
          disabled={value.current ? false : true}
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

  function handleClick() {
    const updatedCart = [...cart, { name: name, price: price, qty: quantity }];
    const nameInCart = cart && cart.some((c: any) => c.name === name);
    if (nameInCart) {
      return false;
    } else {
      setCart((prevData: any) => [
        ...prevData,
        { name: name, price: price, qty: quantity },
      ]);
      // setItems(updatedCart.length);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      // console.log(cart);
      // setQuantity(1);
    }
    // items.add(query);
    // setCart(items.size);
  }

  return (
    <button
      onClick={handleClick}
      className="h-12 w-40 bg-primary-brown hover:bg-secondary-light-brown tracking-[1px] leading-normal text-secondary-white font-bold text-sm"
    >
      ADD TO CART
    </button>
  );
}
