"use client";

import { useRef, useState, useEffect } from "react";

export function ProgramTravel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showIndicators, setShowIndicators] = useState(true);

  const cards = [
    {
      id: 1,
      title: "Сотни островов",
      img: "/trees.svg",
    },
    {
      id: 2,
      title: "Плавание со скатами и акулами",
      img: "/whale.svg",
    },
    {
      id: 3,
      title: "Ужин из улова на рыбалке",
      img: "/food.svg",
    },
    {
      id: 4,
      title: "Светящийся планктон",
      img: "/light.svg",
    },
    {
      id: 5,
      title: "Вечерние тусовки",
      img: "/disco.svg",
    },
    {
      id: 6,
      title: "Новые друзья",
      img: "/hearts.svg",
    },
    {
      id: 7,
      title: "SPA и релакс",
      img: "/fish.svg",
    },
  ];

  // Проверяем, нужны ли индикаторы (если карточек больше, чем помещается)
  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const totalWidth = cards.length * 427; // Ширина всех карточек
        setShowIndicators(totalWidth > containerWidth);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  // Обработчик начала перетаскивания
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.getBoundingClientRect().left);
    setScrollLeft(containerRef.current.scrollLeft);

    containerRef.current.style.cursor = "grabbing";
    containerRef.current.style.userSelect = "none";
  };

  // Обработчик перетаскивания
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    e.preventDefault();
    const x = e.pageX - containerRef.current.getBoundingClientRect().left;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Обработчик окончания перетаскивания
  const handleMouseUp = () => {
    setIsDragging(false);

    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
      containerRef.current.style.userSelect = "auto";
    }
  };

  return (
    <div className="relative py-10 px-4 md:px-8">
      <h1 className="text-[#212121] font-medium text-4xl md:text-5xl lg:text-[64px] mb-10 md:mb-14">
        Что ждет в поездке?
      </h1>

      {/* Контейнер с маской для частичной видимости */}
      <div className="relative overflow-hidden">
        {/* Маска для частичной видимости карточек */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          }}
        />

        {/* Скроллящийся контейнер */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-4 md:gap-6 pb-6 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="shrink-0 bg-[#21212108] rounded-4xl p-6 pb-0 md:p-8 md:pb-0 w-[280px] md:w-[427px] flex flex-col justify-between"
            >
              <p className="text-black text-2xl md:text-3xl font-medium mb-6">
                {card.title}
              </p>
                <img
                  src={card.img}
                  alt={card.title}
                  className="max-h-full max-w-full select-none"
                />
            </div>
          ))}
        </div>

        {/* Индикаторы скролла (только если есть переполнение) */}
        {showIndicators && (
          <div className="flex justify-center gap-2 mt-6">
            <div className="text-gray-400 text-sm">
              ← Перетащите для прокрутки →
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
