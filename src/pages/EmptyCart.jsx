import { useNavigate } from "react-router-dom";
import cart_image from "../assets/cart.png";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div>
        <img src={cart_image} />

        <div className="mt-8 text-center">
          <p className="text-4xl font-medium text-[#333]">
            Ohh... Your cart is empty
          </p>
          <p className="text-3xl text-stone-500">but it doesn't have to be.</p>

          <button
            onClick={() => navigate("/app/catalogue")}
            className="mt-8 rounded-full bg-[#333] px-12 py-5 text-3xl font-medium text-stone-100 hover:bg-[#474747]"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
