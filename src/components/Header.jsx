import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  function hamburger() {
    setOpen(!open);
  }

  return (
    <div className="w-[100vw] flex p-2 text-white">
      <div className=" text-4xl md:text-4xl xl:text-6xl xl:pl-3 pt-1 pl-1 font-semibold text-white">
        GDSC
      </div>

      {/* code for md and lg screen */}
      <div className="w-full hidden md:block">
        <ul className="justify-end flex md:space-x-6 lg:space-x-10 text-xl xl:text-3xl  xl:mt-4 font-medium mr-[7%]">
          <li>Home</li>
          <li>Our Team</li>
          <li>Events</li>
          <li>Gallery</li>
          <li className="rounded-full px-[3%] py-[0.2%] text-center cursor-pointer bg-violet-500 text-white">
            Contact us
          </li>
        </ul>
      </div>

      {/* code for sm screen */}
      <div>
        {open ? (
          <div className="w-full flex md:hidden ">
            <button onClick={hamburger} className="absolute right-5 top-3">
              <FaTimes size={30} color="white" />
            </button>
            <ul className="absolute right-3 top-10 justify-end space-y-4 text-xl font-medium mr-[7%] bg-black w-[50%] text-center pb-[10%] px-[5%] ">
              <li>Home</li>
              <li>Our Team</li>
              <li>Events</li>
              <li>Gallery</li>
              <li className="rounded-full px-[2%] py-[0.2%] text-center cursor-pointer bg-violet-500 text-white">
                Contact
              </li>
            </ul>
          </div>
        ) : (
          <div className="w-full flex md:hidden">
            <button onClick={hamburger} className="absolute right-5 top-3">
              <FaBars size={30} color="white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
