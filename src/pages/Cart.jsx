import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { getCart } from "../slices/CartSlice";

const Cart = () => {
  const cart = useSelector(getCart);

  return (
    <main className="px-8 py-6">
      <h2 className="text-3xl font-medium md:text-6xl">My Shopping Cart</h2>

      <ul className="mt-8 border-y border-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
        <CartItem />
      </ul>
    </main>
  );
};

export default Cart;
