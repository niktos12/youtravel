"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      id="highlights"
      className="relative min-h-screen p-4 lg:p-5 mt-16 lg:mt-20 bg-[url(/bg-main.jpg)] bg-cover bg-center rounded-2xl lg:rounded-3xl flex flex-col justify-end overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

      <div
        className={`relative z-10 px-6 lg:px-16 py-8 lg:py-12 flex flex-col gap-4 lg:gap-6 rounded-2xl lg:rounded-4xl max-w-full lg:max-w-[744px] backdrop-blur-xl border border-white/20 ${
          isVisible
            ? "animate__animated animate__fadeInUp animate__delay-0.5s opacity-100"
            : "opacity-0"
        }`}
      >
        <h1 className="text-white text-4xl lg:text-6xl xl:text-[84px] font-bold leading-tight animate__animated animate__fadeIn animate__delay-1s">
          Мы летим на
          <br />
          <span className="text-[#3DA5D9] animate__animated animate__pulse animate__infinite animate__slower">
            Мальдивы!
          </span>
        </h1>
        <p className="text-white text-lg lg:text-2xl xl:text-3xl opacity-90 animate__animated animate__fadeIn animate__delay-1.5s">
          10 дней приключений, солнца и кайфа
        </p>
        <button className="mt-4 lg:mt-6 bg-gradient-to-r from-[#3DA5D9] to-cyan-500 text-white font-bold py-4 lg:py-6 px-8 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl animate__animated animate__bounceIn animate__delay-2s">
          Хочу поехать!
        </button>
      </div>

      <div className="absolute top-10 left-10 w-8 h-8 bg-blue-400/20 rounded-full animate__animated animate__pulse animate__infinite animate__slow"></div>
      <div className="absolute top-20 right-20 w-12 h-12 bg-cyan-400/20 rounded-full animate__animated animate__pulse animate__infinite animate__slower"></div>
      <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-white/10 rounded-full animate__animated animate__pulse animate__infinite"></div>
    </div>
  );
}
