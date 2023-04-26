import React from "react";
import { ShoppingCartContext } from "../components/context/ShoppingCartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCard, increaseQuantity, decreaseQuantity } =
    useContext(ShoppingCartContext);

  const totalPrice = cartItems.reduce(
    (quantity, product) => quantity + product.price * product.quantity,
    0
  );

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
        <div>
          {cartItems.map((product) => (
            <div>
              <meta charSet="UTF-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <title>Document</title>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n    #summary {\n      background-color: #f6f6f6;\n    }\n  ",
                }}
              />
              <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                  <div className="w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                      <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                      <h2 className="font-semibold text-2xl">
                        {product.quantity}
                      </h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                      <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                        Product Details
                      </h3>
                      <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                        Quantity
                      </h3>
                      <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                        Price
                      </h3>
                      <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                        Total
                      </h3>
                    </div>
                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                      <div className="flex w-2/5">
                        {" "}
                        {/* product */}
                        <div className="w-30">
                          <img
                            className="h-[120px]"
                            src={product.imgUrl}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col justify-between ml-4 flex-grow">
                          <span className="font-bold text-sm">
                            {product.name}
                          </span>
                          <span className="text-red-500 text-xs">
                            {product.name}
                          </span>
                          <button
                            onClick={() => removeFromCard(product.id)}
                            className="font-semibold hover:text-red-500 text-gray-500 text-xs mr-[120px]"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-center w-1/5">
                        <button
                          onClick={() => decreaseQuantity(product.id)}
                          className="rounded border-2 w-10  border-red-500   h-1/2 px-1 text-center mx-3"
                        >
                          -
                        </button>
                        <input
                          className="mx-2 border text-center w-8"
                          type="text"
                          value={product.quantity}
                        />
                        <svg
                          className="fill-current text-gray-600 w-3"
                          viewBox="0 0 448 512"
                        ></svg>
                        <button
                          onClick={() => increaseQuantity(product.id)}
                          className="text-black rounded border-2 w-10 border-blue-200 h-1/2 px-1 text-center mx-3"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        {product.price}
                      </span>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        {totalPrice}
                      </span>
                    </div>
                  </div>
                  <div id="summary" className="w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">
                      Order Summary
                    </h1>
                    <div className="flex justify-between mt-10 mb-5">
                      <span className="font-semibold text-sm uppercase">
                        {product.quantity}
                      </span>
                      <span className="font-semibold text-sm">
                        {totalPrice}$
                      </span>
                    </div>
                    <div>
                      <label className="font-medium inline-block mb-3 text-sm uppercase">
                        Shipping
                      </label>
                      <select className="block p-2 text-gray-600 w-full text-sm">
                        <option>Kartica</option>
                        <option>Kes</option>
                      </select>
                    </div>
                    <div className="py-10">
                      <label
                        htmlFor="promo"
                        className="font-semibold inline-block mb-3 text-sm uppercase"
                      >
                        Promo Code
                      </label>
                      <input
                        type="text"
                        id="promo"
                        placeholder="Enter your code"
                        className="p-2 text-sm w-full"
                      />
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                      Apply
                    </button>
                    <div className="border-t mt-8">
                      <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span>${totalPrice}</span>
                      </div>
                      <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        // <div className="flex flex-col justify-center items-center h-30 w-full px-48  ">
        //   {cartItems.map((product) => (
        //     <div
        //       key={product.id}
        //       className="flex mx-3 my-4 rounded justify-between items-center w-full"
        //     >
        //       <img src={product.imgUrl} alt="nesto" width={150} height={20} />
        //       <div className="flex-col ml-8 justify-center w-32">
        //         <h2 className="font-bold">{product.name}</h2>
        //       </div>
        //       <div className="flex justify-center items-center my-3 w-64">
        //         <p className="text-bold">{product.price} $</p>
        //         <button
        //           onClick={() => decreaseQuantity(product.id)}
        //           className="rounded border-2 w-10  border-red-500   h-1/2 px-1 text-center mx-3"
        //         >
        //           -
        //         </button>
        //         <p className="">{product.quantity}</p>
        //         <button
        //           onClick={() => increaseQuantity(product.id)}
        //           className="text-black rounded border-2 w-10 border-blue-200 h-1/2 px-1 text-center mx-3"
        //         >
        //           +
        //         </button>
        //       </div>
        //       <div className="flex justify-center  items-center  ">
        //         <p className="text-bold">One piece: {product.price} </p>
        //       </div>
        //       <div className="flex justify-center my-10 items-center">
        //         Total Amout: {product.price * product.quantity} $
        //       </div>

        //       <button onClick={() => removeFromCard(product.id)}>
        //         <svg
        //           className="flex justify-center items-cente "
        //           // className="h-8 w-8 text-red-500"
        //           viewBox="0 0 24 24"
        //           fill="none"
        //           stroke="currentColor"
        //           stroke-width="2"
        //           stroke-linecap="round"
        //           stroke-linejoin="round"
        //         >
        //           {" "}
        //           <circle cx="12" cy="12" r="10" />{" "}
        //           <line x1="15" y1="9" x2="9" y2="15" />{" "}
        //           <line x1="9" y1="9" x2="15" y2="15" />
        //         </svg>
        //       </button>
        //     </div>
        //   ))}
        //   <div
        //     className="bg-gray-200 w-full h-20 flex
        // px-1 rounded-lg mt-4 ml-1 justify-center  items-center "
        //   >
        //     <div>
        //       <h3 className="rounded mt-3 ml-1">DO YOU HAVE A PROMO COUPON?</h3>
        //     </div>
        //     <div>
        //       <svg
        //         className="h-8 w-8 text-red-500 mt-3 ml-1 "
        //         fill="none"
        //         viewBox="0 0 24 24"
        //         stroke="currentColor"
        //       >
        //         <path
        //           stroke-linecap="round"
        //           stroke-linejoin="round"
        //           stroke-width="2"
        //           d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        //         />
        //       </svg>
        //     </div>
        //     <div>
        //       {" "}
        //       <input
        //         placeholder="Coupon Code"
        //         type={"text"}
        //         className="w-64 bg-white h-8 text-center ml-3 "
        //       ></input>{" "}
        //       <button className="bg-red-400 px-4 py-1 h-30 w-30 hover:bg-violet-600 text-white rounded  ">
        //         Apply Coupon
        //       </button>
        //     </div>
        //     <div className="rounded mt-3 ml-20 text-xl font-serif">
        //       Total: ${totalPrice}
        //     </div>
        //   </div>
        // </div>
      )}
    </>
  );
};

