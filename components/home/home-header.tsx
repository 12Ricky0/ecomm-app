"use client";
import { ButtonOne } from "../buttons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState, useRef } from "react";
import { CartContext } from "@/cart-provide";
import Cart from "../modal/cart";

export default function HomeHeader() {
  const pathname = usePathname();
  const { displayCart, setDisplayCart }: any = useContext(CartContext);
  let value = useRef<{ name: string; price: number }[]>();

  try {
    value.current = JSON.parse(localStorage.getItem("cart") || "");
  } catch (error) {}

  return (
    <section className="bg-headphone-mob lg:flex flex-col lg:bg-headphone-desktop md:bg-headphone-tablet bg-cover pb-[112px] md:pb-[250px] md:mb-[50px] lg:mb-[100px] text-center bg-center">
      <header>
        <nav className=" h-[90px] md:mx-[40px] lg:mx-[165px]  border-b-secondary-white border-opacity-10 border-b">
          <div className="h-[90px] lg:hidden flex mx-6 md:mx-0 justify-between items-center">
            <Image
              src="/assets/shared/tablet/icon-hamburger.svg"
              alt="hamburger"
              width={16}
              height={15}
              className="w-auto h-auto"
            />
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="logo"
              width={143}
              height={25}
              className="w-auto h-auto"
            />
            <div>
              <Image
                src="/assets/shared/desktop/icon-cart.svg"
                alt="cart"
                width={23}
                height={20}
                className="w-auto h-auto hover:outline-dashed outline-primary-brown"
                onClick={() => setDisplayCart(!displayCart)}
              />
              {value && (
                <div className="bg-primary-brown w-5 h-5 absolute flex items-center justify-center rounded-[50%] translate-x-5 -translate-y-9">
                  <span className="text-[10px] text-secondary-white font-bold">
                    {value.current?.length}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* DESKTOP DESIGN */}
          <div className="lg:flex hidden justify-between items-center h-[90px]">
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="logo"
              width={143}
              height={25}
              className="w-auto h-auto"
            />

            <div className="inline-flex  gap-[34px]">
              <Link
                className={`font-bold  text-sm leading-6 tracking-[2px] hover:outline-dashed outline-primary-brown ${
                  pathname === "/"
                    ? "text-primary-brown"
                    : "text-secondary-white"
                }`}
                href="/"
              >
                HOME
              </Link>
              <Link
                className={`font-bold  text-sm leading-6 tracking-[2px] hover:outline-dashed outline-primary-brown ${
                  pathname === "/headphones"
                    ? "text-primary-brown"
                    : "text-secondary-white"
                }`}
                href="/headphones"
              >
                HEADPHONES
              </Link>
              <Link
                className={`font-bold  text-sm leading-6 tracking-[2px] hover:outline-dashed outline-primary-brown ${
                  pathname === "/speakers"
                    ? "text-primary-brown"
                    : "text-secondary-white"
                }`}
                href="/speakers"
              >
                SPEAKERS
              </Link>
              <Link
                className={`font-bold  text-sm leading-6 tracking-[2px] hover:outline-dashed outline-primary-brown ${
                  pathname === "/earphones"
                    ? "text-primary-brown"
                    : "text-secondary-white"
                }`}
                href="/earphones"
              >
                EARPHONES
              </Link>
            </div>
            <div>
              <Image
                src="/assets/shared/desktop/icon-cart.svg"
                alt="cart"
                width={23}
                height={20}
                className="w-auto h-auto active:outline-dashed outline-primary-brown cursor-pointer"
                onClick={() => setDisplayCart(!displayCart)!}
              />
              {value.current && (
                <article className="bg-primary-brown w-5 h-5 absolute flex items-center justify-center rounded-[50%] translate-x-5 -translate-y-9">
                  <p className="text-[10px] text-secondary-white font-bold">
                    {value.current?.length}
                  </p>
                </article>
              )}
            </div>
          </div>
        </nav>
        {displayCart && <Cart />}
      </header>

      <article className="lg:translate-y-[40%]">
        <article className="pt-[110px] md:pt-[170px] lg:pt-[0px] lg:text-left md:w-[395px] lg:ml-[165px] lg:block md:inline-flex flex-col justify-center items-center">
          <h3 className="leading-normal tracking-[10px] text-secondary-white opacity-50 text-semi font-normal text-center lg:text-left">
            NEW PRODUCT
          </h3>
          <h1 className="tracking-[1.29px] md:tracking-[2px] mt-4 md:mt-6 mb-6 leading-10 md:leading-[58px] text-secondary-white font-bold text-xl md:text-xxl text-center  lg:text-left">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="opacity-75 mx-[50px] lg:mx-0 md:w-[349px] text-secondary-white text-md leading-6 font-medium text-center  lg:text-left mb-[28px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <ButtonOne href="/details/xx99-mark-two-headphones" />
        </article>
      </article>
    </section>
  );
}
