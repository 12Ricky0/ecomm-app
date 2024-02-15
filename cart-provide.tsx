"use client";

import { createContext, useState } from "react";

export const CartContext = createContext({});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<{ name: string; amount: number }[]>([]);
  const [items, setItems] = useState<Number>(0);
  const [displayCart, setDisplayCart] = useState<boolean>(false);

  return (
    <CartContext.Provider
      value={{ items, setItems, cart, setCart, displayCart, setDisplayCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