export default CartPage;

{
  /* <div className="flex flex-col justify-center items-center h-30 w-full px-48  ">
  {cartItems.map((product) => (
    <div
      key={product.id}
      className="flex mx-3 my-4 rounded justify-between items-center w-full"
    >
      <img src={product.imgUrl} alt="nesto" width={150} height={20} />
      <div className="flex-col ml-8 justify-center w-32">
        <h2 className="font-bold">{product.name}</h2>
      </div>
      <div className="flex justify-center items-center my-3 w-64">
        <p className="text-bold">{product.price} $</p>
        <button
          onClick={() => decreaseQuantity(product.id)}
          className="rounded border-2 w-10  border-red-500   h-1/2 px-1 text-center mx-3"
        >
          -
        </button>
        <p className="">{product.quantity}</p>
        <button
          onClick={() => increaseQuantity(product.id)}
          className="text-black rounded border-2 w-10 border-blue-200 h-1/2 px-1 text-center mx-3"
        >
          +
        </button>
      </div>
      <div className="flex justify-center  items-center  ">
        <p className="text-bold">One piece: {product.price} </p>
      </div>
      <div className="flex justify-center my-10 items-center">
        Total Amout: {product.price * product.quantity} $
      </div>

      <button onClick={() => removeFromCard(product.id)}>
        <svg
          className="flex justify-center items-cente "
          // className="h-8 w-8 text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <circle cx="12" cy="12" r="10" />{" "}
          <line x1="15" y1="9" x2="9" y2="15" />{" "}
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </button>
    </div>
  ))}
  <div
    className="bg-gray-200 w-full h-20 flex
        px-1 rounded-lg mt-4 ml-1 justify-center  items-center "
  >
    <div>
      <h3 className="rounded mt-3 ml-1">DO YOU HAVE A PROMO COUPON?</h3>
    </div>
    <div>
      <svg
        className="h-8 w-8 text-red-500 mt-3 ml-1 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    </div>
    <div>
      {" "}
      <input
        placeholder="Coupon Code"
        type={"text"}
        className="w-64 bg-white h-8 text-center ml-3 "
      ></input>{" "}
      <button className="bg-red-400 px-4 py-1 h-30 w-30 hover:bg-violet-600 text-white rounded  ">
        Apply Coupon
      </button>
    </div>
    <div className="rounded mt-3 ml-20 text-xl font-serif">
      Total: ${totalPrice}
    </div>
  </div>
</div>; */
}
