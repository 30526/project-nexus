import React from "react";

const ImageGradient = ({ children }) => {
  return (
    <>
      <div className=" absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-10"></div>

      <div className="md:bottom-70 absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20">
        {children}
      </div>
    </>
  );
};

export default ImageGradient;
