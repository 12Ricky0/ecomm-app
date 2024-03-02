import { ButtonTwo, ButtonFour } from "../buttons";
import Image from "next/image";
import ProductFooter from "../product-footer";
import MixedProduct from "../mixed-product";

export default function HomePage() {
  return (
    <section>
      <MixedProduct />
      <div className="bg-primary-brown relative overflow-hidden pb-[55px] md:pb-[130px] lg:pb-[55px] mt-[120px] mx-6 md:mx-[40px] lg:mx-[165px]  rounded-lg">
        <div className="">
          <Image
            src="/assets/home/desktop/pattern-circles.svg"
            alt="headphone"
            width={920}
            height={320}
            className="absolute  left-0 -translate-y-1 lg:-translate-y-[30px] lg:-translate-x-[170px] md:-translate-y-[160px] scale-[1.7] lg:scale-[1] md:scale-[1.3] object-center"
          />
          <div className="text-center lg:flex justify-around pt-[60px] md:pt-0 lg:mb-0 mx-6 md:translate-y-[65px]">
            <Image
              src="/assets/home/mobile/image-speaker-zx9.png"
              alt="speaker"
              width={172}
              height={207}
              className=" mx-auto md:hidden"
            />
            <Image
              src="/assets/home/tablet/image-speaker-zx9.png"
              alt="speaker image"
              width={197}
              height={237}
              className=" hidden md:block mx-auto lg:hidden mb-[40px]"
            />

            <Image
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="speaker"
              width={480}
              height={400}
              className=" w-auto h-auto hidden lg:block mr-7"
            />
            <article className="md:w-[349px] md:mx-auto lg:mx-0 lg:text-left md:text-center ">
              <h1 className="tracking-[1.29px] md:tracking-[2px] mt-8 mb-6 leading-10 md:leading-[58px] text-secondary-white font-bold text-xl md:text-xxl lg:text-left text-center">
                ZX9
                <br /> SPEAKER
              </h1>
              <p className="opacity-75 text-secondary-white text-md leading-6 font-medium text-center lg:text-left mb-[24px] md:mb-[40px]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <ButtonFour href="/details/zx9-speaker" />
            </article>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-mb-speaker  md:bg-tb-speaker lg:bg-dk-speaker py-20 bg-right text-left bg-cover mt-6 mx-6 md:mx-[40px] lg:mx-[165px]">
        <article className="px-6 md:mx-12">
          <h1 className="tracking-[2px] mt-8 mb-6 leading-10 text-secondary-dark font-bold text-ml ">
            ZX7 SPEAKER
          </h1>

          <ButtonTwo href="details/zx7-speaker" />
        </article>
      </div>
      <div className="md:mx-[40px] lg:mx-[165px] gap-6 md:flex">
        <div className="rounded-lg bg-mb-earphone md:w-[50%] md:bg-tb-earphone lg:bg-dk-earphone py-24 md:py-[150px] bg-right text-left bg-cover mt-6 mx-6 md:mx-0"></div>

        <div className="rounded-lg bg-primary-gray py-[41px] md:inline-flex items-center justify-center bg-right text-left mt-6 mx-6 md:mx-0 md:w-[50%]">
          <article className="px-6 md:px-0 ">
            <h1 className="tracking-[2px] mb-8 leading-10 text-secondary-dark font-bold text-ml ">
              YX1 EARPHONES
            </h1>
            <ButtonTwo href="details/yx1-earphones" />
          </article>
        </div>
      </div>
      <ProductFooter />
    </section>
  );
}
