import Link from "next/link";

export default function Checkout() {
  return (
    <form action="" className="text-[14px] font-bold">
      <div className="mx-6 md:mx-[40px] lg:mx-[165px]">
        <Link
          href="#"
          className=" text-secondary-dark opacity-50 font-medium text-md leading-[25px] "
        >
          <p className="mt-4 lg:mt-[80px] md:mt-[33px]">Go Back</p>
        </Link>
      </div>

      <fieldset className="bg-secondary-white mx-6 rounded-lg">
        <h1 className="text-secondary-dark mb-8 mx-6 font-bold md:text-[32px] text-ml leading-normal md:tracking-[1.14px] tracking-[1px] md:leading-9">
          CHECKOUT
        </h1>
        <h2 className="text-sm text-primary-brown font-bold tracking-[0.93px] leading-[25px] mb-4 mx-6">
          BILLING DETAILS
        </h2>

        <div className="mx-6">
          <label
            className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px]"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="border-solid border border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
            id="name"
            type="text"
            placeholder="Alexei Ward"
          />
          <label
            className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] mt-6"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="border-solid border border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
            id="email"
            type="email"
            placeholder="alexei@mail.com"
          />
          <label
            className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] mt-6"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            className="border-solid border border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
            id="phone"
            type="number"
            placeholder="+1 202-555-0136"
          />
        </div>

        <h2 className="text-sm text-primary-brown font-bold tracking-[0.93px] leading-[25px] mb-4 mx-6 mt-[32px]">
          SHIPPING INFO
        </h2>

        <div className="mx-6">
          <label
            className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px]"
            htmlFor="address"
          >
            Your Address
          </label>
          <input
            className="border-solid border border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
            id="address"
            type="text"
            placeholder="1137 Williams Avenue"
          />
          <label
            className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] mt-6"
            htmlFor="zipcode"
          >
            ZIP Code
          </label>
          <input
            className="border-solid border border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
            id="zipcode"
            type="text"
            placeholder="10001"
          />
          <label
            className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] mt-6"
            htmlFor="city"
          >
            City
          </label>
          <input
            className="border-solid border border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
            id="city"
            type="text"
            placeholder="New York"
          />
          <label
            className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] mt-6"
            htmlFor="country"
          >
            Country
          </label>
          <input
            className="border-solid border border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
            id="country"
            type="text"
            placeholder="United States"
          />
        </div>
        <h2 className="text-sm text-primary-brown font-bold tracking-[0.93px] leading-[25px] mb-4 mx-6 mt-[32px]">
          PAYMENT DETAILS
        </h2>
      </fieldset>
    </form>
  );
}
