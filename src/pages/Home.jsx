import { Link } from "react-router-dom";
import SwiperSlider from "../components/SwiperSlider";
import { BsArrowRightCircle } from "react-icons/bs";

import Home_Image from "../assets/image-1.jpg";
import Kitchen_Image from "../assets/image-3.jpg";

const Home = () => {
  return (
    <section>
      <div className="mb-4">
        <h1 className="flex justify-center text-center text-[18px] font-medium text-[#333] md:text-5xl lg:text-6xl">
          Classy and comfy furniture for Your Family
        </h1>
      </div>

      <div className="h-100">
        <img
          src={Home_Image}
          alt="Family Living room"
          className="object-contain md:w-full md:object-cover lg:h-[73vh]"
        />
      </div>

      <div className="mt-8 text-center">
        <h2 className="mb-4 text-4xl font-semibold uppercase">Team Specials</h2>
        <p className="m-auto w-[80%] text-center text-3xl md:w-[45%] lg:w-[30%] lg:text-4xl">
          Here is a few of our exclusive comfy team furniture set
        </p>

        {/* IMPORT THE HOME PAGE IMAGES SLIDER */}
        <div className="my-8">
          <SwiperSlider />
        </div>
      </div>

      <div className="mx-6 my-[5rem] flex flex-col justify-center gap-[2rem] md:flex-row md:gap-[5rem]">
        <img
          src={Kitchen_Image}
          alt="Kitchen furniture"
          className="h-[35rem]"
        />

        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-medium uppercase text-[#333] md:text-5xl">
            Kitchen set
          </h2>
          <p className="my-7 text-2xl md:text-3xl">
            Checkout our latest and trendy Kitchen furniture set.
          </p>
          <Link
            to="/app/catalogue/2"
            className="flex gap-4 rounded-sm border-2 border-[#333] px-6 py-6 text-3xl capitalize md:w-[70%]"
          >
            View Kitchen furniture <BsArrowRightCircle size={25} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
