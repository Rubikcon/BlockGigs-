import { useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="py-8 bg-white w-screen ">
      <div className="w-[100%] lg:flex md:flex hidden">
        <div className=" relative flex lg:gap-36 md:gap-34 w-screen">
        <img src={logo} alt="" className="w-[60px] h-[4px] md:w-[235px] md:h-[43px]" />
        <div className="flex flex-wrap gap-4 w-full float-right justify-end mr-4">
          <NavLink
            to="/"
            className="text-[#696F8C] hover:text-[#2F66F6] hover:font-[700] text-[18px]"
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className="text-[#696F8C] hover:text-[#2F66F6] hover:font-[700] text-[18px]"
          >
            About us
          </NavLink>
          <NavLink
            to="/contact-us"
            className="text-[#696F8C] hover:text-[#2F66F6] hover:font-[700] text-[18px]"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/why-you-should-join"
            className="text-[#696F8C] hover:text-[#2F66F6] hover:font-[700] text-[18px]"
          >
            Why should you join
          </NavLink>

        </div>
        </div>
      </div>
      <div className="w-[100%] lg:hidden md:hidden relative">
        <div className="relative mr-5 flex justify-between">
        <img src={logo} alt="" className="ml-5 w-[110px] h-[15px] md:w-[160px] md:h-[38px] lg:w-[185px] lg:h-[43px]" />
        <Hamburger toggled={isOpen} toggle={setOpen} color="#2F66F6" direction="right" />
        {isOpen && 
        (<nav className="flex flex-col bg-white p-8 py-12 h-[100vh] w-screen absolute top-20 z-50">
          <NavLink
            to="/"
            className="text-[#696F8C] hover:text-[#2F66F6] hover:font-[700] mb-6 text-[18px]"
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className="text-[#696F8C] hover:text-[#2F66F6] hover:font-[700] mb-6 text-[18px]"
          >
            About us
          </NavLink>
          <NavLink
            to="/contact-us"
            className="text-[#696F8C] hover:text-[#2F66F6] hover:font-[700] mb-6 text-[18px]"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/why-you-should-join"
            className="text-[#696F8C] hover:text-[#2F66F6] hover:font-[700] mb-6 text-[18px]"
          >
            Why should you join
          </NavLink>
        </nav>)}
        </div>
      </div>
    </header>
  );
};

export default Header;
