import React from "react";
import { ShoppingCartContext } from "../components/context/ShoppingCartContext";
import { useContext } from "react";

const Menu = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  return <>{cartItems.length === 0 ? <div>heloo</div> : <div>prosao</div>}</>;
};

export default Menu;
