"use client";
import { ButtonOne } from "../buttons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// rounded-lg bg-mb-speaker py-20 bg-right text-left bg-cover mt-6 mx-6
export default function HomeHeader() {
  const pathname = usePathname();

  return (
    <section className="bg-headphone-mob lg:flex flex-col lg:bg-headphone-desktop md:bg-headphone-tablet bg-cover pb-[112px] md:pb-[250px] text-center bg-center">
      <header className=" h-[90px] md:mx-[40px] lg:mx-[165px]  border-b-secondary-white border-opacity-10 border-b">
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
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="cart"
            width={23}
            height={20}
            className="w-auto h-auto"
          />
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
              className={`font-bold text-secondary-white text-sm leading-6 tracking-[2px] hover:text-primary-brown ${
                pathname === "/" && "outline-dashed outline-primary-brown"
              }`}
              href="/"
            >
              HOME
            </Link>
            <Link
              className="font-bold text-secondary-white text-sm leading-6 tracking-[2px] hover:text-primary-brown"
              href="/headphones"
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
          <ButtonOne />
        </article>
      </article>
      {/* <div className="">
        <ButtonOne />
      </div> */}
    </section>
  );
}
