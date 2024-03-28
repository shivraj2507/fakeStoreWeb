import React, { useEffect } from "react";
import Card from "./Card";
import Spinner from "./Spinner";

import { setProductData, setLoading } from "../redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../data";

const Home = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(setLoading());
    try {
      // const response = await axios.get(
      //   "https://api.escuelajs.co/api/v1/products"
      // );

      dispatch(setProductData(products));
    } catch (error) {
      dispatch(setProductData(products));
    }
    dispatch(setLoading());
  };
 useEffect(() => {
   const fetchDataAndUpdateProducts = async () => {
     await fetchData();
   };

   fetchDataAndUpdateProducts();
 }, [fetchData]);
  const fakeStore = useSelector((state) => state.product.filterData);
  const { loading } = useSelector((state) => state.product);

  return (
    <div
      className="w-11/12 max-w-[1200px] 
      mx-auto  "
    >
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid  grid-cols-1   sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 sm:space-x-5  min-h-[80vh] my-auto  ">
          {fakeStore?.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
