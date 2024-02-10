import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../slices/CartSlice";

const UpdateItemQuantity = ({ productId, currentQuantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-6 text-4xl font-medium">
      <button
        className="rounded-sm bg-stone-300 px-3 text-[#333]"
        onClick={() => dispatch(decreaseItemQuantity(productId))}
      >
        -
      </button>
      <span className="flex items-baseline text-3xl">{currentQuantity}</span>
      <button
        className="rounded-sm bg-stone-300 px-3 text-[#333]"
        onClick={() => dispatch(increaseItemQuantity(productId))}
      >
        +
      </button>
    </div>
  );
};

export default UpdateItemQuantity;
