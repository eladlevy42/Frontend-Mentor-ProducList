import React from "react";
import { useCart } from "./Contexts/CartContext";
import CartItem from "./CartItem";
import EmptyCart from "./Svgs/EmptyCart";
import ConfrimOrderBtn from "./ui/ConfrimOrderBtn";
function CartList() {
  const { cart, getTotalPrice } = useCart();

  return (
    <>
      <div className="">
        {cart.length > 0 ? (
          cart.map((item) => <CartItem item={item} key={item.name} />)
        ) : (
          <EmptyCart />
        )}
      </div>
      {cart.length > 0 ? (
        <div className="flex flex-col justify-center">
          <div className="flex justify-between mx-10 my-2 ">
            <span className="text-rose-500">Order Total</span>
            <span className="font-bold text-2xl">{`$${getTotalPrice()}`}</span>
          </div>
          <div className=" flex justify-center text-center py-5 px-1 text-xs my-5  bg-rose-100 w-10/12 mx-auto rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              fill="none"
              className="mx-2"
              viewBox="0 0 21 20"
            >
              <path
                fill="#1EA575"
                d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
              />
              <path
                fill="#1EA575"
                d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
              />
            </svg>
            This is a <span className="font-bold mx-1">carbon-natural </span>{" "}
            delivery
          </div>
          <ConfrimOrderBtn />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default CartList;