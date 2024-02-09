import Image from "next/image";
import { ButtonThree } from "./buttons";

export default function MixedProduct() {
  return (
    <section className="md:grid gap-[30px] md:gap-[10px] lg:gap-[30px] justify-center grid-cols-3 lg:mx-[165px] md:mx-[40px] mx-6 shrink-0">
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
    </section>
  );
}
