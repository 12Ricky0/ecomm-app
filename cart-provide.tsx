"use client";

import { createContext, useState, useEffect, useRef } from "react";

export const CartContext = createContext({});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<{ name: string; amount: number }[]>([]);
  const [quantity, setQuantity] = useState<Number>(1);
  const [displayCart, setDisplayCart] = useState<boolean>(false);

  let value = useRef<{ name: string; price: number; qty: number }[]>();

  // try {
  //   value.current = JSON.parse(localStorage.getItem("cart") || "");
  // } catch (error) {}
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
