import { motion } from "framer-motion";

function Stack2(props) {
  return (
    <div className="mt-20 flex flex-col gap-3">
      <motion.h1
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[22px] md:text-[30px] text-center md:text-end text-color"
      >
        {props.title}
      </motion.h1>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center flex-col-reverse md:flex-row gap-10 mt-5 md:mt-3"
      >
        <div className="w-[300px] md:w-[500px] hover-div">
          <img src={props.img} />
        </div>
        <div className="text-[12px] md:text-[16px] flex flex-col gap-2">
          <p>
            <strong>{props.heading1}</strong>
            {props.details1}
          </p>
          <p>
            <strong>{props.heading2}</strong>
            {props.details2}
          </p>
          <p>
            <strong>{props.heading3}</strong>
            {props.details3}
          </p>
          <p>
            <strong>{props.heading4}</strong>
            {props.details4}
          </p>
          <p>
            <strong>{props.heading5}</strong>
            {props.details5}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
export default Stack2;
