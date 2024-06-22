import React from "react";
import { Link } from "react-scroll";

export const Serv = () => {
  return (
    <Link to="services" offset={-65} className="cursor-pointer hover:text-[#be4dec] hover:scale-[1.15] transition-all">
      Services
    </Link>
  );
};
