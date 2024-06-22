import React from "react";
import { Link } from "react-scroll";

export const Drop2 = () => {
  return (
    <div className="bg-white border-[2px] text-[12px] border-[#be4dec] flex items-center flex-col gap-2 p-3 rounded-[8px] absolute">
      <Link to="channels" offset={-65} className="cursor-pointer hover:text-black">
        Publisher/SSP
      </Link>
      <Link to="growths" offset={-65} className="cursor-pointer hover:text-black">
        Advertiser/DSP
      </Link>
    </div>
  );
};
