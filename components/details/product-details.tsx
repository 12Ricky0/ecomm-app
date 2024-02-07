import Image from "next/image";
import Link from "next/link";
import { ButtonOne, QuantityButton } from "../buttons";
import MixedProduct from "../mixed-product";
import ProductFooter from "../product-footer";
import data from "../products/data.json";

export default function ProductDetails() {
  let detailedProduct = data.find((d) => d.name === "XX99 Mark II Headphones");

  return (
    <section className="mx-6 md:mx-[40px] lg:mx-[165px] lg:mb-[160px] mb-[120px]">
      <Link
        href="#"
        className=" text-secondary-dark opacity-50 font-medium text-md leading-[25px]"
      >
        <p className="mt-4">Go Back</p>
      </Link>

      <section className="">
        <article className="md:flex items-center justify-between">
          <Image
            src={detailedProduct?.categoryImage.mobile!}
            alt="headephone image"
            width={327}
            height={352}
            className="w-auto h-auto mt-[24px] md:hidden rounded-lg "
          />
          {/* <Image
          src={item.categoryImage.tablet}
          alt="headephone image"
          width={689}
          height={352}
          className="w-[100%] h-auto mt-[64px] hidden lg:hidden md:block rounded-lg "
          priority 
        />*/}
          <Image
            src={detailedProduct?.categoryImage.desktop!}
            alt="headephone image"
            width={540}
            height={560}
            className="w-[50%] mr-6 mt-[64px] lg:block hidden rounded-lg "
          />
          <article className="lg:w-[445px] md:w-[572px] md:mx-auto text-left">
            <h3 className="leading-normal mt-8 tracking-[10px] text-primary-brown opacity-50 text-semi font-normal text-left">
              NEW PRODUCT
            </h3>
            <h1 className="tracking-[1px] uppercase my-6 leading-normal text-secondary-dark font-bold text-ml text-left">
              {detailedProduct?.name}
            </h1>
            <p className="opacity-50 mb-6 leading-[25px] text-secondary-dark text-md font-medium text-left">
              {detailedProduct?.description}
            </p>
            <h3 className="leading-normal tracking-[1.29px] text-secondary-dark font-bold text-[18px] mb-[31px]">
              $ {new Intl.NumberFormat().format(Number(detailedProduct?.price))}
            </h3>
            <div className="inline-flex gap-4">
              <QuantityButton />
              <button className="h-12 w-40 bg-primary-brown hover:bg-secondary-light-brown tracking-[1px] leading-normal text-secondary-white font-bold text-sm">
                ADD TO CARD
              </button>
            </div>
          </article>
        </article>

        <article className=" md:mx-auto md:flex justify-between">
          <article className="text-left lg:w-[635px]">
            <h1 className="text-[24px] font-bold text-secondary-dark tracking-[0.86px] mt-[88px] leading-9">
              FEATURES
            </h1>
            <p className="opacity-50 mt-6 leading-[25px] text-secondary-dark text-md font-medium text-left">
              {detailedProduct?.features.slice(0, 354)}
              <br />
              <br />
              {detailedProduct?.features.slice(355, 763)}
            </p>
          </article>
          <article>
            <h1 className="text-[24px] font-bold text-secondary-dark tracking-[0.86px] mt-[88px] leading-9">
              IN THE BOX
            </h1>
            {detailedProduct?.includes.map((i, index) => (
              <div key={index} className="mt-6">
                <span className="leading-[25px] text-md font-bold text-primary-brown text-left mr-6">
                  {i.quantity}x
                </span>
                <span className="opacity-50 leading-[25px] text-secondary-dark text-md font-medium text-left">
                  {i.item}
                </span>
              </div>
            ))}
          </article>
        </article>

        <div className="mt-[88px] ">
          <div className="md:hidden">
            <Image
              src="/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto md:hidden rounded-lg "
              priority
            />
            <Image
              src="/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg"
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto mt-[24px] md:hidden rounded-lg "
              priority
            />
            <Image
              src="/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg"
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto mt-[24px] md:hidden rounded-lg "
              priority
            />
          </div>
          <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-[30px] w-[100%]">
            <div className="">
              <Image
                src={detailedProduct?.gallery.first.desktop!}
                alt="headephone image"
                width={445}
                height={280}
                className="w-[100%] rounded-lg "
                priority
              />
            </div>
            <div className="">
              <Image
                src={detailedProduct?.gallery.third.desktop!}
                alt="headephone image"
                width={635}
                height={592}
                className="rounded-lg w-[100%]"
                priority
              />
            </div>
            <div className="">
              <Image
                src={detailedProduct?.gallery.second.desktop!}
                alt="headephone image"
                width={445}
                height={280}
                className="w-[100%] rounded-lg "
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-[88px] text-center">
          <h1 className="text-[24px] font-bold text-secondary-dark tracking-[0.86px] leading-9">
            YOU MAY ALSO LIKE
          </h1>

          <div>
            <Image
              src="/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto mt-[24px] md:hidden rounded-lg "
              priority
            />
            <h1 className="text-[24px] font-bold text-secondary-dark tracking-[0.86px] my-[32px] leading-9">
              XX99 MARK I
            </h1>
            <div className="mb-[56px]">
              <ButtonOne />
            </div>
          </div>
          <div>
            <Image
              src="/assets/shared/mobile/image-xx59-headphones.jpg"
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto mt-[24px] md:hidden rounded-lg "
              priority
            />
            <h1 className="text-[24px] font-bold text-secondary-dark tracking-[0.86px] my-[32px] leading-9">
              XX59
            </h1>
            <div className="mb-[56px]">
              <ButtonOne />
            </div>
          </div>
          <div>
            <Image
              src="/assets/shared/mobile/image-zx9-speaker.jpg"
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto mt-[24px] md:hidden rounded-lg "
              priority
            />
            <h1 className="text-[24px] font-bold text-secondary-dark tracking-[0.86px] my-[32px] leading-9">
              ZX9 SPEAKER
            </h1>
            <div className="pb-[110px]">
              <ButtonOne />
            </div>
          </div>
        </div>
        <div>
          <MixedProduct />
          <ProductFooter />
        </div>
      </section>
    </section>
  );
}
