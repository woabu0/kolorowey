import { motion } from "framer-motion";

function Channel(props) {
  return (
    <motion.div className="flex flex-col items-center gap-5">
      <div className="hover-div cursor-pointer">
        <img
          src={props.img}
          className="w-[100px] md:w-[250px] h-[100px] md:h-[250px]"
        />
      </div>
      <h1 className="text-[22px] md:text-[30px] text-[#be4dec]">
        {props.title}
      </h1>
    </motion.div>
  );
}
export default Channel;
