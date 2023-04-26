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
        className="w-full  h-[78vh]"
        src="https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.15752-9/342889603_3852319168328145_2141419170586001210_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=YNjJnmMtbLEAX_g-zyn&_nc_ht=scontent.fbeg1-1.fna&oh=03_AdQB6D7XbZVcuMKbIRxHLJAK_ygXmA7rBDWvjC6TNnQinw&oe=6470BA54"
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
