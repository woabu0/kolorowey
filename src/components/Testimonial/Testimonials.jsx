import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import testimonials from "./testimonialData.json";
import Testimonial from "./Testimonial";

export const Testimonials = () => {
  return (
    <div className="w-[360px] md:w-[700px] lg:w-[950px] xl:w-[1200px] 2xl:w-[1480px] m-auto">
      <h1 className="text-center text-[30px] my-16">Testimonials</h1>
      <div>
        <Swiper
          className="-z-[1]"
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 5,
            },
          }}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {testimonials.map((t) => (
            <SwiperSlide>
              <Testimonial
                img={t.img}
                name={t.name}
                testimonial={t.testimonial}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center justify-center gap-4 mt-10">
        <img src="img/arrow.png" alt="arrow" className="rotate-180 prev w-[24px] h-[24px] cursor-pointer" />
        <img src="img/arrow.png" alt="arrow" className="next w-[24px] h-[24px] cursor-pointer" />
      </div>
    </div>
  );
};
