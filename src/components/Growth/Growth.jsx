import { motion } from "framer-motion";

function Growth(props) {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-20 mt-16 md:mt-10"
      id={props.even}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }} className="w-[300px] md:w-[500px] hover-div"
      >
        <img src={props.img} />
      </motion.div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col items-center gap-5"
      >
        <h1 className="text-[22px] md:text-[30px] text-color text-center">
          {props.title}
        </h1>
        <p className="text-center">{props.details}</p>
      </motion.div>
    </div>
  );
}
export default Growth;
