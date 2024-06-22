import React from "react";
import channel from "./channelsData.json";
import Chan from "./Channel";
import { motion } from "framer-motion";

export const Channels = () => {
  return (
    <div id="channels" className="w-[360px] md:w-[700px] lg:w-[950px] xl:w-[1100px] 2xl:w-[1200px] m-auto mt-40">
      <h1 className="text-center text-[30px]">Channels and Formats</h1>
      <div className="grid grid-cols-3">
        {channel.map((c, i) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="mt-20"
          >
            <Chan img={c.img} title={c.title} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
