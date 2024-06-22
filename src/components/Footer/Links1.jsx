import React from "react";
import { Link } from "react-scroll";
import stackData from "../Stack/stackData.json";
import { motion } from "framer-motion";

export const Links1 = () => {
  return (
    <div className="flex flex-col gap-2">
      {stackData.map((s) => (
        <motion.div whileHover={{ x: -1, y: -1, scale: 1.1 }}>
          <Link
            to={s.id}
            offset={-65}
            className="cursor-pointer text-opacity-[50%]"
          >
            {s.title}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
