import React from "react";
import { motion } from "framer-motion";

const channels = [
  {
    id: 1,
    img: "img/display.jpeg",
    title: "Display",
  },
  {
    id: 2,
    img: "img/youtube.jpeg",
    title: "Video",
  },
  {
    id: 3,
    img: "img/ott.jpeg",
    title: "CTV/OTT",
  },
  {
    id: 4,
    img: "img/game.jpeg",
    title: "In-game",
  },
  {
    id: 5,
    img: "img/native.jpeg",
    title: "Native",
  },
  {
    id: 6,
    img: "img/contextual.jpeg",
    title: "Contextual",
  },
];

export const Channel = () => {
  return (
    <div id="channel" className="mt-24 m-auto w-3/4">
      <h1 className="text-center text-3xl">Channels and Formats</h1>
      <div className="grid grid-cols-3">
        {channels.map((c, i) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="mt-10"
          >
            <motion.div className="flex flex-col items-center gap-3">
              <img src={c.img} className="w-70 m-auto" />
              <h1 className="text-3xl text-[#be4dec]">
                {c.title}
              </h1>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
