import React from "react";
import { Link } from "react-scroll";
import growthData from "../Growth/growthData.json";
import { motion } from "framer-motion";

export const Links2 = () => {
  return (
    <div className="flex flex-col gap-2">
      {growthData.map((g) => (
        <motion.div whileHover={{ x: -1, y: -1, scale: 1.1 }}>
          <Link
            to={g.id}
            offset={-65}
            className="cursor-pointer text-opacity-[50%]"
          >
            {g.title}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
