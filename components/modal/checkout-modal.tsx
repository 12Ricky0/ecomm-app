import Overlay from "../overlay";
import Image from "next/image";

export default function CheckoutModal() {
  return (
    <Overlay>
      <section className="bg-secondary-white absolute translate-x-[50%]  mx-6 rounded-lg">
        <article className="mx-8">
          <div className="mt-8">
            <Image
              src="/assets/checkout/icon-order-confirmation.svg"
              alt="headphone"
              width={84}
              height={104}
              className=" w-auto h-auto "
            />
          </div>

          <h1 className="text-secondary-dark font-bold text-[24px] tracking-[0.86px] mt-[23px] mb-4 leading-7">
            THANK YOU
            <br /> FOR YOUR ORDER
          </h1>
          <p className="font-medium text-[15px] opacity-50 text-secondary-dark mb-6 leading-[25px]">
            You will receive an email confirmation shortly.
          </p>

          <article className="md:flex">
            <article className="bg-primary-gray rounded-t-lg">
              <div className=" flex items-center justify-between">
                <Image
                  src="/assets/cart/image-xx99-mark-two-headphones.jpg"
                  alt="headphone"
                  width={84}
                  height={104}
                  className=" w-auto h-auto ml-6"
                />
                <div className="mr-6">
                  <h1 className="font-bold text-[15px] text-secondary-dark mr-[70px] inline-block leading-[25px] ">
                    XX99 MK II
                  </h1>
                  <h1 className="font-bold text-[15px] text-secondary-dark leading-[25px] inline-block opacity-50 ">
                    X1
                  </h1>
                  <p className="font-bold text-[14px] text-secondary-dark leading-[25px] opacity-50">
                    $ 2,999
                  </p>
                </div>
              </div>
              <div className=" border-b-[0.08px] mx-6  border-opacity-[0.08px]" />
              <p className="font-bold text-[14px] text-secondary-dark leading-[25px] opacity-50 mt-3 pb-[25px] text-center">
                and 2 other item(s)
              </p>
            </article>

            <div className="bg-secondary-dark rounded-b-lg">
              <article className="mx-6">
                <h1 className="font-medium text-[18px] text-secondary-white opacity-50 pt-[15px] leading-[25px] ">
                  GRAND TOTAL
                </h1>
                <h1 className="font-bold text-[18px] text-secondary-white mt-[8px] pb-[19px] leading-normal ">
                  $ 5,446
                </h1>
              </article>
            </div>
          </article>
          <button className="h-12 w-[100%] mt-[23px] mb-6 bg-primary-brown hover:bg-secondary-light-brown tracking-[1px] leading-normal text-secondary-white font-bold text-sm">
            BACK TO HOME
          </button>
        </article>
      </section>
    </Overlay>
  );
}
