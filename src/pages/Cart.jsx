import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart, getCart } from "../slices/CartSlice";
import { MdDelete } from "react-icons/md";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if(!cart.length) return <EmptyCart />

  return (
    <main className="px-8 py-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-medium md:text-6xl">My Shopping Cart</h2>
        <button
          className="flex items-center gap-4 rounded-sm bg-stone-200 px-2 py-3 text-3xl"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart <MdDelete size={20} />
        </button>
      </div>

      <ul className="mt-8">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
    </main>
  );
};

export default Cart;
