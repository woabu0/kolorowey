import React from "react";
import growths from "./growthData.json";
import Growth from "./Growth";
import { motion } from "framer-motion";

export const Growths = () => {
  return (
    <div id="growths" className="w-[360px] md:w-[700px] lg:w-[950px] xl:w-[1100px] 2xl:w-[1200px] mt-40 m-auto">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-[30px]"
      >
        Empowering Advertiser Growth
      </motion.h1>
      <div className="mt-10">
        {growths.map((g) => (
          <div>
            <Growth
              even={g.id}
              img={g.img}
              title={g.title}
              details={g.details}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
