"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //#2596be bg-[#E8E8E8]
  return (
    <header className="bg-[#f6f6f6] shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
            {/* \/ need png logo */}
          <div className="text-2xl font-bold text-blue-600">YouTravel</div> 

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 bg-white rounded-full px-6 py-3">
            <a
              href="#highlights"
              className="text-[#2121217A] transition-colors"
            >
              Поездка
            </a>
            <a href="#program" className="text-[#2121217A] transition-colors">
              Формат
            </a>
            <a href="#pricing" className="text-[#2121217A] transition-colors">
              Программа
            </a>
            <a href="#reviews" className="text-[#2121217A] transition-colors">
              Стоимость
            </a>
            <a href="#reviews" className="text-[#2121217A] transition-colors">
              Галерея
            </a>
            <a href="#reviews" className="text-[#2121217A] transition-colors">
              Отзывы
            </a>
          </nav>
          <button className="md:flex hidden text-[#3DA5D9] font-semibold rounded-full px-5 py-3 bg-white">
            Связаться
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-gray-600"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#highlights" className="block hover:text-blue-500">
              Что ждет
            </a>
            <a href="#program" className="block hover:text-blue-500">
              Программа
            </a>
            <a href="#pricing" className="block hover:text-blue-500">
              Стоимость
            </a>
            <a href="#reviews" className="block hover:text-blue-500">
              Отзывы
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
