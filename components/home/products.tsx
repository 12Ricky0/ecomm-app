import { ButtonTwo, ButtonThree, ButtonFour } from "../buttons";
import Image from "next/image";
export default function Headphone() {
  return (
    <section>
      <div className="md:grid gap-[30px] justify-center grid-cols-3 md:px-[20%] mx-6 shrink-0">
        {/* <div className="rounded-lg mt-[100px] pb-[22px] bg-primary-gray text-center text-secondary-dark font-bold text-md tracking-[1.07px]">
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt="headphone"
          width={80}
          height={104}
          className="absolute left-[33%] md:left-[20%] w-auto h-auto  -translate-y-12 "
        />

        <h3 className="mb-[17px] pt-[70px]">HEADPHONES</h3>
        <ButtonThree />
      </div> */}
        <div className="rounded-lg mt-[100px] pb-[22px] text-center w-100% text-secondary-dark font-bold text-md tracking-[1.07px] bg-primary-gray ">
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt="headphone"
            width={80}
            height={104}
            className="absolute left-[33%] md:left-[20%] w-auto h-auto  -translate-y-12 "
          />

          <h3 className="mb-[17px] pt-[70px]">HEADPHONES</h3>
          <ButtonThree />
        </div>

        <div className="rounded-lg shrink-0 mt-[70px] md:mt-[100px] pb-[22px] text-center w-[100%] text-secondary-dark font-bold text-md tracking-[1.07px] bg-primary-gray ">
          <Image
            src="/assets/home/mobile/image-speaker-zx9.png"
            alt="headphone"
            width={84}
            height={101}
            className="absolute left-[40%] md:left-[47%] -translate-y-12 "
          />

          <h3 className="mb-[17px] pt-[70px]">SPEAKERS</h3>
          <ButtonThree />
        </div>

        <div className="rounded-lg shrink-0 mt-[70px] md:mt-[100px] pb-[22px] text-center w-[100%] text-secondary-dark font-bold text-md tracking-[1.07px] bg-primary-gray ">
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt="headphone"
            width={147}
            height={133}
            className="absolute left-[33%] md:left-[69%] -translate-y-12 "
          />

          <h3 className="mb-[17px] pt-[70px]">EARPHONES</h3>
          <ButtonThree />
        </div>
      </div>

      <div className="bg-primary-brown pb-[55px] mt-[120px]  mx-6 rounded-lg">
        <div className="">
          <Image
            src="/assets/home/desktop/pattern-circles.svg"
            alt="headphone"
            width={920}
            height={320}
            className="absolute w-auto h-auto left-0 -translate-y-6 object-center z-0 "
          />
          <div className="text-center pt-[90px] mx-6">
            <Image
              src="/assets/home/mobile/image-speaker-zx9.png"
              alt="headphone"
              width={172}
              height={207}
              className=" mx-auto "
            />
            <h1 className="tracking-[1.29px] mt-8 mb-6 leading-10 text-secondary-white font-bold text-xl text-center">
              ZX9
              <br /> SPEAKER
            </h1>
            <p className="opacity-75 text-secondary-white text-md leading-6 font-medium text-center mb-[24px]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <ButtonFour />
          </div>
        </div>
      </div>

      {/* <div className="rounded-lg bg-primary-gray mt-6 mx-6">
        <Image
          src="/assets/home/mobile/image-speaker-zx7.jpg"
          alt="headphone"
          width={172}
          height={207}
          className=" mx-auto w-auto h-auto"
        />

        <h1 className="tracking-[1.29px] mt-8 mb-6 leading-10 text-secondary-dark font-bold text-xl text-center">
          ZX7 SPEAKER
        </h1>

        <ButtonTwo />
      </div> */}
    </section>
  );
}
