import React from "react";

import SingalCartItem from "./SingalCartItem";
import { useSelector } from "react-redux";
import { PiShoppingCartFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const { addCard } = useSelector((state) => state.cart);

  const totalPrice = addCard.reduce((acc, currentItem) => {
    return acc + currentItem.price;
  }, 0);
  return (
    <div>
      <div className="flex   justify-between items-center sm:max-w-6xl mx-auto ">
        {addCard.length > 0 ? (
          <div className="flex w-full flex-col-reverse sm:flex-row justify-center">
            {" "}
            <div className="flex flex-col my-6">
              {addCard.map((item, i) => (
                <SingalCartItem key={i} item={item} />
              ))}
            </div>
            <div className=" w-11/12  mx-auto sm:w-2/6 my-6 h-6/12 ">
              <div className="my-6">
                {" "}
                <h2 className="text-lg text-green-500 font-medium">
                  YOUR CART
                </h2>
                <p className="text-2xl text-green-700 font-bold">SUMMARY</p>
                <p className="my-3 text-xl font-medium">
                  Total Items: {addCard.length}
                </p>
              </div>
              <div className="mt-auto text-lg text-green-500 font-medium my-14">
                <p>Total Amount: ${totalPrice}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center   justify-center my-3 mx-auto">
            <div className="flex justify-between">
              {" "}
              <div className="flex text-green-600 justify-center items-center ">
                {" "}
                <PiShoppingCartFill className=" text-5xl " />
              </div>
              <p className=" my-auto text-2xl">Your FakeStore Cart is empty!</p>
            </div>

            <div className="my-4">
              {" "}
              <button
                className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
        text-[12px] p-1 px-3 uppercase
        hover:bg-gray-700
        hover:text-white transition duration-300 ml-auto"
                onClick={() => navigate(-1)}
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
