import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const growths = [
  {
    id: 1,
    img: "img/google.jpeg",
    title: "Google Marketing Platform (GMP) Reseller",
    details:
      "With GMP Reseller, streamline collaboration, optimize campaigns, and maximize Google Marketing Platform's potential for superior results.",
  },
  {
    id: 2,
    img: "img/play.jpeg",
    title: "Display & Video 360",
    details:
      "Discover the Power of Programmatic Advertising with Display & Video 360. Access premium inventory, leverage advanced targeting, and automate bidding for unparalleled campaign success.",
  },
  {
    id: 3,
    img: "img/infinity.jpeg",
    title: "Campaign Manager 360",
    details:
      "Boost Your Marketing Impact with Campaign Manager 360. Streamline your creative process, leverage advanced targeting, and enjoy comprehensive integrations for enhanced campaign performance.",
  },
  {
    id: 4,
    img: "img/xandr.png",
    title: "Microsoft Advertiser Platform (Xandr)",
    details:
      "Get empowered with Xandr, the advanced advertising technology platform by Microsoft, offering advertisers comprehensive tools and insights to effectively reach their target audience across various channels, including display, video, and mobile.",
  },
  {
    id: 5,
    img: "img/dsp.png",
    title: "Amazon DSP",
    details:
      "Through Amazon DSP (Demand-Side Platform), we provide advertisers with access to Amazon's extensive audience data and ad inventory, enabling them to create targeted display, video, and audio campaigns across Amazon sites, apps, and third-party exchanges.",
  },
];

export const Growth = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 1 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="w-[360px] md:w-[700px] lg:w-[950px] xl:w-[1100px] 2xl:w-[1200px] mt-24 m-auto">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-3xl"
      >
        Empowering Advertiser Growth
      </motion.h1>
      <div className="md:flex md:flex-row relative mt-10">
        <div className="hidden md:block md:w-1/2 relative">
          <div className="sticky top-1/3">
            <motion.img
              key={growths[activeIndex].id}
              src={growths[activeIndex].img}
              alt={growths[activeIndex].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-1/2"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-24">
          {growths.map((g, index) => (
            <div
              key={g.id}
              ref={(el) => (refs.current[index] = el)}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-3xl font-semibold"
              >
                {g.title}
              </motion.h2>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-3 text-gray-700"
              >
                {g.details}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
