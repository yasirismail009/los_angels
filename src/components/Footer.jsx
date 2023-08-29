import React from "react";

export const Footer = () => {
  return (
    <footer className="flex justify-around items-center py-2 bg-[#414f6b] h-20 before:bg-red-500 before:opacity-70 before:absolute before:top-0 before:left-0  ">
      <figure className="hover:scale-105 cursor-pointer flex items-center justify-center gap-4 relative">
        <div className="w-10 border border-blue-950 rounded-full overflow-hidden">
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="inset-0 bg-[#677896] opacity-50"
          />
          <div className="absolute "></div>
        </div>
        <figcaption className="flex flex-col justify-center items-center w-full ">
          <h2 className="header-font font-sm text-[#677896] ">LOS ANGELES</h2>
          <span className="header-font font-sm text-[#677896]  tracking-wider ">
            MOUNTAINS
          </span>
        </figcaption>
      </figure>

      <div>
        <p className="font-Oswald font-black text-[#677896]">
          COPYRIGHT 2016. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};
