import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart, getCart, getTotalCartPrice } from "../slices/CartSlice";
import { MdDelete } from "react-icons/md";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";
import { formatCurrency } from "../components/helpers";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);

  const shippingFee = totalCartPrice * (5 / 100);
  const finalPrice = totalCartPrice + shippingFee;

  if (!cart.length) return <EmptyCart />;

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

      <section className="mt-10 flex flex-col-reverse justify-between gap-8 md:flex-row md:items-end md:gap-0">
        <Link
          to="/app/catalogue"
          className="rounded-sm border border-[#333] px-8 py-5 text-center text-4xl font-medium"
        >
          Continue Shopping
        </Link>

        <div>
          <div className="text-3xl font-semibold text-[#333]">
            <div className="mb-3 border-b border-[#333] pb-2">
              <p>Subtotal: {formatCurrency(totalCartPrice)}</p>
              <p>Shipping: {formatCurrency(shippingFee)}</p>
            </div>
            <p>Total Price: {formatCurrency(finalPrice)}</p>
          </div>

          <button className="mt-4 w-full rounded-sm bg-[#333] px-6 py-4 text-4xl font-semibold text-white">
            Checkout
          </button>
        </div>
      </section>
    </main>
  );
};

export default Cart;
