import React from "react";
import { Link } from "react-scroll";
import stackData from '../Stack/stackData.json'

export const Drop1 = () => {
  return (
    <div className="w-[200px] text-center bg-white border-[2px] text-[12px] border-[#be4dec] flex items-center flex-col gap-2 p-3 rounded-[8px] absolute">
      {stackData.map((s) => (
        <Link
          to={s.id}
          offset={-65}
          className="cursor-pointer hover:text-black"
        >
          {s.title}
        </Link>
      ))}
    </div>
  );
};
