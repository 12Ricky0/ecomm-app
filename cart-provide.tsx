"use client";

import { createContext, useState } from "react";

export const CartContext = createContext({});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState(0);

  return (
    <CartContext.Provider value={{ items, setItems, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
