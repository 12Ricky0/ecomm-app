"use client";

import { createContext, useState, useEffect } from "react";
import { CartType } from "./libs/definitions";
export const CartContext = createContext({});
import { getCookies, setCookies } from "./libs/action";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartType[]>([]);
  const [quantity, setQuantity] = useState<Number>(1);
  const [displayCart, setDisplayCart] = useState<boolean>(false);
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);

  useEffect(() => {
    if (displayCart || displayMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    getCookies()
      .then((data) => {
        if (!data) {
          setCookies([]);
          setCart([]);
        }
        setCart(data);
      })
      .catch((error) => {
        console.error(error); // Handle any errors
      });
  }, [displayCart, displayMenu]);

  return (
    <CartContext.Provider
      value={{
        quantity,
        setQuantity,
        cart,
        setCart,
        displayCart,
        setDisplayCart,
        displayMenu,
        setDisplayMenu,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
