import React from "react";
import { ShoppingCartContext } from "../components/context/ShoppingCartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="m-auto my-24 w-4/12 flex flex-col items-center gap-8 ">
          <h1 className="text-lg text-slate-900 font-semibold bg-slate-200 p-1 rounded-lg">
            YOUR SHOPPING CART IS EMPTY
          </h1>
          <p className="text-md text-slate-900 text-center font-light w-4/6">
            You still have nothing in your cart. Check out our large selection
            product and start shopping.
          </p>
          <button className="text-xl text-slate-800 text-center bg-orange-400 p-2 rounded-xl">
            <Link to="/">START SHOPPING</Link>
          </button>
        </div>
      ) : (
        <div>jok</div>
      )}
    </>
  );
};

export default CartPage;
