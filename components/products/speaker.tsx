import Image from "next/image";
import { ButtonOne, ButtonThree } from "../buttons";
import MixedProduct from "../mixed-product";
import ProductFooter from "../product-footer";

export default async function Speakers() {
  const promise = await fetch("http://localhost:3000/api");
  const response = await promise.json();

  let data: any[] = response.res;

  let product = data.filter((d) => d.category === "speakers");
  return (
    <section className="mx-6 md:mx-0">
      {product.map((item) => (
        // <section key={item.id} className="mb-[120px]">
        <section
          key={item._id}
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
      <MixedProduct />
      <ProductFooter />
    </section>
  );
}
