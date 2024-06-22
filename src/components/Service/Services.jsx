import React from "react";
import Marquee from "react-fast-marquee";
import services from "./serviceData.json";
import Service from "./Service";

export const Services = () => {
  return (
    <div id="services">
      <h1 className="text-[30px] text-center my-20">Our Services</h1>
      <div>
        <Marquee pauseOnHover="true" gradient="true" gradientColor="#F7F7F7" gradientWidth={150}>
          <div className="flex">
            {services.map((s) => (
              <div className="w-[200px] md:w-[250px] cursor-pointer px-5">
                <Service img={s.img} title={s.title} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};
