import Image from "next/image";

export default function ProductFooter() {
  return (
    <section className=" mt-[120px] lg:flex justify-between flex-row-reverse lg:gap-8  md:mx-[40px] lg:mx-[165px] mx-6 rounded-lg">
      <Image
        src="/assets/shared/mobile/image-best-gear.jpg"
        alt="best-gear"
        width={100}
        height={207}
        className="w-[100%] md:hidden rounded-lg"
        quality={100}
      />
      <Image
        src="/assets/shared/tablet/image-best-gear.jpg"
        alt="best-gear"
        width={688}
        height={340}
        className="w-[100%] md:block hidden lg:hidden rounded-lg"
        quality={100}
      />
      <Image
        src="/assets/shared/desktop/image-best-gear.jpg"
        alt="best-gear"
        width={540}
        height={588}
        className="hidden lg:block rounded-lg"
        quality={100}
      />
      <article className="text-center pt-[32px] lg:inline-flex items-center md:mx-auto lg:mx-0 md:w-[573px] lg:w-[445px]">
        <article>
          <h1 className="tracking-[1px] pb-8 leading-[38.25px] md:text-[40px] md:tracking-[1.43px] md:leading-[44px] text-secondary-dark font-bold text-ml text-center lg:text-left">
            BRING YOU THE <span className="text-primary-brown">BEST </span>
            AUDIO GEAR
          </h1>
          <p className="opacity-50 text-secondary-dark text-md leading-[25px] tracking-normal font-medium text-center lg:text-left">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </article>
      </article>
    </section>
  );
}
