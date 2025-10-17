import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

export const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white h-[70px] flex sticky top-0 border-b-2 border-b-[#be4dec] z-50"
    >
      <div className="flex justify-between items-center w-[360px] md:w-[700px] lg:w-[950px] xl:w-[1250px] 2xl:w-[1440px] m-auto">
        <Link to="/">
          <img src="img/logo.svg" alt="logo" className="w-[150px]" />
        </Link>
        <div className="flex items-center gap-2">
          <a
            href="http://access.kolorowey.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block"
          >
            <button className="w-[100px] h-[44px] border-[#be4dec] border-2 rounded-[4px] hover:bg-[#be4dec] hover:scale-110 hover:text-white transition-all">
              LOG IN
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
