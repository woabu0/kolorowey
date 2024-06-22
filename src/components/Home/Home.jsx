import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-between items-center w-[360px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1200px] m-auto mt-10 md:mt-20">
      <motion.div
        className="w-full lg:w-[80%] xl:w-[60%]"
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-[22px] md:text-[38px]">
          Transform Your{" "}
          <span className="text-[#be4dec]">
            Digital <br /> Inventories
          </span>{" "}
          Into a <br />
          Revenue Machine,
          <br /> Seamlessly!
        </h1>
        <Link to="contact" offset={-65}>
          <button className="mt-10 md:w-[180px] w-[150px] md:h-[44px] h-10 text-white bg-color hover:scale-[1.15] transition-all rounded-[2px]">
            REQUEST DEMO
          </button>
        </Link>
      </motion.div>
      <motion.div
        className="anime-div"
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="img/home.png"
          alt="home"
          className="w-[300px] md:w-[400px] lg:w-[500px]"
        />
      </motion.div>
    </div>
  );
};
