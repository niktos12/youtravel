"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function ProgramTravel() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const cards = [
    { id: 1, title: "Сотни островов", img: "/trees.svg" },
    { id: 2, title: "Плавание со скатами и акулами", img: "/whale.svg" },
    { id: 3, title: "Ужин из улова на рыбалке", img: "/food.svg" },
    { id: 4, title: "Светящийся планктон", img: "/light.svg" },
    { id: 5, title: "Вечерние тусовки", img: "/disco.svg" },
    { id: 6, title: "Новые друзья", img: "/hearts.svg" },
    { id: 7, title: "SPA и релакс", img: "/fish.svg" },
  ];

  return (
    <div
      id="program"
      className={`relative py-8 lg:py-12 px-4 ${
        isVisible ? "animate__animated animate__fadeIn" : "opacity-0"
      }`}
    >
      <div className="container mx-auto">
        <h1 className="text-[#212121] font-medium text-3xl lg:text-5xl xl:text-[64px] mb-8 lg:mb-14 text-center lg:text-left animate__animated animate__slideInDown">
          Что ждет в поездке?
        </h1>

        <div className="relative animate__animated animate__fadeInUp">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.2, spaceBetween: 20 },
              1024: { slidesPerView: 3.2, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              type: "bullets",
              dynamicBullets: false,
              dynamicMainBullets: 0,
            }}
            grabCursor={true}
            className="pb-12"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={card.id}>
                <div
                  className="bg-[#21212108] rounded-3xl lg:rounded-4xl p-6 lg:p-8 lg:pb-0 lg:pr-0 pb-0 pr-0 flex flex-col min-h-[312px] h-full hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-black text-lg lg:text-2xl font-medium mb-4 lg:mb-6">
                    {card.title}
                  </p>
                  <div className="flex-1 flex items-end justify-end">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-32 h-32 lg:w-48 lg:h-48 hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="hidden lg:block">
            <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate__animated animate__bounceInLeft">
              <svg
                className="w-6 h-6 mx-auto text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate__animated animate__bounceInRight">
              <svg
                className="w-6 h-6 mx-auto text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="swiper-pagination-container mt-8">
            <div className="swiper-pagination flex justify-center gap-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
