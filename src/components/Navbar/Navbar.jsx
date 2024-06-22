import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Drop1 } from "./Drop1";
import { Drop2 } from "./Drop2";
import { Serv } from "./Serv";
import stackData from "../Stack/stackData.json";
import growthData from "../Growth/growthData.json";

export const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const applyClass = () => {
    setIsClicked(true);
    console.log("Clicked");
  };

  const [isVisible1, setIsVisible1] = useState(false);

  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };

  const [isVisible2, setIsVisible2] = useState(false);

  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };

  const [drop1, setDrop1] = useState(false);

  const mEnter1 = () => {
    setDrop1(true);
  };

  const mLeave1 = () => {
    setDrop1(false);
  };

  const [drop2, setDrop2] = useState(false);

  const mEnter2 = () => {
    setDrop2(true);
  };

  const mLeave2 = () => {
    setDrop2(false);
  };

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
        <div className="lg:flex items-center gap-4 text-[18px] hidden">
          <div
            className="cursor-pointer hover:text-[#be4dec] hover:scale-[1.15] transition-all"
            onMouseEnter={mEnter1}
            onMouseLeave={mLeave1}
          >
            Products
            {drop1 && <Drop1 />}
          </div>
          <div className="w-[2px] h-[20px] bg-black bg-opacity-50"></div>
          <div
            className="cursor-pointer hover:text-[#be4dec] hover:scale-[1.15] transition-all"
            onMouseEnter={mEnter2}
            onMouseLeave={mLeave2}
          >
            Solutions
            {drop2 && <Drop2 />}
          </div>
          <div className="w-[2px] h-[20px] bg-black bg-opacity-50"></div>
          <Serv />
          <div className="w-[2px] h-[20px] bg-black bg-opacity-50"></div>
          <div className="cursor-pointer hover:text-[#be4dec] hover:scale-[1.15] transition-all">
            Blog
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/loginpage" className="hidden lg:block">
            <button className="w-[100px] h-[44px] border-[#be4dec] border-[2px] rounded-[4px] hover:bg-[#be4dec] hover:scale-110 hover:text-white transition-all">
              LOG IN
            </button>
          </Link>
          <div onClick={applyClass} className="lg:hidden flex flex-col gap-1">
            <div className="w-[30px] h-[5px] bg-[#be4dec] rounded-[8px]"></div>
            <div className="w-[30px] h-[5px] bg-[#be4dec] rounded-[8px]"></div>
            <div className="w-[30px] h-[5px] bg-[#be4dec] rounded-[8px]"></div>
          </div>
        </div>
      </div>
      <div className={isClicked ? "open" : "close"}>
        <motion.div className="text-[14px] fixed bg-[#fff] w-full h-full lg:hidden">
          <div>
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              onClick={() => {
                setIsClicked(false);
              }}
              className="mt-8 ml-[90%] md:ml-[91.5%]"
            >
              <div>
                <div className="w-[30px] h-[5px] bg-[#be4dec] rounded-[8px] rotate-45 absolute"></div>
                <div className="w-[30px] h-[5px] bg-[#be4dec] rounded-[8px] -rotate-45 absolute"></div>
              </div>
            </motion.div>
            <div className="p-3">
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <strong onClick={toggleVisibility1}>Products</strong>
                {isVisible1 && (
                  <div className="ml-6 mt-3 flex flex-col gap-2">
                    {stackData.map((s) => (
                      <div>{s.title}</div>
                    ))}
                  </div>
                )}
              </motion.div>
              <div className="mt-3 h-[2px] w-full bg-[#be4dec]"></div>
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-3"
              >
                <strong onClick={toggleVisibility2}>Solutions</strong>
                {isVisible2 && (
                  <div className="ml-6 mt-3 flex flex-col gap-2">
                    {growthData.map((g) => (
                      <div>{g.title}</div>
                    ))}
                  </div>
                )}
              </motion.div>
              <div className="mt-3 h-[2px] w-full bg-[#be4dec]"></div>
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-3"
              >
                <strong>Services</strong>
              </motion.div>
              <div className="mt-3 h-[2px] w-full bg-[#be4dec]"></div>
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-3"
              >
                <strong>Blog</strong>
              </motion.div>
              <div className="mt-3 h-[2px] w-full bg-[#be4dec]"></div>
              <div className="flex items-center justify-center text-[18px] mt-3 w-[100px] h-[44px] border-[#be4dec] border-[2px] rounded-[4px] hover:bg-[#be4dec] hover:scale-110 hover:text-white transition-all">
                <Link to="/loginpage">LOG IN</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
