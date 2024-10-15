import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Fade } from "react-reveal";

const Form = () => {
  return (
    <div className="m-2 w-full md:w-[55%] flex justify-center text-white z-0">
      <div className="space-y-4 xl:space-y-5 justify-center flex-col text-center w-[90%] md:w-[80%] mt-[10%] md:mt-[6%]">
        <Fade top>
          <h1 className="text-5xl xl:text-6xl font-medium">HAVE ANY QUERY?</h1>
        </Fade>

        {/* email form */}
        <div className="space-y-5 justify-center ">
          <Fade top>
            <input
              type="text"
              placeholder="Full Name"
              className=" hover:border-violet-500 cursor-pointer text-black border-2 rounded w-full p-2"
            />
          </Fade>
          <Fade top>
            <input
              type="email"
              placeholder="Email"
              className="hover:border-violet-500 cursor-pointer text-black border-2 rounded w-full p-2"
            />
          </Fade>
          <Fade top>
            <textarea
              placeholder="Message"
              className="hover:border-violet-500 cursor-pointer text-black border-2 rounded w-full p-2"
              rows="5"
            />
          </Fade>

          <Fade top>
            <button className="border-white border-2 rounded px-[6%] py-[0.5%] text-xl xl:text-2xl font-semibold hover:bg-violet-900 hover:border-violet-900  cursor-pointer hover:scale-[5px] transition-transform duration-500">
              SEND
            </button>
          </Fade>
        </div>

        <hr className="border-white" />

        <div>
          <p className="md:text-xl md:mb-[2%] font-medium xl:text-2xl  ">
            Connect With Us On
          </p>
          <div className="flex justify-center space-x-5 ">
            <FaInstagram size={20} color="#E4405F" />
            <FaFacebookF size={20} color="#3b5998" />
            <FaTwitter size={20} color="#1DA1F2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
