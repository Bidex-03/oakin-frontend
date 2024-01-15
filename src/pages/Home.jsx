import { BsArrowRightCircle } from "react-icons/bs";

// import SwiperComp from "../components/SwiperComp";
// import ImageSlider from "../components/ImageSlider";
import SwiperSlider from "../components/SwiperSlider";

import Home_Image from "../assets/image-1.jpg";
import Kitchen_Image from "../assets/image-3.jpg";

const Home = () => {
  return (
    <section className="mt-4">
      <div className="mb-4">
        <h1 className="flex justify-center text-center text-[18px] md:text-5xl font-medium text-[#333] lg:text-6xl">
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

      <div className="my-[4rem] flex w-[100%] flex-col gap-[5rem] pl-[5rem] md:flex-row">
        <div className="w-[90%] lg:w-[40%]">
          <img src={Kitchen_Image} />
        </div>
        <div className="w-[90%] lg:w-[35%]">
          <h2 className="text-4xl font-semibold uppercase lg:text-8xl">
            Kitchen Set
          </h2>
          <p className="mt-4 mb-5 text-4xl">
            Checkout our latest and trendy kitchen furniture set
          </p>
          <button className="flex justify-between items-center text-center gap-8 rounded-[10px] border-2 border-[#333] p-8 text-4xl font-medium">
            View Kitchen Set
            <span>
              <BsArrowRightCircle size={25} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
