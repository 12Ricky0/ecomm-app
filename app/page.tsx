import Footer from "@/components/footer";
import HomeHeader from "@/components/home/home-header";
import HomePage from "@/components/home/products";
import { cookies } from "next/headers";
import { getCookies } from "@/libs/action";

export default async function Home() {
  let cookieStore;

  try {
    cookieStore = JSON.parse(cookies().getAll("item")[0].value);
  } catch (error) {}

  // getCookies()
  //   .then((data) => {
  //     console.log(data); // Do something with the data
  //   })
  //   .catch((error) => {
  //     console.error(error); // Handle any errors
  //   });
  // console.log(data.then((data) => data.res));
  return (
    <div>
      <HomeHeader cart={cookieStore} />
      <HomePage />
      <Footer />
    </div>
  );
}
