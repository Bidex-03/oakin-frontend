import image from "../assets/image-3.jpg";
import { TiTimes } from "react-icons/ti";

const CartItem = ({ item }) => {
  return (
    <li className="flex flex-col py-4 md:flex-row">
      <img src={image} alt="Living room" className="h-96 rounded-2xl" />
      <div className="flex grow flex-col items-start justify-start gap-4 md:flex-row md:items-center md:justify-between md:gap-0 md:px-[4rem]">
        <span>
          <h3 className="text-5xl font-medium">Single sofa</h3>
          <p className="mt-2 text-3xl">This is an exclusive single sofa.</p>
        </span>

        <div className="flex items-center gap-6 text-4xl font-medium">
          <button className="rounded-sm bg-stone-300 px-3 text-[#333]">
            -
          </button>
          <span className="flex items-baseline text-3xl">1</span>
          <button className="rounded-sm bg-stone-300 px-3 text-[#333]">
            +
          </button>
        </div>

        <p className="text-4xl font-medium">#360,100</p>

        <button className="clip rounded-md bg-stone-300 pl-7 pr-1 font-medium text-[#fff]">
          <TiTimes size={20} />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
