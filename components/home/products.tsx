import { ButtonTwo, ButtonThree, ButtonFour } from "../buttons";
import Image from "next/image";

export default function Headphone() {
  return (
    <section>
      <div className="md:grid gap-[30px] md:gap-[10px] lg:gap-[30px] justify-center grid-cols-3 lg:mx-[165px] md:mx-[40px] mx-6 shrink-0">
        <div className="rounded-lg mt-[100px] relative pb-[22px] text-center  text-secondary-dark font-bold text-md tracking-[1.07px] bg-primary-gray ">
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt="headphone"
            width={160}
            height={123}
            // className="absolute left-[33%] md:left-[20%] w-auto h-auto  -translate-y-12 "
            className="left-[50%] w-auto h-auto -translate-x-[50%] -translate-y-[70px] absolute"
          />
          <h3 className="mb-[17px] pt-[100px]">HEADPHONES</h3>
          <ButtonThree />
        </div>

        <div className="rounded-lg shrink-0 mt-[70px] relative md:mt-[100px] pb-[22px] text-center w-[100%] text-secondary-dark font-bold text-md tracking-[1.07px] bg-primary-gray ">
          <Image
            src="/assets/home/mobile/image-speaker-zx9.png"
            alt="speaker image"
            width={84}
            height={101}
            className="absolute md:hidden -translate-x-[50%] -translate-y-[50px] left-[50%]"
          />
          <Image
            src="/assets/home/tablet/image-speaker-zx9.png"
            alt="speaker image"
            width={84}
            height={101}
            className="absolute md:block hidden w-auto h-auto -translate-x-[50%] -translate-y-[70px] left-[50%]"
          />
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            alt="speaker image"
            width={121}
            height={146}
            className="left-[50%] hidden -translate-x-[50%] -translate-y-[70px] lg:block absolute"
          />

          <h3 className="mb-[17px] pt-[100px]">SPEAKERS</h3>
          <ButtonThree />
        </div>

        <div className="rounded-lg shrink-0 mt-[70px] relative md:mt-[100px] pb-[22px] text-center w-[100%] text-secondary-dark font-bold text-md tracking-[1.07px] bg-primary-gray ">
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt="headphone"
            width={147}
            height={133}
            className="left-[50%] -translate-x-[50%] -translate-y-14 w-auto h-auto absolute"
          />

          <h3 className="mb-[17px] pt-[100px]">EARPHONES</h3>
          <ButtonThree />
        </div>
      </div>

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
              <ButtonFour />
            </article>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-mb-speaker md:bg-tb-speaker lg:bg-dk-speaker py-20 bg-right text-left bg-cover mt-6 mx-6 md:mx-[40px] lg:mx-[165px]">
        <article className="px-6 md:mx-12">
          <h1 className="tracking-[2px] mt-8 mb-6 leading-10 text-secondary-dark font-bold text-ml ">
            ZX7 SPEAKER
          </h1>

          <ButtonTwo />
        </article>
      </div>
      <div className="md:mx-[40px] lg:mx-[165px] gap-6 md:flex">
        <div className="rounded-lg bg-mb-earphone md:w-[50%] md:bg-tb-earphone lg:bg-dk-earphone py-24 md:py-[150px] bg-right text-left bg-cover mt-6 mx-6 md:mx-0">
          {/* <article className="px-6">
          <h1 className="tracking-[2px] mt-8 mb-6 leading-10 text-secondary-dark font-bold text-ml ">
            ZX7 SPEAKER
          </h1>

        </article> */}
        </div>

        <div className="rounded-lg bg-primary-gray py-[41px] md:inline-flex items-center justify-center bg-right text-left mt-6 mx-6 md:mx-0 md:w-[50%]">
          <article className="px-6 md:px-0 ">
            <h1 className="tracking-[2px] mb-8 leading-10 text-secondary-dark font-bold text-ml ">
              YX1 EARPHONES
            </h1>
            <ButtonTwo />
          </article>
        </div>
      </div>
      <div className=" mt-[120px] lg:flex justify-between flex-row-reverse  mx-6 md:mx-[40px] lg:mx-[165px] rounded-lg">
        <Image
          src="/assets/shared/mobile/image-best-gear.jpg"
          alt="best-gear"
          width={100}
          height={207}
          className="w-[100%] md:hidden rounded-lg"
        />
        <Image
          src="/assets/shared/tablet/image-best-gear.jpg"
          alt="best-gear"
          width={688}
          height={340}
          className="w-[100%] md:block hidden lg:hidden rounded-lg"
        />
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="best-gear"
          width={540}
          height={588}
          className="hidden lg:block rounded-lg"
        />
        <article className="text-center pt-[32px] lg:inline-flex items-center mx-6 md:mx-auto lg:mx-0 md:w-[445px]">
          <article>
            <h1 className="tracking-[1px] pb-8 leading-[38.25px] text-secondary-dark font-bold text-ml text-center lg:text-left">
              BRING YOU THE <span className="text-primary-brown">BEST</span>
              AUDIO GEAR
            </h1>
            <p className="opacity-50 text-secondary-dark text-md leading-[25px] tracking-normal font-medium text-center lg:text-left">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </article>
        </article>
      </div>
    </section>
  );
}
