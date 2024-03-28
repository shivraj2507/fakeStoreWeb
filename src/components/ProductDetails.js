import React from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function UserDetails() {
  const fakeStore = useSelector((state) => state?.product?.productData);

  const navigate = useNavigate();
  const { productId } = useParams();

  return (
    <div className=" w-11/12 lg:w-1/2 mx-auto flex flex-col items-center gap-3 my-6">
      <div>
        <h1 className="text-gray-700 font-semibold text-lg text-center  mt-1">
          {fakeStore.length === 20
            ? fakeStore[productId].category
            : fakeStore[productId - 1].category.name}
        </h1>
        <p className="text-gray-700 font-semibold text-lg text-center   mt-1">
          {fakeStore.length === 20
            ? fakeStore[productId].title
            : fakeStore[productId - 1].title}
        </p>
      </div>
      <div>
        <p className=" text-gray-600 font-normal text-[13px] text-center">
          {fakeStore.length === 20
            ? fakeStore[productId].description
            : fakeStore[productId - 1].description}
        </p>
      </div>
      <div className="h-[250px]">
        <img
          src={
            fakeStore.length === 20
              ? fakeStore[productId]?.image
              : fakeStore[productId - 1]?.images[0]
          }
          alt={fakeStore[productId].id}
          className="h-full  "
        />
      </div>

      <div className="flex justify-between gap-12   w-full ">
        <div>
          <p className="text-green-600 font-semibold">
            $
            {fakeStore.length === 20
              ? fakeStore[productId].price
              : fakeStore[productId - 1].price}
          </p>
        </div>

        <div className="flex gap-4">
          <div className="flex gap-3">
            <p>Rating</p>
            <h4>
              {fakeStore.length === 20
                ? fakeStore[productId].rating.rate
                : fakeStore[productId - 1]?.category?.id}
            </h4>
          </div>
          {fakeStore.length === 20 ? (
            <div className="flex gap-3">
              <p>Count</p>
              <h4>{fakeStore[productId].rating.count}</h4>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
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
  );
}

export default UserDetails;
