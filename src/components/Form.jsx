import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Form = () => {
  return (
    <div className="m-2 w-full md:w-[55%] flex justify-center text-white">
      <div className="space-y-4 xl:space-y-5 justify-center flex-col text-center w-[90%] md:w-[80%] mt-[10%] md:mt-[6%]">
        <h1 className="text-5xl xl:text-6xl font-medium">HAVE ANY QUERY ?</h1>

        {/* email form */}
        <div className="space-y-5 justify-center ">
          <input
            type="text"
            placeholder="Full Name"
            className="border-black border-2 rounded w-full p-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-black border-2 rounded w-full p-2"
          />
          <textarea
            placeholder="Message"
            className="border-black border-2 rounded w-full p-2"
            rows="5"
          />

          <button className="border-white border-2 rounded px-[6%] py-[0.5%] text-xl xl:text-2xl font-semibold">
            SEND
          </button>
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
