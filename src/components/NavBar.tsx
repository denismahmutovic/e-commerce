import React from "react";
import { Link, NavLink } from "react-router-dom";
import Menu from "../pages/Menu";
import CartPage from "../pages/CartPage";
import { url } from "inspector";
import { ShoppingCartContext } from "../components/context/ShoppingCartContext";
import { useContext } from "react";
import Search from "./Search/Search";
import json from "../common/items.json";
import { useState } from "react";

const NavBar = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  const itemsInCart = cartItems.reduce((prev, curr) => prev + curr.quantity, 0);

  const [search, setSearch] = useState<string>("");

  return (
    <div>
      <header className="flex justify-between bg-yellow-300 items-center font-serif">
        <div className="container mx-auto px-4 py-8 flex items-center">
          {/* logo */}
          <div className="mr-auto md:w-48 flex-shrink-0">
            <NavLink to={"/"}>
              <img
                className="w-[120px] ml-[30px]"
                src="https://www.linkpicture.com/q/DZ%CC%8CEKICE-removebg-preview.png "
                alt=""
              />
            </NavLink>
          </div>

          {/* search */}

          <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
            <input
              className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-2 w-[370px] h-8 text-center"
              type="text"
              placeholder="I'm searching for ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <NavLink to={"/"}>
              <svg
                className="ml-auto h-5 px-4 text-gray-500"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                />
              </svg>
            </NavLink>
          </div>

          {/* phone number */}
          <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
            <span className="font-bold md:text-xl">069/609-098</span>
            <span className="font-semibold text-sm text-gray-400">contact</span>
          </div>
          {/* buttons */}
          <NavLink to={"cart"}>
            <nav className="contents">
              <ul className="ml-4 xl:w-48 flex items-center justify-end">
                <li className="ml-2 lg:ml-4 relative inline-block">
                  <a>
                    <svg
                      className="h-9 lg:h-10 p-2 text-gray-500"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="user"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                      />
                    </svg>
                  </a>
                </li>

                <li className="ml-2 lg:ml-4 relative inline-block">
                  <a>
                    <svg
                      className="h-9 lg:h-10 p-2 text-gray-500"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="shopping-cart"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                      />
                    </svg>
                    {cartItems.length > 0 && (
                      <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                        {itemsInCart}
                      </div>
                    )}
                  </a>
                </li>
              </ul>
            </nav>
          </NavLink>
          {/* cart count */}
          <div className="ml-4 hidden sm:flex flex-col font-bold">
            <span className="text-xs text-gray-400">Your Cart</span>
            <span>$2,650,59</span>
          </div>
        </div>
        <hr />
      </header>
    </div>
  );
};

export default NavBar;

{
  /* <div>
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
        </div> */
}
