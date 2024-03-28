import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { setFilterData } from "../redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const { productData } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { addCard } = useSelector((state) => state.cart);
  function searchHandler(e) {
    setSearch(e.target.value);
  }
  useEffect(() => {
    const filteredProducts = productData?.filter((item) => {
      return item?.title?.toLowerCase()?.includes(search.toLowerCase());
    });
    dispatch(setFilterData(filteredProducts));
  }, [search, productData, dispatch]);
  return (
    <div>
      <nav className="flex   justify-between items-center h-20 sm:max-w-6xl mx-auto px-2 sm:px-0">
        <NavLink to="/">
          <div className="sm:ml-5">
            <h1 className="sm:text-2xl font-semibold text-white italic">
              FakeStore
            </h1>
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 sm:mr-5 gap-1 sm:space-x-6">
          <div>
            {" "}
            <input
              onChange={(e) => searchHandler(e)}
              className=" p-1 text-black rounded "
              placeholder="Search your product..."
              type="text"
              value={search}
            />{" "}
          </div>
          <div className="flex  relative items-center justify-center">
            {" "}
            <FaCartShopping className=" text-white sm:text-2xl  " />
            {addCard.length > 0 && (
              <p className=" absolute rounded-full px-2  -top-5 left-4 bg-green-500">
                {addCard.length}
              </p>
            )}
          </div>
          <NavLink to="/cart">
            <div className="flex sm:text-2xl gap-1 sm:gap-2 justify-center text-center">
              <p>Cart</p>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
