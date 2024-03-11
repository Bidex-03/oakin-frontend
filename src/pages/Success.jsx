import { IoCheckmark } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Success = () => {
    const name = useSelector((state) => state.user.username);

  return (
    <section className="py-8">
      <div className="flex items-center justify-center text-center">
        <div className="rounded-full bg-stone-300">
          <IoCheckmark size={200} />
        </div>
      </div>
      <h2 className="text-center text-3xl md:text-5xl font-medium my-4">Order Successful</h2>
      <p className="text-center border-b-2 py-6 text-xl md:text-3xl w-[90%] md:w-[55%] m-auto">
        Hi {name}, you've successfully placed an order. Kindly check your mail for
        more details. Thank you for your patronage.
      </p>

      <div className="text-center my-4 text-xl md:text-3xl">
        <h3>
          Having Issues? <Link to="/app/contact" className="font-medium"> Contact Us</Link>
        </h3>
      </div>

      <div className="flex justify-center">
        <Link
          to="/app/catalogue"
          className="rounded-sm bg-[#333] px-8 py-5 text-center text-4xl font-medium text-white"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
};

export default Success;
