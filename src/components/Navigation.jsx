import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidUser, BiMenuAltRight } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../slices/CartSlice";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const totalCartQuantity = useSelector(getTotalCartQuantity);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  };

  return (
    <header>
      <nav className="flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <div className="text-6xl font-semibold tracking-[2px]">
          <Link to="/" className="font-[Afterglow]">
            Oakin
          </Link>
        </div>

        {/* NAVLISTS */}
        <ul
          className={`font-[Inter] text-3xl  ${
            isOpen ? "flex flex-col bg-[#333] text-[#fff]" : "hidden md:flex"
          } absolute left-0 top-[6rem] z-0 w-full gap-4 p-4 md:static md:w-auto md:items-center md:gap-[5rem]`}
        >
          {Links.map((link, i) => (
            <li key={i}>
              <NavLink to={link.link} onClick={handleNavLinkClick}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ICONS */}
        <div className="flex items-center gap-6">
          <span>
            <AiOutlineSearch color="#000" size={25} />
          </span>
          <span>
            <Link to="/cart" className="relative">
              <FaShoppingCart color="#000" size={25} />
              {totalCartQuantity ? (
                <p className="absolute -right-3 -top-4 rounded-full bg-stone-300 px-3 py-1 text-lg font-medium text-[#333]">
                  {totalCartQuantity}
                </p>
              ) : null}
            </Link>
          </span>
          <span>
            <BiSolidUser color="#000" size={25} />
          </span>
        </div>

        {/* TOGGLEICONS */}
        <div onClick={toggleMenu} className="cursor-pointer md:hidden">
          {isOpen ? (
            <LiaTimesSolid color="#000" size={25} />
          ) : (
            <BiMenuAltRight color="#000" size={25} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
