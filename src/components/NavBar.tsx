import React from "react";
import { Link, NavLink } from "react-router-dom";
import Menu from "../pages/Menu";
import CartPage from "../pages/CartPage";
import { url } from "inspector";
import { ShoppingCartContext } from "../components/context/ShoppingCartContext";
import { useContext } from "react";

const NavBar = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  const itemsInCart = cartItems.reduce((prev, curr) => prev + curr.quantity, 0);

  return (
    <div className="text-black-300">
      <div className="flex justify-between bg-yellow-400 items-center font-serif ">
        <NavLink to={"/"}>
          <img
            className="w-[120px] ml-[30px]"
            src="https://www.linkpicture.com/q/DŽEKICE-removebg-preview.png"
            alt="logo"
          />
        </NavLink>

        <NavLink to={"/"}>
          <h1>Home</h1>
        </NavLink>

        <NavLink to={"/Menu"}>
          <h1>Menu</h1>
        </NavLink>

        <div>
          <NavLink to={"/Cart"}>
            <div
              typeof="button"
              className="inline-flex -top-2 relative items-center p-3 text-sm font-medium text-center text-white rounded-lge-"
            />
            <svg
              className="h-8 w-8 text-black-100 mt-2 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" />{" "}
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cartItems.length > 0 && (
              <div className="inline-flex absolute justify-center items-center top-10  w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
                <span className="mx-auto -mt-1çç">{itemsInCart}</span>
              </div>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
