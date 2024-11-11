// Sidebar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaHome, FaBriefcase, FaWallet, FaEnvelope, FaTasks, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className={`bg-gray-900 text-white h-screen ${isOpen ? "w-64" : "w-20"} transition-width duration-300 fixed top-0 left-0 flex flex-col`}>
      {/* Logo/Image */}
      <div className="flex items-center justify-center p-4 border-b border-gray-700">
        <img src={logo} alt="Logo" className="w-[185px] h-[43px]" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <span className={`text-2xl font-semibold ${isOpen ? "block" : "hidden"}`}>
          Dashboard
        </span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? "◄" : "►"}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className={`flex items-center p-2 ${isActive("/dashboard") ? "bg-white text-black" : "text-gray-300"} hover:text-white`}
            >
              <FaHome className="mr-3" />
              {isOpen && <span>Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/my-gigs"
              className={`flex items-center p-2 ${isActive("/my-gigs") ? "bg-white text-black" : "text-gray-300"} hover:text-white`}
            >
              <FaBriefcase className="mr-3" />
              {isOpen && <span>My Gigs</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/wallet"
              className={`flex items-center p-2 ${isActive("/wallet") ? "bg-white text-black" : "text-gray-300"} hover:text-white`}
            >
              <FaWallet className="mr-3" />
              {isOpen && <span>Wallet</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/messages"
              className={`flex items-center p-2 ${isActive("/messages") ? "bg-white text-black" : "text-gray-300"} hover:text-white`}
            >
              <FaEnvelope className="mr-3" />
              {isOpen && <span>Messages</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/milestone"
              className={`flex items-center p-2 ${isActive("/milestone") ? "bg-white text-black" : "text-gray-300"} hover:text-white`}
            >
              <FaTasks className="mr-3" />
              {isOpen && <span>Milestone</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={`flex items-center p-2 ${isActive("/settings") ? "bg-white text-black" : "text-gray-300"} hover:text-white`}
            >
              <FaCog className="mr-3" />
              {isOpen && <span>Settings</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/logout"
              className={`flex items-center p-2 ${isActive("/logout") ? "bg-white text-black" : "text-gray-300"} hover:text-white`}
            >
              <FaSignOutAlt className="mr-3" />
              {isOpen && <span>Logout</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;


// // Sidebar.js
// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/logo.svg";
// import { FaHome, FaBriefcase, FaWallet, FaEnvelope, FaTasks, FaCog, FaSignOutAlt } from "react-icons/fa";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className={`bg-gray-900 text-white h-screen ${isOpen ? "w-64" : "w-20"} transition-width duration-300 fixed top-0 left-0 flex flex-col`}>
//       {/* Logo/Image */}
//       <div className="flex items-center justify-center p-4 border-b border-gray-700">
//         {/* <img
//           src="https://via.placeholder.com/150" // Replace with your image URL
//           alt="Logo"
//           className={`rounded-full ${isOpen ? "w-20 h-20" : "w-10 h-10"} transition-all duration-300`}
//         /> */}

//         <img src={logo} alt="" className="w-[185px] h-[43px]" />
//       </div>

//       {/* Header */}
//       <div className="flex items-center justify-between p-4 border-b border-gray-700">
//         <span className={`text-2xl font-semibold ${isOpen ? "block" : "hidden"}`}>
//           Dashboard
//         </span>
//         <button onClick={() => setIsOpen(!isOpen)} className="text-white">
//           {isOpen ? "◄" : "►"}
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <nav className="flex-1 p-4">
//         <ul className="space-y-4">
//           <li>
//             <Link to="/dashboard" className="flex items-center p-2 text-gray-300 hover:text-white">
//               <FaHome className="mr-3" />
//               {isOpen && <span>Dashboard</span>}
//             </Link>
//           </li>
//           <li>
//             <Link to="/my-gigs" className="flex items-center p-2 text-gray-300 hover:text-white">
//               <FaBriefcase className="mr-3" />
//               {isOpen && <span>My Gigs</span>}
//             </Link>
//           </li>
//           <li>
//             <Link to="/wallet" className="flex items-center p-2 text-gray-300 hover:text-white">
//               <FaWallet className="mr-3" />
//               {isOpen && <span>Wallet</span>}
//             </Link>
//           </li>
//           <li>
//             <Link to="/messages" className="flex items-center p-2 text-gray-300 hover:text-white">
//               <FaEnvelope className="mr-3" />
//               {isOpen && <span>Messages</span>}
//             </Link>
//           </li>
//           <li>
//             <Link to="/milestone" className="flex items-center p-2 text-gray-300 hover:text-white">
//               <FaTasks className="mr-3" />
//               {isOpen && <span>Milestone</span>}
//             </Link>
//           </li>
//           <li>
//             <Link to="/settings" className="flex items-center p-2 text-gray-300 hover:text-white">
//               <FaCog className="mr-3" />
//               {isOpen && <span>Settings</span>}
//             </Link>
//           </li>
//           <li>
//             <Link to="/logout" className="flex items-center p-2 text-gray-300 hover:text-white">
//               <FaSignOutAlt className="mr-3" />
//               {isOpen && <span>Logout</span>}
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
