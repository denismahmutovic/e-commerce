import { CartProduct, Context, Product } from "../utils/utils";
import React, { createContext, useState } from "react";

type ShoppingCart = {
  cartItems: CartProduct[];
  setCartItems: React.Dispatch<React.SetStateAction<CartProduct[]>>;
  addToCart: (product: Product) => void;
  removeFromCard: (product: Product) => any;
};

const ShoppingCartContext = React.createContext<ShoppingCart>({
  cartItems: [],
  setCartItems: () => {},
  addToCart: () => {},
  removeFromCard: () => {},
});

const ShoppingCartContextProvider = ({ children }: Context) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  console.log("cartItems", cartItems);
  const addToCart = (product: Product): void => {
    console.log("adasdasdasdTo cart");
    setCartItems((prevItems) => {
      if (!prevItems.find((el) => el.id === product.id)) {
        return [...prevItems, { ...product, quantity: 1 }];
      } else {
        return prevItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCard = (id: any) => {
    setCartItems((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  };

  const value: ShoppingCart = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCard,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartContextProvider };
