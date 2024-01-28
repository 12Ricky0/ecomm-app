import { ButtonOne } from "../buttons";

export default function HomeHeader() {
  return (
    <section className="bg-headphone-mob bg-cover pt-[80px] bg-no-repeat text-center bg-center">
      <article className="">
        <h3 className="leading-normal tracking-[10px] text-secondary-white opacity-50 text-semi font-normal text-center">
          NEW PRODUCT
        </h3>
        <h1 className="tracking-[1.29px] mt-4 mb-6 leading-10 text-secondary-white font-bold text-xl text-center">
          XX99 MARK II HEADPHONES
        </h1>
        <p className="opacity-75 mx-[50px] text-secondary-white text-md leading-6 font-medium text-center mb-[28px]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <ButtonOne />
      </article>
      {/* <div className="">
        <ButtonOne />
      </div> */}
    </section>
  );
}
