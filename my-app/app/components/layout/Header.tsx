"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }

        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const maxScroll = documentHeight - windowHeight;
        const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
        setScrollProgress(progress);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  const scrollToFooter = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };
  const navLinks = [
    { href: "#highlights", label: "Поездка" },
    { href: "#program", label: "Формат" },
    { href: "#pricing", label: "Программа" },
    { href: "#price", label: "Стоимость" },
    { href: "#gallery", label: "Галерея" },
    { href: "#reviews", label: "Отзывы" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-[#f6f6f6]"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div
            className={`transition-all duration-500 ease-out rounded-full hover:scale-105 hover:shadow-lg ${
              isScrolled ? "bg-white px-4 py-2" : "bg-white px-6 py-3"
            }`}
          >
            <img
              onClick={() => scrollTo(0, 0)}
              src={"/logo.svg"}
              className="h-6 lg:h-8 transition-all duration-300 hover:scale-110"
              alt="Логотип"
            />
          </div>

          <nav
            className={`hidden md:flex space-x-4 transition-all duration-500 ease-out rounded-full ${
              isScrolled
                ? "bg-white/80 backdrop-blur-sm px-4 py-2"
                : "bg-white px-6 py-3"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#2121217A] hover:text-[#3DA5D9] transition-all duration-300 ease-out hover:scale-105 hover:font-medium px-3 py-1 rounded-full hover:bg-blue-50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={scrollToFooter}
            className={`hidden md:flex items-center gap-2 transition-all duration-500 ease-out font-semibold rounded-full group cursor-pointer ${
              isScrolled
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 shadow-md"
                : "text-[#3DA5D9] px-6 py-3 bg-white"
            } hover:scale-105 hover:shadow-xl`}
          >
            <Phone className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <span className="transition-all duration-300 group-hover:tracking-wider">
              Связаться
            </span>
          </button>

          <button
            className="md:hidden p-2 transition-all duration-300 hover:scale-110 hover:bg-white/50 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 transition-all duration-500 rotate-180" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 transition-all duration-500" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg transition-all duration-500 ease-out">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-[#3DA5D9] py-3 px-4 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={scrollToFooter}
              className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full py-3 mt-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Связаться
            </button>
          </nav>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 transition-all duration-500 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
