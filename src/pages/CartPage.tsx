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
  console.log(cartItems);

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
        <div className="flex flex-col justify-center items-center h-30 w-full px-48  ">
          {cartItems.map((product) => (
            <div
              key={product.id}
              className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
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

              <button onClick={() => removeFromCard(product.id)}></button>
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
