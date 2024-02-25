import Footer from "@/components/footer";
import HomeHeader from "@/components/home/home-header";
import HomePage from "@/components/home/products";
import { cookies } from "next/headers";

export default async function Home() {
  let cookieStore;

  try {
    cookieStore = JSON.parse(cookies().getAll("item")[0].value);
  } catch (error) {}

  return (
    <div>
      <HomeHeader cart={cookieStore} />
      <HomePage />
      <Footer />
    </div>
  );
}
