"use client";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "./modal/cart";
import { CartContext } from "@/cart-provide";
import { CartType } from "@/libs/definitions";
import Menu from "./modal/menu";

export function NavHeader({ cart }: { cart: CartType[] }) {
  const pathname = usePathname();
  const { displayCart, setDisplayCart, displayMenu, setDisplayMenu }: any =
    useContext(CartContext);

  return (
    <nav className={`${pathname === "/" && "hidden"} bg-primary-very-dark`}>
      <header className=" h-[90px] md:mx-[40px] lg:mx-[165px] bg-primary-very-dark border-b-secondary-white border-opacity-10 border-b">
        <div className="h-[90px] lg:hidden flex mx-6 md:mx-0 justify-between items-center">
          <Image
            src="/assets/shared/tablet/icon-hamburger.svg"
            alt="hamburger"
            width={16}
            height={15}
            className="w-auto h-auto"
            onClick={() => setDisplayMenu(!displayMenu)}
          />
          <Link href="/">
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="logo"
              width={143}
              height={25}
              className="w-auto h-auto"
            />
          </Link>
          <div>
            <Image
              src="/assets/shared/desktop/icon-cart.svg"
              alt="cart"
              width={23}
              height={20}
              className="w-auto h-auto active:outline-dashed cursor-pointer"
              onClick={() => {
                setDisplayCart(!displayCart);
              }}
            />
            {
              <div className="bg-primary-brown w-5 h-5 absolute flex items-center justify-center rounded-[50%] translate-x-5 -translate-y-9">
                <span className="text-[10px] text-secondary-white font-bold">
                  {cart ? cart?.length : 0}
                </span>
              </div>
            }
          </div>
        </div>

        {/* DESKTOP DESIGN */}
        <div className="lg:flex hidden justify-between items-center h-[90px]">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="logo"
              width={143}
              height={25}
              className="w-auto h-auto"
            />
          </Link>
          <div className="inline-flex  gap-[34px]">
            <Link
              className={`font-bold  text-sm leading-6 tracking-[2px] hover:outline-dashed outline-primary-brown ${
                pathname === "/" ? "text-primary-brown" : "text-secondary-white"
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
              className="w-auto h-auto active:outline-dashed cursor-pointer"
              onClick={() => {
                setDisplayCart(!displayCart);
              }}
            />
            {
              <div className="bg-primary-brown w-5 h-5 absolute flex items-center justify-center rounded-[50%] translate-x-5 -translate-y-9">
                <span className="text-[10px] text-secondary-white font-bold">
                  {cart ? cart?.length : 0}
                </span>
              </div>
            }
          </div>
        </div>
      </header>
      {displayCart && <Cart />}
      {displayMenu && <Menu />}
    </nav>
  );
}

export function HeadphoneBanner() {
  return (
    <div className="bg-primary-very-dark">
      <h1 className="py-8 md:py-[97px] text-ml md:text-[40px] md:tracking-[1.43px] md:leading-[44px] text-secondary-white font-bold leading-normal tracking-[2px] text-center">
        HEADPHONES
      </h1>
    </div>
  );
}
export function SpeakerBanner() {
  return (
    <div className="bg-primary-very-dark">
      <h1 className="py-8 md:py-[97px] text-ml md:text-[40px] md:tracking-[1.43px] md:leading-[44px] text-secondary-white font-bold leading-normal tracking-[2px] text-center">
        SPEAKERS
      </h1>
    </div>
  );
}
export function EarphoneBanner() {
  return (
    <div className="bg-primary-very-dark">
      <h1 className="py-8 md:py-[97px] text-ml md:text-[40px] md:tracking-[1.43px] md:leading-[44px] text-secondary-white font-bold leading-normal tracking-[2px] text-center">
        EARPHONES
      </h1>
    </div>
  );
}
