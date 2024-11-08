import logo from "../assets/logo.svg"
import { AiOutlineDiscord } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="bg-[#0A0F29]  text-white bg-no-repeat py-8 px-2 w-screen"
    >
      <div className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto flex flex-col">

        <div className="flex items-center justify-between flex-col lg:flex-row md:flex-row text-center lg:text-right md:text-right">
          <div className="lg:w-[25%] md:w-[25%] w-[100%]  lg:items-start lg:text-left md:items-start md:text-start text-center items-center">
            <img src={logo} alt="" className="w-[295px] h-[60px]  mb-4" />
            <p className="text-justify my-4">Find top African tech talents, hire anonymously, and pay securely in crypto.</p>
            <div className="flex items-center mb-4">
              <FaXTwitter className="mr-2 text-xl" />
              <AiOutlineDiscord className="mr-2 text-xl" />
              <MdMailOutline className="text-xl" />
            </div>
          </div>
          <div className="flex items-center justify-between flex-col lg:flex-row md:flex-row">
            <p className="lg:mr-8 md:mr-8 mb-4 text-justify">About
              <br />How it works
              <br />Featured
              <br />Partnership
              <br />Bussiness Relation
            </p>
          </div>
          <div>
            <p className="lg:mr-8 md:mr-8 mb-4 mx-auto text-justify">Community
              <br />Events
              <br />Blog
              <br />Podcast
              <br />Invite a friend
            </p>
          </div>
          <div>
            <p className="mb-4 mx-auto text-justify">Socials
              <br />Discord
              <br />Instagram
              <br />Twitter
              <br />Facebook
            </p>
          </div>

        </div>
        <hr className="my-4" />
        <div className="w-[100%] mx-auto flex flex-col  justify-between  lg:flex-row md:flex-row ">
          <div>
          <p className="mb-4">&copy; 2024 Blockgigs. All rights reserved</p>
          </div>
          <div>
            <p className="flex gap-8">Privacy & Policy <span>Terms & Condition</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
