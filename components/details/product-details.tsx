import Image from "next/image";
import Link from "next/link";
import { ButtonOne, QuantityButton } from "../buttons";
import MixedProduct from "../mixed-product";
import ProductFooter from "../product-footer";
import data from "../products/data.json";

export default function ProductDetails() {
  let detailedProduct = data.find((d) => d.name === "ZX9 Speaker");

  return (
    <section className="">
      <div className="mx-6 md:mx-[40px] lg:mx-[165px]">
        <Link
          href="#"
          className=" text-secondary-dark opacity-50 font-medium text-md leading-[25px] "
        >
          <p className="mt-4 lg:mt-[80px] md:mt-[33px]">Go Back</p>
        </Link>
      </div>
      <section className="mx-6 md:mx-[40px] lg:mx-[165px] lg:mb-[100px] mb-[60px]">
        <article className="md:flex items-center  justify-between">
          <Image
            src={detailedProduct?.image.mobile!}
            alt="headephone image"
            width={327}
            height={352}
            className="w-auto h-auto mt-[24px] md:hidden rounded-lg "
          />
          <Image
            src={detailedProduct?.image.tablet!}
            alt="headephone image"
            width={281}
            height={480}
            className="w-auto h-auto mt-[24px] hidden lg:hidden md:block rounded-lg "
            quality={100}
          />
          <Image
            src={detailedProduct?.image.desktop!}
            alt="headephone image"
            width={540}
            height={560}
            className=" mr-7 mt-[56px] lg:block hidden rounded-lg "
            quality={100}
          />
          <article className="lg:w-[445px] md:w-[340px]  text-left">
            <h3 className="leading-normal lg:hidden mt-8 tracking-[10px] text-primary-brown opacity-50 text-semi font-normal text-left">
              NEW PRODUCT
            </h3>
            <h1 className="tracking-[1px] lg:tracking-[1.43px] uppercase my-6 leading-normal md:leading-[32px] lg:leading-[44px] text-secondary-dark font-bold text-ml lg:text-[40px] text-left">
              {detailedProduct?.name.slice(0, 4)}
              <br />
              {detailedProduct?.name.slice(5, 15)}
            </h1>
            <p className="opacity-50 mb-6 leading-[25px] text-secondary-dark text-md font-medium text-left">
              {detailedProduct?.description}
            </p>
            <h3 className="leading-normal tracking-[1.29px] text-secondary-dark font-bold text-[18px] mb-[31px]">
              $ {new Intl.NumberFormat().format(Number(detailedProduct?.price))}
            </h3>
            <div className="inline-flex gap-4">
              <QuantityButton className="bg-primary-gray flex py-[15px] w-[120px] justify-center" />
              <button className="h-12 w-40 bg-primary-brown hover:bg-secondary-light-brown tracking-[1px] leading-normal text-secondary-white font-bold text-sm">
                ADD TO CARD
              </button>
            </div>
          </article>
        </article>

        <article className=" md:mx-auto lg:flex justify-between">
          <article className="text-left lg:w-[635px]">
            <h1 className="text-[24px] md:text-[32px] md:tracking-[1.14px] md:leading-9 font-bold text-secondary-dark tracking-[0.86px] mt-[88px] leading-9">
              FEATURES
            </h1>
            <p className="opacity-50 mt-6 leading-[25px] text-secondary-dark text-md font-medium text-left">
              {detailedProduct?.features.slice(0, 354)}
              <br />
              <br />
              {detailedProduct?.features.slice(355, 763)}
            </p>
          </article>
          <article className="lg:mx-[120px] md:inline-flex justify-between lg:mt-[88px] md:mt-[120px] lg:block">
            <h1 className="text-[24px] md:w-[340px] lg:w-auto md:text-[32px] md:tracking-[1.14px] md:leading-9 font-bold text-secondary-dark tracking-[0.86px] mt-[88px] md:mt-0 leading-9">
              IN THE BOX
            </h1>
            <div>
              {detailedProduct?.includes.map((i, index) => (
                <div key={index} className="mt-6 md:mt-0 lg:mt-6">
                  <span className="leading-[25px] text-md font-bold text-primary-brown text-left mr-6">
                    {i.quantity}x
                  </span>
                  <span className="opacity-50 leading-[25px] text-secondary-dark text-md font-medium text-left">
                    {i.item}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </article>

        <div className="mt-[88px] ">
          <div className="md:hidden">
            <Image
              src={detailedProduct?.gallery.first.mobile!}
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto md:hidden rounded-lg "
              priority
            />
            <Image
              src={detailedProduct?.gallery.second.mobile!}
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto mt-[24px] md:hidden rounded-lg "
              priority
            />
            <Image
              src={detailedProduct?.gallery.third.mobile!}
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto mt-[24px] md:hidden rounded-lg "
              priority
            />
          </div>
          {/* Tablet View */}
          <div className="hidden lg:hidden md:grid grid-cols-4 grid-rows-4  gap-[30px]">
            <div className=" col-span-2">
              <Image
                src={detailedProduct?.gallery.first.tablet!}
                alt="headephone image"
                width={445}
                height={280}
                className=" rounded-lg "
                quality={100}
                unoptimized={true}
              />
            </div>
            <div className="order-1 col-span-2">
              <Image
                src={detailedProduct?.gallery.second.tablet!}
                alt="headephone image"
                width={445}
                height={280}
                className="rounded-lg"
                quality={100}
                unoptimized={true}
              />
            </div>
            <div className="row-span-2 object-cover w-[100%] bg-cover">
              <Image
                src={detailedProduct?.gallery.third.tablet!}
                alt="headephone image"
                width={635}
                height={592}
                className="w rounded-lg "
                quality={100}
                // fill={true}
              />
            </div>
          </div>

          {/* Desktop View */}

          <div className="hidden lg:grid grid-cols-2 grid-rows-2  gap-[30px]">
            <div className=" col-span-2">
              <Image
                src={detailedProduct?.gallery.first.desktop!}
                alt="headephone image"
                width={445}
                height={280}
                className=" rounded-lg "
                quality={100}
                unoptimized={true}
              />
            </div>
            <div className="order-1 col-span-2">
              <Image
                src={detailedProduct?.gallery.second.desktop!}
                alt="headephone image"
                width={445}
                height={280}
                className="rounded-lg"
                quality={100}
                unoptimized={true}
              />
            </div>
            <div className="row-span-2 object-cover w-[100%] bg-cover">
              <Image
                src={detailedProduct?.gallery.third.desktop!}
                alt="headephone image"
                width={635}
                height={592}
                className="w rounded-lg "
                quality={100}
                // fill={true}
              />
            </div>
          </div>
        </div>

        <h1 className="text-[24px] md:text-[32px] text-center md:tracking-[1.14px] md:leading-9 font-bold text-secondary-dark tracking-[0.86px] mt-[88px] leading-9">
          YOU MAY ALSO LIKE
        </h1>

        <div className="mt-[88px] md:mt-[56px] text-center md:flex gap-[30px]">
          <div>
            <Image
              src={detailedProduct?.others[0].image.mobile!}
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto mt-[24px] md:hidden rounded-lg "
              priority
            />
            <Image
              src={detailedProduct?.others[0].image.tablet!}
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto mt-[24px] md:block hidden lg:hidden rounded-lg "
              priority
            />
            <Image
              src={detailedProduct?.others[0].image.desktop!}
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto mt-[24px] hidden lg:block rounded-lg "
              priority
            />
            <h1 className="text-[24px] font-bold text-secondary-dark tracking-[0.86px] my-[32px] leading-9">
              {detailedProduct?.others[0].name}
            </h1>
            <div className="mb-[56px]">
              <ButtonOne />
            </div>
          </div>
          <div>
            <Image
              src={detailedProduct?.others[1].image.mobile!}
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto mt-[24px] md:hidden rounded-lg "
              quality={100}
            />
            <Image
              src={detailedProduct?.others[1].image.tablet!}
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto mt-[24px] md:block hidden lg:hidden rounded-lg "
              priority
            />

            <Image
              src={detailedProduct?.others[1].image.desktop!}
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto mt-[24px] hidden lg:block rounded-lg "
              priority
            />
            <h1 className="text-[24px] font-bold text-secondary-dark tracking-[0.86px] my-[32px] leading-9">
              {detailedProduct?.others[1].name}
            </h1>
            <div className="mb-[56px]">
              <ButtonOne />
            </div>
          </div>
          <div>
            <Image
              src={detailedProduct?.others[2].image.mobile!}
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto mt-[24px] md:hidden rounded-lg "
              quality={100}
            />
            <Image
              src={detailedProduct?.others[2].image.tablet!}
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto mt-[24px] md:block hidden lg:hidden rounded-lg "
              priority
            />

            <Image
              src={detailedProduct?.others[2].image.desktop!}
              alt="headephone image"
              width={327}
              height={352}
              className="w-auto h-auto mt-[24px] hidden lg:block rounded-lg "
              priority
            />
            <h1 className="text-[24px] font-bold text-secondary-dark tracking-[0.86px] my-[32px] leading-9">
              {detailedProduct?.others[2].name}
            </h1>
            <div className="">
              <ButtonOne />
            </div>
          </div>
        </div>
      </section>
      <div>
        <MixedProduct />
        <ProductFooter />
      </div>
    </section>
  );
}
