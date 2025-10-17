import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    img: "img/prof1.svg",
    name: "Anita",
    testimonial:
      "Kolorowey transformed our product's UI/UX into an intuitive and engaging experience. Their creativity, attention to detail, and user-centric approach elevated our design, enhancing usability and driving user engagement. Highly recommended!",
  },
  {
    id: 2,
    img: "img/prof2.svg",
    name: "Joseph",
    testimonial:
      "Kolorowey transformed our website into a user-friendly masterpiece! The team's expertise and attention to detail are unmatched.",
  },
  {
    id: 3,
    img: "img/prof3.svg",
    name: "Angelina",
    testimonial:
      "Our app has never looked better! Kolorowey's development team delivered a sleek and functional app that exceeded our expectations.",
  },
  {
    id: 4,
    img: "img/prof4.svg",
    name: "Song Jong",
    testimonial:
      "Thanks to Kolorowey's SEO services, our website's visibility has skyrocketed! We've seen a significant increase in organic traffic and rankings.",
  },
  {
    id: 5,
    img: "img/prof5.svg",
    name: "Lucy",
    testimonial:
      "Kolorowey's motion design brought our brand to life! The stunning animations and graphics have captivated our audience and strengthened our brand identity.",
  },
  {
    id: 6,
    img: "img/prof6.svg",
    name: "Ashish",
    testimonial:
      "Kolorowey's email marketing strategies have boosted our engagement and conversions! Their creative and personalized campaigns resonate with our audience.",
  },
  {
    id: 7,
    img: "img/prof7.svg",
    name: "Yun Hee",
    testimonial:
      "Kolorowey's account-based marketing approach has helped us target and engage our ideal customers effectively. Their tailored strategies have driven impressive results.",
  },
  {
    id: 8,
    img: "img/prof8.svg",
    name: "Chris",
    testimonial:
      "With Kolorowey handling our ad operations, we've seen improved ad performance and ROI. Their expertise and proactive management have been invaluable to our campaigns.",
  },
];

export const Testimonial = () => {
  return (
    <div className="w-[360px] md:w-[700px] lg:w-[950px] xl:w-[1200px] 2xl:w-[1480px] m-auto">
      <h1 className="text-center text-[30px] my-16">Testimonials</h1>
      <div>
        <Swiper
          className="-z-1"
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
          }}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {testimonials.map((t) => (
            <SwiperSlide>
              <div className="flex items-center flex-col gap-3 text-center w-[360px] md:w-[345px] lg:w-[288px] h-[350px] rounded-[20px] border-[.5px] border-[#c4c4c4] p-10 md:p-5 hover:border-[#be4dec] cursor-pointer">
                <img src={t.img} className="w-[80px] h-[80px] rounded-[50px]" />
                <h1 className="text-[22px]">{t.name}</h1>
                <p className="text-[14px]">{t.testimonial}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center justify-center gap-4 mt-10">
        <img
          src="img/arrow.png"
          alt="arrow"
          className="rotate-180 prev w-[24px] h-[24px] cursor-pointer"
        />
        <img
          src="img/arrow.png"
          alt="arrow"
          className="next w-[24px] h-[24px] cursor-pointer"
        />
      </div>
    </div>
  );
};
