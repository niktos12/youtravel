"use client";

import { useEffect, useState } from "react";
import { Check, X as XIcon, Calendar, Tag, Zap } from "lucide-react";

export function TravelPrice() {
  const [isVisible, setIsVisible] = useState(false);
  const [timerDays, setTimerDays] = useState(15);
  const [timerHours, setTimerHours] = useState(23);
  const [timerMinutes, setTimerMinutes] = useState(59);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);

    const countdown = setInterval(() => {
      setTimerMinutes((prev) => {
        if (prev === 0) {
          setTimerHours((prev) => {
            if (prev === 0) {
              setTimerDays((prev) => prev - 1);
              return 23;
            }
            return prev - 1;
          });
          return 59;
        }
        return prev - 1;
      });
    }, 60000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
    };
  }, []);

  const includedItems = [
    "Проживание в отеле у океана",
    "Завтраки",
    "Все трансферы",
    "Страховка",
    "Сопровождение организатора",
  ];

  const excludedItems = [
    { text: "Перелет", price: "~ 900 €" },
    { text: "Доп. экскурсии", price: "400 - 700 $" },
    { text: "Питание", price: "200 - 250 $" },
  ];

  return (
    <div
    id="price"
      className={`flex flex-col lg:flex-row gap-4 lg:gap-5 p-4 lg:p-5 lg:py-10 w-full ${
        isVisible ? "animate__animated animate__fadeIn" : "opacity-0"
      }`}
    >
      <div className="bg-white rounded-3xl lg:rounded-4xl p-6 lg:p-8 lg:px-16 lg:py-[60px] flex flex-col gap-8 lg:gap-[90px] w-full lg:w-[613px] shadow-xl hover:shadow-2xl transition-all duration-500 ease-out hover:scale-[1.01] animate__animated animate__slideInLeft">
        <div>
          <div className="flex items-center gap-3 mb-2 animate__animated animate__rotateIn">
            <Tag className="w-5 h-5 text-blue-500 transition-transform duration-300 hover:scale-110 animate__animated animate__swing animate__infinite" />
            <p className="text-[#212121] text-xl lg:text-2xl font-medium">
              Стоимость
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-4 animate__animated animate__bounceIn">
              <h1 className="text-4xl lg:text-6xl xl:text-[64px] font-bold text-black transition-all duration-500 hover:text-blue-600">
                1499 $
              </h1>
              <div className="relative">
                <span className="text-xl lg:text-2xl text-gray-400 line-through transition-opacity duration-300 hover:opacity-70">
                  1999 $
                </span>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate__animated animate__heartBeat animate__infinite">
                  -25%
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 lg:p-6 border border-green-100 transition-all duration-500 hover:shadow-lg hover:border-green-200 animate__animated animate__fadeInUp">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-green-500 animate__animated animate__flash animate__infinite" />
                <p className="text-[#212121] font-medium text-lg lg:text-xl transition-colors duration-300 hover:text-green-600">
                  1399 $ до 1 сентября
                </p>
              </div>

              <div className="mt-4">
                <p className="text-gray-600 text-sm mb-3 transition-colors duration-300 hover:text-gray-800">
                  До конца акции осталось:
                </p>
                <div className="flex gap-3">
                  <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl flex items-center justify-center text-xl lg:text-2xl font-bold transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg animate__animated animate__jello">
                      {timerDays}
                    </div>
                    <span className="text-gray-500 text-xs mt-1 transition-colors duration-300 group-hover:text-gray-700">
                      дней
                    </span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div
                      className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl flex items-center justify-center text-xl lg:text-2xl font-bold transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg animate__animated animate__jello"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {timerHours}
                    </div>
                    <span className="text-gray-500 text-xs mt-1 transition-colors duration-300 group-hover:text-gray-700">
                      часов
                    </span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div
                      className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl flex items-center justify-center text-xl lg:text-2xl font-bold transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg animate__animated animate__jello"
                      style={{ animationDelay: "0.4s" }}
                    >
                      {timerMinutes}
                    </div>
                    <span className="text-gray-500 text-xs mt-1 transition-colors duration-300 group-hover:text-gray-700">
                      минут
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 w-full">
        <div
          className="bg-white rounded-3xl lg:rounded-4xl shadow-xl transition-all duration-500 ease-out p-6 lg:p-8 w-full hover:scale-[1.02] hover:shadow-2xl animate__animated animate__slideInRight"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex items-center gap-3 mb-6 animate__animated animate__rotateInDownLeft">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg">
              <Check className="w-5 h-5 text-white transition-transform duration-300 hover:scale-125" />
            </div>
            <h1 className="text-[#4CAF50] text-xl lg:text-2xl font-medium transition-colors duration-300 hover:text-green-600">
              Что входит
            </h1>
          </div>

          <div className="space-y-3 lg:space-y-4">
            {includedItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 group animate__animated animate__fadeInLeft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full transition-all duration-300 group-hover:scale-125"></div>
                </div>
                <p className="text-black text-base lg:text-xl transition-all duration-300 group-hover:translate-x-2 group-hover:text-green-600">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="bg-white rounded-3xl lg:rounded-4xl shadow-xl transition-all duration-500 ease-out p-6 lg:p-8 w-full hover:scale-[1.02] hover:shadow-2xl animate__animated animate__slideInRight"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-center gap-3 mb-6 animate__animated animate__rotateInDownRight">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg">
              <XIcon className="w-5 h-5 text-white transition-transform duration-300 hover:scale-125" />
            </div>
            <h1 className="text-[#F44336] text-xl lg:text-2xl font-medium transition-colors duration-300 hover:text-red-600">
              Что не входит
            </h1>
          </div>

          <div className="space-y-3 lg:space-y-4">
            {excludedItems.map((item, index) => (
              <div
                key={index}
                className="group animate__animated animate__fadeInRight"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-200">
                      <div className="w-2 h-2 bg-red-500 rounded-full transition-all duration-300 group-hover:scale-125"></div>
                    </div>
                    <p className="text-black text-base lg:text-xl transition-all duration-300 group-hover:translate-x-2 group-hover:text-red-600">
                      {item.text}
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm lg:text-base ml-2 transition-all duration-300 group-hover:text-gray-600 group-hover:font-medium">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-4 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 group animate__animated animate__pulse animate__infinite">
            <Calendar className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <span className="transition-all duration-300 group-hover:tracking-wider">
              Забронировать место
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
