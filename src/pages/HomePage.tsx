import React, { useContext } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "../common/items.json";
import { ShoppingCartContext } from "../components/context/ShoppingCartContext";
import { Product } from "../components/utils/utils";
import Search from "../components/Search/Search";
import { useState } from "react";
import { CartProduct } from "../components/utils/utils";
import json from "../common/items.json";

const HomePage = () => {
  const { setCartItems, cartItems, addToCart } =
    useContext(ShoppingCartContext);

  const [search, setSearch] = useState<string>("");

  return (
    <div>
      {/* <input
        type="text"
        id="default-search"
        className="block p-4 pl-10  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-70 h-9 mt-3 z-40"
        placeholder=" "
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /> */}
      <img
        className="w-full  h-[78vh]"
        src="https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.15752-9/342889603_3852319168328145_2141419170586001210_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=YNjJnmMtbLEAX_g-zyn&_nc_ht=scontent.fbeg1-1.fna&oh=03_AdQB6D7XbZVcuMKbIRxHLJAK_ygXmA7rBDWvjC6TNnQinw&oe=6470BA54"
        alt=""
      />

      <div className="w-full flex flex-wrap flex-row bg-gray-100">
        {products
          .filter((el) => {
            if (search === "") {
              return el;
            } else if (el.name.toLowerCase().includes(search.toLowerCase())) {
              return el;
            }
          })

          .map((product: Product) => (
            <ProductCard
              key={product.id}
              imgUrl={product.imgUrl}
              name={product.name}
              currency={product.currency}
              price={product.price}
              onClick={() => addToCart(product)}
            />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
