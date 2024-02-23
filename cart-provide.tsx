"use client";

import { createContext, useState, useEffect, useRef } from "react";
import { setCookies, getCookies } from "./libs/action";
import { CartType } from "./libs/definitions";
export const CartContext = createContext({});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // const cookieStore = JSON.parse(cookies().getAll("item")[0].value);
  // console.log(JSON.parse(cook[0].value));
  // let value = useRef<{ name: string; price: number; qty: number }[]>();

  // useEffect(() => {
  //   getCookies()
  //     .then((data) => {
  //       value.current = data;
  //     })
  //     .catch((error) => {
  //       console.error(error); // Handle any errors
  //     });
  // }, []);

  // try {
  //   getCookies()
  //     .then((data) => {
  //       setCookie(data);
  //     })
  //     .catch((error) => {
  //       console.error(error); // Handle any errors
  //     });
  // } catch (error) {}

  const [cart, setCart] = useState<CartType[]>([]);
  const [quantity, setQuantity] = useState<Number>(1);
  const [displayCart, setDisplayCart] = useState<boolean>(false);

  // useEffect(() => {
  //   setCookies(cart);
  // }, [cart]);

  return (
    <CartContext.Provider
      value={{
        quantity,
        setQuantity,
        cart,
        setCart,
        displayCart,
        setDisplayCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
