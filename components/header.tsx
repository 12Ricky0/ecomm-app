"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" h-[90px] bg-primary-very-dark border-b-secondary-white border-opacity-10 border-b">
      <div className="h-[90px] lg:hidden flex mx-6 justify-between items-center">
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
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt="cart"
          width={23}
          height={20}
          className="w-auto h-auto"
        />
      </div>

      {/* DESKTOP DESIGN */}
      <div className="lg:flex hidden justify-around items-center h-[90px]">
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          width={143}
          height={25}
          className="w-auto h-auto"
        />

        <div className="inline-flex  gap-[34px]">
          <Link
            className="font-bold text-secondary-white text-sm leading-6 tracking-[2px] hover:text-primary-brown"
            href="#"
          >
            HOME
          </Link>
          <Link
            className="font-bold text-secondary-white text-sm leading-6 tracking-[2px] hover:text-primary-brown"
            href="#"
          >
            HEADPHONES
          </Link>
          <Link
            className="font-bold text-secondary-white text-sm leading-6 tracking-[2px] hover:text-primary-brown"
            href="#"
          >
            SPEAKERS
          </Link>
          <Link
            className="font-bold text-secondary-white text-sm leading-6 tracking-[2px] hover:text-primary-brown"
            href="#"
          >
            EARPHONES
          </Link>
        </div>
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt="cart"
          width={23}
          height={20}
          className="w-auto h-auto"
        />
      </div>
    </header>
  );
}
