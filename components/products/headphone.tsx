import Image from "next/image";
import { ButtonOne, ButtonThree } from "../buttons";
import data from "../products/data.json";
export default function Headphones() {
  let product = data.filter((d) => d.category === "headphones");
  return (
    <section className="mx-6 md:mx-0">
      {product.map((item) => (
        // <section key={item.id} className="mb-[120px]">
        <section
          key={item.id}
          className="lg:flex md:mx-[40px] lg:mx-[165px] even:flex-row-reverse justify-between items-center first:mt-[120px] lg:first:mt-[160px] lg:mb-[160px] mb-[120px]"
        >
          <Image
            src={item.categoryImage.mobile}
            alt="headephone image"
            width={327}
            height={352}
            className="w-auto h-auto mt-[64px] md:hidden rounded-lg "
            priority
          />
          <Image
            src={item.categoryImage.tablet}
            alt="headephone image"
            width={689}
            height={352}
            className="w-[100%] h-auto mt-[64px] hidden lg:hidden md:block rounded-lg "
            priority
          />
          <Image
            src={item.categoryImage.desktop}
            alt="headephone image"
            width={540}
            height={560}
            // sizes="(min-width: 808px) 50vw, 100vw"
            className="w-[50%] mr-6 mt-[64px] lg:block hidden rounded-lg "
          />

          <article className="lg:w-[445px] md:w-[572px] md:mx-auto">
            <article className="text-center lg:text-left">
              <h3 className="leading-normal mt-8 tracking-[10px] text-primary-brown opacity-50 text-semi font-normal text-center lg:text-left">
                NEW PRODUCT
              </h3>
              <h1 className="tracking-[1px] uppercase my-6 leading-normal text-secondary-dark font-bold text-ml text-center lg:text-left">
                {item?.name}
              </h1>
              <p className="opacity-50 mb-6 leading-[25px] text-secondary-dark text-md font-medium text-center lg:text-left">
                {item?.description}
              </p>
              <ButtonOne />
            </article>
          </article>
        </section>
        // </section>
      ))}
      <div className="md:grid gap-[30px] md:gap-[10px] lg:gap-[30px] justify-center grid-cols-3 lg:mx-[165px] md:mx-[40px] shrink-0">
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

      <div className=" mt-[120px] lg:flex justify-between flex-row-reverse  md:mx-[40px] lg:mx-[165px] rounded-lg">
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
        <article className="text-center pt-[32px] lg:inline-flex items-center md:mx-auto lg:mx-0 md:w-[445px]">
          <article>
            <h1 className="tracking-[1px] pb-8 leading-[38.25px] text-secondary-dark font-bold text-ml text-center lg:text-left">
              BRING YOU THE <span className="text-primary-brown">BEST </span>
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
