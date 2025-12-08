"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-teal-500 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div
        className={`relative z-10 text-center container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate__animated animate__fadeInDown">
          Мы летим на Мальдивы!
        </h1>

        <p className="text-xl md:text-2xl mb-8 animate__animated animate__fadeInUp animate__delay-1s">
          10 дней приключений, солнца и кайфа
        </p>

        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg">
            Колу показать!
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
