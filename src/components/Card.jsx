// import { Link } from 'react-router-dom';

import LivingRoom from '../assets/living_room_category.jpg';
import KitchenCategory from '../assets/kitchen_category.jpg';
import BedroomCategory from '../assets/bedroom_category.jpg';
import DinningCategory from '../assets/dinning_category.jpg';
import BalconyCategory from '../assets/balcony_category.jpg';
import OfficeCategory from '../assets/office_category.jpg';

function Card() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {/* CARD */}

      {/* LIVING ROOM */}
      <button to="/" className="group relative flex">
        <img src={LivingRoom} alt="Living Room Category Image" className="" />
        <span className="absolute -bottom-10 flex h-full w-full items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
          <p className="text-4xl font-semibold uppercase text-white">
            Living Room
          </p>
        </span>
      </button>

      {/* KITCHEN */}
      <button to="/" className="group relative flex">
        <img src={KitchenCategory} alt="Kitchen Category Image" />

        <span className="absolute -bottom-10 flex h-full w-full items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
          <p className="text-4xl font-semibold uppercase text-white">Kitchen</p>
        </span>
      </button>

      {/* BEDROOM */}
      <button to="/" className="group relative flex">
        <img src={BedroomCategory} alt="Bedroom Category Image" />

        <span className="absolute -bottom-10 flex h-full w-full items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
          <p className="text-4xl font-semibold uppercase text-white">Bedroom</p>
        </span>
      </button>

      {/* DINNING */}
      <button to="/" className="group relative flex">
        <img src={DinningCategory} alt="Dinning Category Image" />

        <span className="absolute -bottom-10 flex h-full w-full items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
          <p className="text-4xl font-semibold uppercase text-white">Dinning</p>
        </span>
      </button>

      {/* BALCONY */}
      <button to="/" className="group relative flex">
        <img src={BalconyCategory} alt="Balcony Category Image" />

        <span className="absolute -bottom-10 flex h-full w-full items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
          <p className="text-4xl font-semibold uppercase text-white">Balcony</p>
        </span>
      </button>

      {/* OFFICE */}
      <button to="/" className="group relative flex">
        <img src={OfficeCategory} alt="Office Category Image" />

        <span className="absolute -bottom-10 flex h-full w-full items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
          <p className="text-4xl font-semibold uppercase text-white">Office</p>
        </span>
      </button>
    </div>
  );
}

export default Card;
