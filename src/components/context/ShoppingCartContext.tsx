import { CartProduct, Context, Product } from "../utils/utils";
import React, { createContext, useState } from "react";

type ShoppingCart = {
  cartItems: CartProduct[];
  setCartItems: React.Dispatch<React.SetStateAction<CartProduct[]>>;
  addToCart: (product: Product) => void;
  removeFromCard: (id: number) => any;
  increaseQuantity: (id: number) => any;
  decreaseQuantity: (id: number) => any;
};

const ShoppingCartContext = React.createContext<ShoppingCart>({
  cartItems: [],

  setCartItems: () => {},
  addToCart: () => {},
  removeFromCard: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

const ShoppingCartContextProvider = ({ children }: Context) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  console.log("cartItems", cartItems);

  const [search, setSearch] = useState<string>("");

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
  const removeFromCard = (id: number) => {
    setCartItems((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  };

  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prevItems) => {
      if (prevItems.find((el) => el.id)?.quantity === 1) {
        removeFromCard(id);
      }
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  };

  const value: ShoppingCart = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCard,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartContextProvider };
