import Overlay from "../overlay";
import Image from "next/image";
import { ButtonThree } from "../buttons";

export default function Menu() {
  return (
    <section className="absolute overflow-y-auto lg:hidden">
      <Overlay>
        <section className="md:grid gap-[30px] md:gap-[10px] lg:gap-[30px] mb-[100px]  justify-center grid-cols-3 overflow-scroll shrink-0 bg-secondary-white pb-[35px]">
          <div className="rounded-lg mt-[100px] relative pb-[22px] text-center mx-6 md:mx-0 md:ml-6  text-secondary-dark font-bold text-md tracking-[1.07px] bg-primary-gray ">
            <Image
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt="headphone"
              width={84}
              height={104}
              className="left-[50%] w-auto h-auto -translate-x-[50%] -translate-y-[40px] absolute"
            />
            <h3 className="mb-[17px] pt-[100px]">HEADPHONES</h3>
            <ButtonThree href="/headphones" />
          </div>

          <div className="rounded-lg shrink-0 mt-[70px] mx-6 md:mx-0 relative md:mt-[100px] pb-[22px] text-center  text-secondary-dark font-bold text-md tracking-[1.07px] bg-primary-gray ">
            <Image
              src="/assets/home/mobile/image-speaker-zx9.png"
              alt="speaker image"
              width={84}
              height={101}
              className="absolute  -translate-x-[50%] -translate-y-[50px] left-[50%]"
            />

            <h3 className="mb-[17px] pt-[100px]">SPEAKERS</h3>
            <ButtonThree href="/speakers" />
          </div>

          <div className="rounded-lg shrink-0 mt-[70px] relative md:mt-[100px] pb-[22px] text-center mx-6 md:mx-0 md:mr-6 text-secondary-dark font-bold text-md tracking-[1.07px] bg-primary-gray ">
            <Image
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt="headphone"
              width={147}
              height={133}
              className="left-[50%] -translate-x-[50%] -translate-y-14 w-auto h-auto absolute"
            />

            <h3 className="mb-[17px] pt-[100px]">EARPHONES</h3>
            <ButtonThree href="/earphones" />
          </div>
        </section>
      </Overlay>
    </section>
  );
}
