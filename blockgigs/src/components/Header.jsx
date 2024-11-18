import { useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="py-8 bg-white w-screen ">
      <div className="w-[90%] mx-auto lg:flex md:flex justify-between hidden">
        <img src={logo} alt="" className="w-[235px] h-[43px]" />
        <nav>
          <NavLink
            to="/"
            className="text-[#696F8C] hover:text-[#2F66F6] hover:font-[700] mr-10 text-[18px]"
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className="text-[#696F8C] hover:text-[#2F66F6]  hover:font-[700] mr-10 text-[18px]"
          >
            About us
          </NavLink>
          <NavLink
            to="/contact-us"
            className="text-[#696F8C] hover:text-[#2F66F6]  hover:font-[700] mr-10 text-[18px]"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/why-you-should-join"
            className="text-[#696F8C] hover:text-[#2F66F6]  hover:font-[700] mr-10 text-[18px]"
          >
            Why should you join
          </NavLink>

        </nav>


      </div>
      <div className="w-[95%] mx-auto flex justify-between lg:hidden md:hidden relative">
        <img src={logo} alt="" className="w-[185px] h-[43px]" />
        <Hamburger toggled={isOpen} toggle={setOpen} color="#2F66F6" direction="right" />
        {isOpen && (<nav className="flex flex-col bg-white p-8 py-12 h-[100vh] w-[100%] absolute top-20 left-0 z-50">
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
    </header>
  );
};

export default Header;
