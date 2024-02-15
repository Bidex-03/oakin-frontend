import { Link, NavLink } from "react-router-dom";

import { BsInstagram, BsTelephone } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  const Links = [
    {
      name: "Home",
      link: "/app/home",
    },
    {
      name: "Catalogue",
      link: "/app/catalogue",
    },
    {
      name: "Offers",
      link: "/app/offers",
    },
    {
      name: "Contact",
      link: "/app/contact",
    },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#333] px-6 py-4">
      {/* TOP */}
      <section className="flex flex-col items-start justify-between text-[#fff] md:flex-row">
        {/* LOGO et SOCIALS */}
        <div className="mb-10 lg:mb-0">
          <span className="afterglow text-7xl font-semibold tracking-[3px] lg:text-[7rem]">
            Oakin
          </span>
          <p className="my-12 text-5xl lg:my-4 ">Follow us</p>
          <div className="flex justify-between">
            <Link to="https://www.instagram.com/dreal_devabdullah/?hl=en">
              <BsInstagram color="#fff" size={25} />
            </Link>
            <Link to="https://twitter.com/QaasimAbdullah4">
              <FaXTwitter color="#fff" size={25} />
            </Link>
            <Link to="https://web.facebook.com/abdullahharbydeyme.qaasim/">
              <FiFacebook color="#fff" size={25} />
            </Link>
          </div>
        </div>

        {/* CONTACTS */}
        <div className="mb-8 lg:mb-0">
          <p className="mb-6 text-5xl">Contact Us</p>
          <div className="text-2xl font-semibold">
            <span className="mb-4 flex">
              <AiOutlineMail color="#fff" size={25} />
              <p className="ml-4">oakin@gmail.com</p>
            </span>
            <span className="mb-4 flex">
              <BsTelephone color="#fff" size={25} />
              <p className="ml-4">+234 (0) 807 258 9256</p>
            </span>
            <span className="mb-4 flex">
              <HiOutlineLocationMarker color="#fff" size={25} />
              <p className="ml-4">No 10, Oakin house, Lagos, Nigeria.</p>
            </span>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h2 className="mb-6 text-5xl">Navigation</h2>
          <ul className="flex flex-col text-2xl font-semibold">
            {Links.map((link, i) => (
              <li key={i} className="mb-6">
                <NavLink to={link.link}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="mt-8 text-center text-2xl font-semibold text-[#fff]">
        <div className="mb-4 border-b-2">
          <h2 className="mb-4">Support</h2>
          <ul className="mb-4 flex flex-wrap items-center justify-center">
            <li className="mr-4">Account</li>
            <li className="mr-4">Settings</li>
            <li className="mr-4">Privacy</li>
            <li className="mr-4">Terms</li>
            <li>Conditions</li>
          </ul>
        </div>
        <div className="">
          <p>Copyright@{year} All rights reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
