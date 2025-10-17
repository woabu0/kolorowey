import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <div className="bg-color text-white mt-16">
      <div className="py-10 w-[355px] md:w-[700px] lg:w-[950px] xl:w-[1100px] 2xl:w-[1200px] m-auto">
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-start">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col lg:gap-14"
          >
            <div>
              <img src="img/textlogo.svg" alt="logo" className="w-[200px]" />
              <p className="text-[12px] w-[280px] my-3">
                Kolorowey transforms the complexities of AdTech with innovative
                solutions for publishers, seamlessly boosting ad impressions,
                CPMs, and revenue growth.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61554003327556"
                target="_blank"
                className="w-[60px] h-[60px] bg-white rounded-[50px] flex items-center justify-center cursor-pointer"
              >
                <div className="w-[50px] h-[50px] rounded-[50px] border-2 border-[#be4dec] bg-white flex items-center justify-center hover:border-none transition-all">
                  <img
                    src="img/facebook.png"
                    alt="facebook"
                    className="w-[24px]"
                  />
                </div>
              </a>
              <a
                href="https://www.instagram.com/koloroweymedia/"
                target="_blank"
                className="w-[60px] h-[60px] bg-white rounded-[50px] flex items-center justify-center cursor-pointer"
              >
                <div className="w-[50px] h-[50px] rounded-[50px] border-2 border-[#be4dec] bg-white flex items-center justify-center hover:border-none transition-all">
                  <img
                    src="img/instagram.png"
                    alt="instagram"
                    className="w-[24px]"
                  />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/koloroweymedia/"
                target="_blank"
                className="w-[60px] h-[60px] bg-white rounded-[50px] flex items-center justify-center cursor-pointer"
              >
                <div className="w-[50px] h-[50px] rounded-[50px] border-2 border-[#be4dec] bg-white flex items-center justify-center hover:border-none transition-all">
                  <img
                    src="img/linkedin.png"
                    alt="linkedin"
                    className="w-[24px]"
                  />
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <h1 className="text-[22px]">
              <u>Contact</u>
            </h1>
            <div className="flex flex-col gap-2">
              <div>
                <h4>General Inquiries:</h4>
                <h4>partnerships@kolorowey.co.</h4>
              </div>
              <div>
                <h4>Sales Inquiries:</h4>
                <h4>sales@kolorowey.co</h4>
              </div>
              <div>
                <h4>Phone No.</h4>
                <h4>+91 9911515919</h4>
              </div>
              <div>
                <h4>Location:</h4>
                <h4>New Delhi, India</h4>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-10 w-full h-px bg-white"
        ></motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-center">
            Copyright © {new Date().getFullYear()} Kolorowey Media Ltd. All
            rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
