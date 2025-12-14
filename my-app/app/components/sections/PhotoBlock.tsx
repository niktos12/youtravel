"use client";

import { useState } from "react";

export function PhotoBlock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const photos = [
    {
      image: "/photo1.png",
      text: "Живём на острове с уютными пляжами, кафе, магазинами и водными развлечениями",
    },
    {
      image: "/photo2.jpg",
      text: "Каждый день — новые острова, снорклинг, катание, приключения",
    },
    {
      image: "/photo3.jpg",
      text: "А вечерами — банька, посиделки и атмосфера YouTravel",
    },
  ];

  return (
    <div id="gallery" className="flex flex-col md:flex-row gap-4 lg:gap-5 p-4 lg:p-5 m-2 lg:m-5 animate__animated animate__fadeIn">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`relative w-full md:w-1/3 h-[400px] lg:h-[500px] xl:h-[729px] rounded-3xl lg:rounded-4xl overflow-hidden group cursor-pointer transition-all duration-700 ease-out ${
            hoveredIndex === index
              ? "md:flex-grow md:scale-[1.02] shadow-2xl"
              : ""
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            backgroundImage: `url('${photo.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60"></div>

          <div
            className={`absolute bottom-0 left-0 right-0 p-6 lg:p-8 xl:p-12 transform transition-all duration-700 ease-out ${
              hoveredIndex === index
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-90"
            }`}
          >
            <p className="text-white text-xl lg:text-2xl xl:text-3xl font-medium leading-tight transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 animate__animated animate__fadeInUp">
              {photo.text}
            </p>
          </div>

          <div className="absolute top-6 right-6 w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-180 animate__animated animate__flipInY">
            <span className="text-white text-lg font-bold">+</span>
          </div>
        </div>
      ))}
    </div>
  );
}
