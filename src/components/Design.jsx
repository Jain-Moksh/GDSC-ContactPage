import React from "react";

const Design = () => {
  return (
    <div className="w-[40%] md:flex justify-center items-center hidden text-white">
      {" "}
      {/* Full screen height, centered content */}
      <div className="w-[90%]  text-center">
        {" "}
        {/* Centered text with responsive width */}
        <h1 className="md:text-4xl xl:text-5xl  lg:text-5xl font-semibold mb-4">
          CONTACT US
        </h1>
        <p className="text-xl xl:text-3xl ">
          "Have questions or ideas? We’re just a message away! Let’s connect and
          make something amazing happen together."
        </p>
      </div>
    </div>
  );
};

export default Design;
