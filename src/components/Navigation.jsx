import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidUser, BiMenuAltRight } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <nav className="flex justify-between items-center px-6 py-4">
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
          } md:items-center md:gap-[5rem] gap-4 absolute z-0 md:static left-0 top-[6rem] w-full md:w-auto p-4`}
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
            <FaShoppingCart color="#000" size={25} />
          </span>
          <span>
            <BiSolidUser color="#000" size={25} />
          </span>
        </div>

        {/* TOGGLEICONS */}
        <div onClick={toggleMenu} className="md:hidden cursor-pointer">
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
