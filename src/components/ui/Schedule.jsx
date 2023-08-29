import React from "react";

export const Schedule = ({data}) => {
  
  return (
    <>
    <div className="bg-white mx-2 sm:ml-60 my-20 opacity-80 w-96 h-60 px-8 lg:block md:block sm:hidden hidden">
      <h4 className="font-Oswald font-black text-4xl text-[#414f6b]">
         {data.title}
      </h4>
      <div className="grid grid-rows-8 grid-cols-2 pt-8 w-full">
        {data?.dates.map((dates, index) => (
          <span  key={index} className="py-1">{dates}</span>
        ))}
      </div>
    </div>

    <div className="bg-white lg:mx-2  md:mx-2 sm:mx-0 mx-0 sm:ml-60 my-0 opacity-80 w-96 h-60 px-8 lg:hidden md:hidden sm:block block">
      <h4 className="font-Oswald font-black text-4xl text-[#414f6b]">
         {data.title}
      </h4>
      <div className="grid grid-rows-8 lg:py-20 md:py-20 sm:py-4 py-4 grid-cols-2 pt-8 w-full">
        {data?.dates.map((dates, index) => (
          <span  key={index} className="py-1">{dates}</span>
        ))}
      </div>
    </div>
    </>
  );
};
