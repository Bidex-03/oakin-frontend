import { Link } from "react-router-dom";
import bedroom from "../assets/bedroom_category.jpg";
import balcony from "../assets/balcony_category.jpg";
import { formatCurrency } from "../components/helpers";
import SwiperSlider from "../components/SwiperSlider";
import { BsArrowRightCircle } from "react-icons/bs";

const Offers = () => {
  const initialPrice = 3000;
  const percentage = initialPrice - initialPrice * (20 / 100);

  return (
    <section className="p-8">
      <div>
        <h2 className="mb-8 font-[Afterglow] text-4xl font-semibold underline">
          Special Offer
        </h2>
      </div>

      <div className="h-100 group relative flex">
        <img
          src={bedroom}
          alt="Kitchen interior"
          className="h-[80vh] w-full object-cover"
        />
        <span className="absolute flex h-full w-full items-center bg-black/60 pl-[5rem] opacity-100 transition-all duration-300">
          <div className="flex flex-col gap-8 text-white">
            <h2 className="font-[Afterglow] text-8xl font-medium tracking-wide">
              20% Off
            </h2>
            <span className="text-5xl font-medium">
              <p className="mb-4 line-through">
                {formatCurrency(initialPrice)}
              </p>
              <p>{formatCurrency(percentage)}</p>
            </span>
          </div>
        </span>
      </div>

      {/* SWIPER SECTION */}
      <div className="mt-[5rem] text-[#333]">
        <div className="text-center">
          <h2 className="text-5xl font-medium">Team Specials</h2>
          <p className="my-8 text-3xl">
            Order anyone of these furniture sets and get a{" "}
            <strong>CHAIR</strong> for free
          </p>
        </div>
        <SwiperSlider />
      </div>

      {/* BALCONY REDIRECT SECTION */}
      <div className="mt-[5rem] flex flex-col justify-center gap-[2rem] md:gap-[5rem] md:flex-row">
        <img src={balcony} alt="Balcony furniture" className="h-[35rem]" />

        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-medium uppercase text-[#333]">
            Balcony set
          </h2>
          <p className="my-7 text-2xl md:text-3xl">
            Checkout our latest and trendy Balcony furniture set.
          </p>
          <Link
            to="/catalogue/5"
            className="flex md:w-[70%] gap-4 rounded-sm border-2 border-[#333] px-6 py-6 text-3xl capitalize"
          >
            View balcony furniture <BsArrowRightCircle size={25} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Offers;
