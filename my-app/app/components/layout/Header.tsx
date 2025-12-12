"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Sticky эффект при прокрутке
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-300 fixed w-full top-0 z-50 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-[#f6f6f6]"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div
            className={`transition-all duration-300 rounded-full ${
              isScrolled ? "bg-white px-6 py-3" : "bg-white px-8 py-5"
            }`}
          >
            <img src={"/logo.svg"} className="h-8" />
          </div>

          <nav
            className={`hidden md:flex space-x-8 transition-all duration-300 rounded-full ${
              isScrolled
                ? "bg-white/80 backdrop-blur-sm px-6 py-3"
                : "bg-white px-8 py-5"
            }`}
          >
            <a
              href="#highlights"
              className="text-[#2121217A] hover:text-[#3DA5D9] transition-colors"
            >
              Поездка
            </a>
            <a
              href="#program"
              className="text-[#2121217A] hover:text-[#3DA5D9] transition-colors"
            >
              Формат
            </a>
            <a
              href="#pricing"
              className="text-[#2121217A] hover:text-[#3DA5D9] transition-colors"
            >
              Программа
            </a>
            <a
              href="#reviews"
              className="text-[#2121217A] hover:text-[#3DA5D9] transition-colors"
            >
              Стоимость
            </a>
            <a
              href="#reviews"
              className="text-[#2121217A] hover:text-[#3DA5D9] transition-colors"
            >
              Галерея
            </a>
            <a
              href="#reviews"
              className="text-[#2121217A] hover:text-[#3DA5D9] transition-colors"
            >
              Отзывы
            </a>
          </nav>
          <button
            className={`hidden md:flex transition-all duration-300 font-semibold rounded-full ${
              isScrolled
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 shadow-md hover:shadow-lg"
                : "text-[#3DA5D9] px-8 py-5 bg-white hover:bg-blue-50"
            }`}
          >
            Связаться
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 pb-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg animate__animated animate__fadeInDown">
            <a
              href="#highlights"
              className="block text-gray-700 hover:text-[#3DA5D9] py-2 px-3 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Поездка
            </a>
            <a
              href="#program"
              className="block text-gray-700 hover:text-[#3DA5D9] py-2 px-3 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Формат
            </a>
            <a
              href="#pricing"
              className="block text-gray-700 hover:text-[#3DA5D9] py-2 px-3 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Программа
            </a>
            <a
              href="#reviews"
              className="block text-gray-700 hover:text-[#3DA5D9] py-2 px-3 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Стоимость
            </a>
            <a
              href="#reviews"
              className="block text-gray-700 hover:text-[#3DA5D9] py-2 px-3 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Галерея
            </a>
            <a
              href="#reviews"
              className="block text-gray-700 hover:text-[#3DA5D9] py-2 px-3 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full py-3 mt-2 hover:shadow-lg transition-shadow">
              Связаться
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
