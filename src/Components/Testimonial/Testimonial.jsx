import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const slideData = [
  {
    id: 1,
    img: "https://picsum.photos/id/237/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo voluptatem in architecto cupiditate maiores. Blanditiis non deserunt repellendus a!",
    name: "Sakib Khan",
  },
  {
    id: 2,
    img: "https://picsum.photos/seed/picsum/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo voluptatem in architecto cupiditate maiores. Blanditiis non deserunt repellendus a!",
    name: "Rakib Khan",
  },
  {
    id: 3,
    img: "https://picsum.photos/200/300?grayscale",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo voluptatem in architecto cupiditate maiores. Blanditiis non deserunt repellendus a!",
    name: "Hasib Khan",
  },
  {
    id: 4,
    img: "https://picsum.photos/seed/picsum/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo voluptatem in architecto cupiditate maiores. Blanditiis non deserunt repellendus a!",
    name: "Habib Khan",
  },
  {
    id: 5,
    img: "https://picsum.photos/200/300.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo voluptatem in architecto cupiditate maiores. Blanditiis non deserunt repellendus a!",
    name: "Rehan Khan",
  },
];

const Testimonial = () => {
  return (
    <div>
      <div>
        {/* text section  */}
        <div 
        data-aos="slide-up"
        className="text-center">
          <p className="bg-clip-text bg-gradient-to-b from-primary to-secondary text-sm text-transparent font-semibold">
            What our customer says
          </p>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            iure, corporis
          </p>
        </div>
        {/* slide section  */}
        <div 
        data-aos="zoom-out"
        className="w-full max-w-[550px] mx-auto py-20">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {slideData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 bg-primary/10 dark:bg-gray-800 relative rounded-xl mb-15">
                  <div>
                    <img
                      src={item.img}
                      alt=""
                      className="w-20 rounded-full h-20 object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{item.description} </p>
                  <h1 className="text-xl font-bold text-black/80 dark:text-white">
                    {item.name}{" "}
                  </h1>
                  <div className="text-9xl text-gray-500 opacity-60 font-serif absolute top-0 right-0 -translate-y-13">
                    ,,
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
