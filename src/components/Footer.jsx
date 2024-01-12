import { NavLink } from "react-router-dom";

import { BsInstagram, BsTelephone } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Catalogue",
      link: "/catalogue",
    },
    {
      name: "Offers",
      link: "/offers",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <footer className="bg-[#333] px-6 py-4">
      {/* TOP */}
      <section className="flex md:flex-row flex-col items-start justify-between text-[#fff]">
        {/* LOGO et SOCIALS */}
        <div className="mb-10 lg:mb-0">
          <span className="font-[Afterglow] font-semibold tracking-[3px] text-7xl lg:text-[7rem]">
            Oakin
          </span>
          <p className="text-5xl my-4">Follow us</p>
          <div className="flex justify-between">
            <span>
              <BsInstagram color="#fff" size={25} />
            </span>
            <span>
              <FaXTwitter color="#fff" size={25} />
            </span>
            <span>
              <FiFacebook color="#fff" size={25} />
            </span>
          </div>
        </div>

        {/* CONTACTS */}
        <div className="mb-8 lg:mb-0">
          <p className="mb-6 text-5xl font-semibold">Contact Us</p>
          <div className="font-semibold text-2xl">
            <span className="flex mb-4">
              <AiOutlineMail color="#fff" size={25} />
              <p className="ml-4">oakin@gmail.com</p>
            </span>
            <span className="flex mb-4">
              <BsTelephone color="#fff" size={25} />
              <p className="ml-4">+234 (0) 807 258 9256</p>
            </span>
            <span className="flex mb-4">
              <HiOutlineLocationMarker color="#fff" size={25} />
              <p className="ml-4">No 10, Oakin house, Lagos, Nigeria.</p>
            </span>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h2 className="text-5xl font-semibold mb-6">Navigation</h2>
          <ul className="flex flex-col font-semibold text-2xl">
            {Links.map((link, i) => (
              <li key={i} className="mb-6">
                <NavLink to={link.link}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="text-center font-semibold text-[#fff] mt-8 text-2xl">
        <div className="border-b-2 mb-4">
          <h2 className="mb-4">Support</h2>
          <ul className="flex flex-wrap items-center justify-center mb-4">
            <li className="mr-4">Account</li>
            <li className="mr-4">Settings</li>
            <li className="mr-4">Privacy</li>
            <li className="mr-4">Terms</li>
            <li>Conditions</li>
          </ul>
        </div>
        <div className="">
          <p>Copyright@2022 All right reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
