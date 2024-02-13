import image from "../assets/living_room_category.jpg";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <main className="flex flex-col bg-[#f8f4f4] md:h-[90vh] md:flex-row">
      <section className="group relative w-[100%] object-cover">
        <img
          src={image}
          alt="Contact Us"
          className="h-full w-full object-cover"
        />
        <span className="bg-black-100 absolute bottom-0 flex h-full w-full items-center justify-center opacity-100 backdrop-blur-sm transition-all duration-300">
          <h2 className="font-[Afterglow] text-8xl font-semibold text-white">
            Oakin
          </h2>

          <div className="absolute bottom-5 flex flex-col gap-5 text-white">
            <p className="text-4xl">Follow Us</p>

            <span className="flex items-center gap-8">
              <BsInstagram size={25} />
              <FaXTwitter size={25} />
              <FiFacebook size={25} />
            </span>

            <div className="flex gap-6">
              <span className="flex items-center justify-center gap-2">
                <AiOutlineMail size={18} />
                <p className="text-xl font-medium">oakin@gmail.com</p>
              </span>

              <span className="flex items-center gap-2">
                <BsTelephone size={18} />
                <p className="text-xl font-medium">+234(0) 807 258 9256</p>
              </span>

              <span className="flex items-center gap-2">
                <HiOutlineLocationMarker size={18} />
                <p className="text-xl font-medium">
                  No 10, Oakin house, Lagos, Nigeria.
                </p>
              </span>
            </div>
          </div>
        </span>
      </section>

      <section className="w-full px-[8rem] py-[8rem]">
        <h2 className="text-5xl font-medium">Leave Us a Message</h2>
        <form className="mt-8 flex flex-col gap-8">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="rounded-sm bg-[#fff] p-8 text-2xl font-medium outline-none drop-shadow-md"
          />

          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            className="resize-none rounded-sm p-8 text-2xl font-medium outline-none drop-shadow-md"
          />

          <button
            disabled
            className="rounded-sm bg-[#333] py-8 text-3xl font-medium tracking-wide text-white"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
