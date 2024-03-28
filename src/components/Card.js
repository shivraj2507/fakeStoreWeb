import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTocart } from "../redux/slice/cartSlice";
import { toast } from "react-toastify";
function Card(props) {
  const item = props.item;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productSpecificHandler = (id) => {
    navigate(`/products/${id - 1}`);
  };
  const addToCartHandler = (add) => {
    if (item.id === add) {
      dispatch(addTocart(item));
    }
    toast.success("Added to cart");
  };
  return (
    <div className="flex flex-col items-center  justify-center hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10   rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-center  mt-1">
          {item.category.name ? item?.category.name : item?.category}
        </p>
        <p className="text-gray-700 font-semibold text-lg text-center   mt-1">
          {item.title}
        </p>
      </div>

      <p className=" w-full mx-auto lg:w-40 text-gray-400 font-normal  lg:text-[10px] text-center">
        {item.description.length > 100
          ? item?.description.substr(0, 100) + "..."
          : item?.description}
      </p>

      <div className="h-[180px]">
        <img
          src={item?.image || item?.images[0]}
          alt={item?.title}
          className="h-full w-full "
        />
      </div>
      <div className="flex gap-4">
        <div className="flex gap-3">
          <p>Rating</p>

          <h4>
            {item?.rating?.rate ? item?.rating?.rate : item?.category?.id}
          </h4>
        </div>

        {item?.rating?.count ? (
          <div className="flex gap-3">
            <p>Count</p>
            <h4>{item?.rating?.count}</h4>
          </div>
        ) : (
          ""
        )}
      </div>
      <p className="text-green-600 font-semibold">Price:${item.price}</p>

      <div className="flex mt-auto justify-between  items-center w-full ">
        <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
        text-[10px] p-1 px-3 uppercase 
        hover:bg-gray-700
        hover:text-white transition duration-300 ease-in"
          onClick={() => addToCartHandler(item.id)}
        >
          ADD TO CART
        </button>

        <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
        text-[10px] p-1 px-3 uppercase 
        hover:bg-gray-700
        hover:text-white transition duration-300 ease-in"
          onClick={() => productSpecificHandler(item.id)}
        >
          More Details
        </button>
      </div>
    </div>
  );
}

export default Card;
