import React from "react";
import Marquee from "react-fast-marquee";

const services = [
  {
    id: 1,
    img: "img/adsupport.png",
    title: "Ad Operations Support & Management",
  },
  {
    id: 2,
    img: "img/d2c.png",
    title: "Performance Marketing for D2C & B2B",
  },
  {
    id: 3,
    img: "img/accounting.png",
    title: "Account Based Marketing (ABM)",
  },
  {
    id: 4,
    img: "img/adsetc.png",
    title: "Google Ads, Meta ads, Linkedin Ads, E-marketplace ads, etc",
  },
  {
    id: 5,
    img: "img/development.png",
    title: "Website & App Development",
  },
  {
    id: 6,
    img: "img/uiux.png",
    title: "UI & UX Design",
  },
  {
    id: 7,
    img: "img/graphics.png",
    title: "Graphic & Motion Designing (2D & 3D)",
  },
  {
    id: 8,
    img: "img/seo.png",
    title: "Search Engine Optimization",
  },
  {
    id: 9,
    img: "img/consult.png",
    title: "Digital Consultation for Brand Management",
  },
  {
    id: 10,
    img: "img/b2b.png",
    title: "B2B Lead & Demand Generation",
  },
  {
    id: 11,
    img: "img/emailmarket.png",
    title: "Email Marketing",
  },
  {
    id: 12,
    img: "img/mediamanage.png",
    title: "Social Media Management",
  },
];

export const Service = () => {
  return (
    <div id="services">
      <h1 className="text-[30px] text-center my-20">Our Services</h1>
      <div>
        <Marquee
          pauseOnHover="true"
          gradient="true"
          gradientColor="#F7F7F7"
          gradientWidth={150}
        >
          <div className="flex">
            {services.map((s) => (
              <div className="w-[200px] md:w-[250px] cursor-pointer px-5">
                <div className="flex flex-col items-center gap-5">
                  <img src={s.img} className="w-10 h-10" />
                  <h1 className="text-[10px] md:text-[16px] text-center">
                    {s.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};
