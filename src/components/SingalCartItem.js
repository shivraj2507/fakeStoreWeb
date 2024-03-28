import React from "react";
import { MdDelete } from "react-icons/md";
import { removeToCart } from "../redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const SingalCartItem = (props) => {
  const dispatch = useDispatch();
  const item = props.item;

  const removeToCartHandler = (item) => {
    dispatch(removeToCart(item));
    toast.warning("Remove to  Cart");
  };

  return (
    <div className=" w-11/12 md:w-7/12 flex flex-col gap-6 mt-4 flex-wrap   mx-auto">
      {" "}
      <div className="flex  items-center justify-center  ">
        {" "}
        <div className="h-[180px] mx-auto  ">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="h-full mx-auto  "
            />
          ) : (
            <img
              src={item.images[0]}
              alt={item.title}
              className="h-full mx-auto  p-2 "
            />
          )}
        </div>
        <div className="w-6/12 text-center">
          {" "}
          <p className="text-gray-700 font-semibold text-lg text-center   mt-1">
            {item.title}
          </p>
          <p className="   mx-auto flex-wrap w-11/12  text-gray-800 font-normal  lg:text-[10px] text-center my-1">
            {item.description.length > 100
              ? item.description.substr(0, 100) + "..."
              : item.description}
          </p>
          <div className="flex justify-between my-3 px-2">
            <p className="text-green-600 font-semibold"> Price:${item.price}</p>
            <div
              onClick={() => removeToCartHandler(item.id)}
              className="flex justify-center items-center p-2 bg-red-400 rounded-full"
            >
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 h-[2px] bg-green-600"></div>
    </div>
  );
};

export default SingalCartItem;
