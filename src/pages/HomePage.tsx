import React, { useContext } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "../common/items.json";
import { ShoppingCartContext } from "../components/context/ShoppingCartContext";
import { Product } from "../components/utils/utils";

const HomePage = () => {
  const { setCartItems, cartItems, addToCart } =
    useContext(ShoppingCartContext);
  return (
    <div>
      <img
        className="w-full mt-2"
        src="https://blog.daraz.pk/wp-content/uploads/2020/05/LIGHT-FOOD-BANNER.jpg"
        alt=""
      />

      <div className="w-full flex flex-wrap flex-row bg-gray-100">
        {products.map((product: Product) => (
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
