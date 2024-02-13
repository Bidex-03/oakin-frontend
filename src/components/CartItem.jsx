import { TiTimes } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getCurrentQuantityById } from "../slices/CartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { formatCurrency } from "./helpers";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const { id, name, image, description, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <li className="flex flex-col border-y border-stone-200 py-4 md:flex-row">
      <img src={image} alt="Living room" className="h-96 rounded-2xl" />
      <div className="mt-4 flex grow flex-col  justify-start gap-4 md:mt-0 md:flex-row items-start md:items-center md:justify-between md:gap-0 md:px-[4rem]">
        <div className="md:basis-[53rem]">
          <h3 className="text-2xl font-medium md:text-4xl">{name}</h3>
          <p className="mt-2 text-2xl md:text-3xl">{description}</p>
        </div>

        <UpdateItemQuantity productId={id} currentQuantity={currentQuantity} />

        <p className="text-4xl font-medium">{formatCurrency(totalPrice)}</p>

        <button
          className="clip rounded-md bg-stone-300 pl-7 pr-1 font-medium text-[#fff]"
          onClick={() => dispatch(deleteItem(id))}
        >
          <TiTimes size={20} />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
