import React, { useState } from "react";
import { Link } from "react-router-dom/dist";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const hamburgerline = (
    <div className="hamburger-btn">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );

  return (
    <div
      className={`sidebar ${
        isSidebarOpen ? "open" : ""
      } xl:left-[-220px] xl:w-[220px] left-[-160px] w-[160px]  z-10`}
    >
      <button
        className="toggle-btn bg-none border-none text-gray-900 cursor-pointer text-xl mb-2 xl:ml-20 ml-8 mt-5"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "✕" : hamburgerline}
      </button>
      <ul className="mt-12 w-full">
        <li>
          <Link
            to="/"
            className="w-1/2 font-semibold ml-[20%] text-shadow-black xl:text-lg text-sm hover:text-indigo-800 "
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="w-1/2 font-semibold ml-[20%] text-shadow-black xl:text-lg text-sm hover:text-indigo-800 "
          >
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="w-1/2 font-semibold ml-[20%] text-shadow-black xl:text-lg text-sm hover:text-indigo-800 "
          >
            CARS
          </Link>
        </li>
        <li>
          <Link
            to="/ourteam"
            className="w-1/2 font-semibold ml-[20%] text-shadow-black xl:text-lg text-sm hover:text-indigo-800 "
          >
            OUR TEAM
          </Link>
        </li>
        <li>
          <Link
            to="/contactus"
            className="w-1/2 font-semibold ml-[20%] text-shadow-black xl:text-lg text-sm hover:text-indigo-800 "
          >
            CONTACT US
          </Link>
        </li>
        <li className="w-1/2 mt-14 ml-[20%] text-shadow-black xl:text-base text-sm hover:text-indigo-800">
          <a href="/">Language</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
