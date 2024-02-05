import Image from "next/image";
import Link from "next/link";
import { QuantityButton } from "../buttons";

export default function ProductDetails() {
  return (
    <section className="mx-6">
      <Link
        href="#"
        className=" text-secondary-dark opacity-50 font-medium text-md leading-[25px]"
      >
        <p className="mt-4">Go Back</p>
      </Link>

      <section className="lg:flex md:mx-[40px] lg:mx-[165px] justify-between items-center lg:mb-[160px] mb-[120px]">
        <Image
          src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
          alt="headephone image"
          width={327}
          height={352}
          className="w-auto h-auto mt-[24px] md:hidden rounded-lg "
          priority
        />
        {/* <Image
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
          className="w-[50%] mr-6 mt-[64px] lg:block hidden rounded-lg "
        /> */}

        <article className="lg:w-[445px] md:w-[572px] md:mx-auto">
          <article className="text-left">
            <h3 className="leading-normal mt-8 tracking-[10px] text-primary-brown opacity-50 text-semi font-normal text-left">
              NEW PRODUCT
            </h3>
            <h1 className="tracking-[1px] uppercase my-6 leading-normal text-secondary-dark font-bold text-ml text-left">
              XX99 MARK II
              <br />
              HEADPHONES
            </h1>
            <p className="opacity-50 mb-6 leading-[25px] text-secondary-dark text-md font-medium text-left">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <h3 className="leading-normal tracking-[1.29px] text-secondary-dark font-bold text-[18px] mb-[31px]">
              $ 2,999
            </h3>
            <div className="inline-flex gap-4">
              <QuantityButton />
              <button className="h-12 w-40 bg-primary-brown hover:bg-secondary-light-brown tracking-[1px] leading-normal text-secondary-white font-bold text-sm">
                ADD TO CARD
              </button>
            </div>
            <h1 className="text-[24px] font-bold text-secondary-dark tracking-[0.86px] mt-[88px] leading-9">
              FEATURES
            </h1>
            <p className="opacity-50 mt-6 leading-[25px] text-secondary-dark text-md font-medium text-left">
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat.
              <br />
              <br />
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>

            <h1 className="text-[24px] font-bold text-secondary-dark tracking-[0.86px] mt-[88px] leading-9">
              IN THE BOX
            </h1>
            <div className="mt-6">
              <span className="leading-[25px] text-md font-bold text-primary-brown text-left mr-6">
                1x
              </span>
              <span className="opacity-50 leading-[25px] text-secondary-dark text-md font-medium text-left">
                Headphone Unit
              </span>
            </div>
          </article>
        </article>
      </section>
    </section>
  );
}
