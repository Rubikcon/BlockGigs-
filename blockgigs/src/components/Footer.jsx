import whitelogo from "../assets/whitelogo.svg"
import { AiOutlineDiscord } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";


const Footer = () => {
  return (
    <footer
      className="bg-[#0A0F29]  text-white bg-no-repeat py-8 px-2 w-screen"
    >
      <div className="w-full mx-auto flex flex-col">
        <div className="flex items-center justify-between flex-col lg:flex-row md:flex-row text-center lg:text-right md:text-right mx-3">
          <div>
            <img src={whitelogo} alt="" className="lg:w-[295px] lg:h-[60px] lg:mb-4 md:w-[200px] md:h-[40px] md:mb-3 w-[150px] h-[30px] mb-2 -mx-5" />
          </div>
        </div>
        <div className=" mt-2 item-center justify-center">
          <div className="flex justify-center gap-5">
            <a
              href="https://x.com/rubiconconsult/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2F66F6]"
            > <FaXTwitter className="text-xl" /></a>
            <a
              href="https://x.com/rubiconconsult/status/1763208220963742126?s=46&t=VvekonL19LKuyej2Xh1ZJw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2F66F6]"
            >  <AiOutlineDiscord className="text-xl" /></a>
            <a
              href="mailto:info@rubiconconsulting@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2F66F6]"
            >  <MdMailOutline className="text-xl" />
            </a>
          </div>
        </div>

        <hr className="my-4" />
        <div className="w-[100%] mx-auto flex flex-col  justify-between  lg:flex-row md:flex-row ">
          <div>
            <p className="mb-1 text-[12px]">&copy; 2024 Blockgigs. All rights reserved</p>
          </div>
          <div>
            <p className="flex gap-8 text-[12px]">Privacy & Policy <span>Terms & Condition</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
