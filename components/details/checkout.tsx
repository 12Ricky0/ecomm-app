"use client";
import Link from "next/link";
import Image from "next/image";
import { useFormState } from "react-dom";
import { handleUserData } from "@/libs/action";
import { useRef } from "react";

export default function Checkout() {
  const initialState = { message: null, errors: {} };
  let value = useRef<{ name: string; price: number; qty: number }[]>();

  // const [state, dispatch] = useFormState(handleUserData, initialState);
  let total = 0;
  const itemName = {
    "yx1-earphones": "yx1",
    "xx59-headphones": "xx59",
    "zx7-speaker": "zx7",
    "xx99-mark-one-headphones": "xx99 mk I",
    "xx99-mark-two-headphones": "xx99 mk II",
    "zx9-speaker": "zx9",
  };
  try {
    value.current = JSON.parse(localStorage.getItem("cart") || "");
  } catch (error) {}

  value.current && value.current.map((c: any) => (total += c.price * c.qty));
  let vat = (total * 10) / 100;

  return (
    <section className="mx-6 md:mx-[40px] lg:mx-[165px] lg:flex justify-between items-start">
      <form
        action={handleUserData}
        className="text-[14px] font-bold lg:w-[100%] caret-primary-brown"
      >
        <div>
          <Link
            href="/"
            className=" text-secondary-dark opacity-50 font-medium text-md leading-[25px] "
          >
            <p className="mt-4 lg:mt-[80px] md:mt-[33px]">Go Back</p>
          </Link>
        </div>

        <fieldset className="bg-secondary-white rounded-lg pb-[31px] lg:mt-[38px] mt-6">
          <h1 className="text-secondary-dark mb-8 mx-6 lg:mx-12 lg:mt-[54px] md:mt-[30px] mt-6 md:mx-7 font-bold md:text-[32px] text-ml leading-normal md:tracking-[1.14px] tracking-[1px] md:leading-9">
            CHECKOUT
          </h1>
          <h2 className="text-sm text-primary-brown font-bold tracking-[0.93px] leading-[25px] mb-4 mx-6 md:mx-7 lg:mx-12">
            BILLING DETAILS
          </h2>

          <div className="mx-6 lg:mx-12 md:mx-7 md:grid grid-cols-2 grid-rows-2">
            {/* <div></div> */}
            <div className="md:mr-4">
              <label
                className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="border-solid border outline-primary-brown border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
                id="name"
                type="text"
                name="name"
                placeholder="Alexei Ward"
              />
            </div>
            <div>
              <label
                className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] md:mt-0 mt-6"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="border-solid border border-primary-gray outline-primary-brown rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
                id="email"
                type="email"
                name="email"
                placeholder="alexei@mail.com"
              />
            </div>
            <div className="lg:mr-4">
              <label
                className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] mt-6"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="border-solid border border-primary-gray outline-primary-brown rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
                id="phone"
                type="number"
                name="number"
                placeholder="+1 202-555-0136"
              />
            </div>
          </div>

          <h2 className="text-sm text-primary-brown font-bold tracking-[0.93px] md:mx-7 leading-[25px] mb-4 mx-6 lg:mx-12 mt-[32px]">
            SHIPPING INFO
          </h2>

          <div className="mx-6 lg:mx-12 md:mx-7">
            <label
              className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px]"
              htmlFor="address"
            >
              Your Address
            </label>
            <input
              className="border-solid border border-primary-gray outline-primary-brown rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
              id="address"
              type="text"
              name="address"
              placeholder="1137 Williams Avenue"
            />
            <div className="md:grid grid-cols-2 grid-rows-2">
              <div className="md:mr-4">
                <label
                  className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] mt-6"
                  htmlFor="zipcode"
                >
                  ZIP Code
                </label>
                <input
                  className="border-solid border outline-primary-brown border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
                  id="zipcode"
                  type="text"
                  name="zipcode"
                  placeholder="10001"
                />
              </div>
              <div>
                <label
                  className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] mt-6 "
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  className="border-solid border outline-primary-brown border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
                  id="city"
                  type="text"
                  name="city"
                  placeholder="New York"
                />
              </div>
              <div className="md:mr-4">
                <label
                  className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] mt-6"
                  htmlFor="country"
                >
                  Country
                </label>
                <input
                  className="border-solid border outline-primary-brown border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
                  id="country"
                  type="text"
                  name="country"
                  placeholder="United States"
                />
              </div>
            </div>
          </div>
          <h2 className="text-sm lg:mx-12 md:mx-7 text-primary-brown font-bold tracking-[0.93px] leading-[25px] mb-4 mx-6 mt-[32px]">
            PAYMENT DETAILS
          </h2>
          <div className="mx-6 lg:mx-12 md:mx-7 md:flex justify-between">
            <label
              className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] mt-6 md:mt-0"
              htmlFor="payment"
            >
              Payment Method
            </label>
            <div id="payment">
              <div className="border-solid border rounded-lg h-[56px] hover:border-primary-brown cursor-pointer flex items-center md:w-[309px] border-primary-gray">
                <input
                  className="mx-4 cursor-pointer bg-primary-brown"
                  type="radio"
                />
                <label className=" text-[14px] text-secondary-dark font-bold leading-normal tracking-[-0.25px]">
                  e-Money
                </label>
              </div>
              <div className="border-solid border rounded-lg h-[56px] hover:border-primary-brown cursor-pointer flex mt-4 mb-8 items-center border-primary-gray">
                <input className="mx-4 cursor-pointer" type="radio" />
                <label className=" text-[14px] text-secondary-dark font-bold leading-normal tracking-[-0.25px]">
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>
          <div className="lg:mx-12 mx-6 md:mx-7 md:grid grid-cols-2 gap-4">
            <div>
              <label
                className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] "
                htmlFor="e-money"
              >
                e-Money Number
              </label>
              <input
                className="border-solid border outline-primary-brown border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
                id="e-money"
                type="number"
                placeholder="238521993"
              />
            </div>
            <div>
              <label
                className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] mt-6 md:mt-0"
                htmlFor="pin"
              >
                e-Money Pin
              </label>
              <input
                className="border-solid border outline-primary-brown border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
                id="pin"
                type="number"
                placeholder="6891"
              />
            </div>
          </div>

          <div className="lg:mx-12 md:mx-7 mx-6 md:flex gap-8 items-center mt-[30px]">
            <Image
              src="/assets/checkout/icon-cash-on-delivery.svg"
              alt="headphone"
              width={84}
              height={104}
              className=" w-auto h-auto rounded-lg"
            />
            <p className="text-md font-medium leading-[25px] opacity-50">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        </fieldset>
        <button
          type="submit"
          className="h-12 w-[100%] mt-[32px] bg-primary-brown hover:bg-secondary-light-brown tracking-[1px] leading-normal text-secondary-white font-bold text-sm"
        >
          CONTINUE & PAY
        </button>
      </form>

      <article className="bg-secondary-white mx- rounded-lg pb-[32px] lg:ml-[30px] mt-8 lg:mt-[145px] shrink-0 lg:w-[350px]">
        <h1 className="font-bold mx-6 pt-8 pb-[8px] leading-normal tracking-[1.29px] text-[18px]">
          SUMMARY
        </h1>
        {value.current &&
          value.current.map(
            (
              value: { name: string; price: number; qty: number },
              index: number
            ) => (
              <div key={index} className="flex items-center">
                <Image
                  src={`/assets/cart/image-${value.name}.jpg`}
                  alt="headphone"
                  width={84}
                  height={104}
                  className=" w-auto h-auto ml-6 rounded-lg mt-6"
                  quality={100}
                />
                <div className="mr-6 md:mr-0 md:ml-4 flex justify-between items-center">
                  <div>
                    <h1 className="font-bold text-[15px] text-secondary-dark mr-[70px] inline-block leading-[25px] ">
                      {itemName[value.name as keyof typeof itemName]}
                    </h1>
                    <p className="font-bold text-[14px] text-secondary-dark leading-[25px] opacity-50">
                      $ {new Intl.NumberFormat().format(Number(value.price))}
                    </p>
                  </div>
                  <h1 className="font-bold md:mr-6  text-[15px] text-secondary-dark leading-[25px] inline-block opacity-50 ">
                    X{value.qty}
                  </h1>
                </div>
              </div>
            )
          )}
        <div className="mx-6">
          <article className="flex justify-between  items-start">
            <article className="mt-[35px] text-secondary-dark opacity-50 font-medium text-md leading-[25px] ">
              <h2>TOTAL</h2>
              <h2 className="my-2">SHIPPING</h2>
              <h2>VAT (INCLUDED)</h2>
              <h2 className="mt-[30px]">GRAND TOTAL</h2>
            </article>

            <article className="font-bold text-[18px] text-secondary-dark mt-[32px] pb-[19px] leading-normal ">
              <h1>$ {new Intl.NumberFormat().format(Number(total))}</h1>
              <h1 className="my-2">$ 50</h1>
              <h1>$ {new Intl.NumberFormat().format(Number(vat))}</h1>
              <h1 className="mt-6 text-primary-brown text-right">
                $ {new Intl.NumberFormat().format(total + vat + 50)}
              </h1>
            </article>
          </article>
        </div>
      </article>
    </section>
  );
}
