"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  MessageCircle,
  Calendar,
  CreditCard,
  Plane,
  Users,
  Award,
  Pause,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React from "react";

export function ProcessBlock() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const pulseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);

  const steps = [
    {
      icon: MessageCircle,
      title: "Заявка",
      description: "Оставьте заявку на сайте или свяжитесь с нами",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Calendar,
      title: "Консультация",
      description: "Подберем даты и составим индивидуальный план",
      color: "from-cyan-400 to-teal-400",
    },
    {
      icon: CreditCard,
      title: "Бронирование",
      description: "Внесение предоплаты для подтверждения места",
      color: "from-teal-400 to-emerald-400",
    },
    {
      icon: Plane,
      title: "Подготовка",
      description: "Помощь с визой, билетами и рекомендациями",
      color: "from-emerald-400 to-green-400",
    },
    {
      icon: Users,
      title: "Путешествие",
      description: "10 дней незабываемых впечатлений на Мальдивах",
      color: "from-green-400 to-lime-400",
    },
    {
      icon: Award,
      title: "Воспоминания",
      description: "Фото, видео и новые друзья на всю жизнь",
      color: "from-lime-400 to-yellow-400",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const clearIntervalTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const clearPulseTimeout = useCallback(() => {
    if (pulseTimeoutRef.current) {
      clearTimeout(pulseTimeoutRef.current);
      pulseTimeoutRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    if (!isMountedRef.current) return;

    clearIntervalTimer();
    clearPulseTimeout();

    intervalRef.current = setInterval(() => {
      if (!isMountedRef.current) return;

      clearPulseTimeout();
      setShowPulse(true);

      pulseTimeoutRef.current = setTimeout(() => {
        if (!isMountedRef.current) return;

        setActiveStep((prev) => {
          if (prev >= steps.length - 1) {
            return 0;
          }
          return prev + 1;
        });
        setShowPulse(false);
      }, 1000);
    }, 3000);
  }, [steps.length, clearIntervalTimer, clearPulseTimeout]);

  const stopAutoPlay = useCallback(() => {
    clearIntervalTimer();
    clearPulseTimeout();
    setShowPulse(false);
  }, [clearIntervalTimer, clearPulseTimeout]);

  const toggleAutoPlay = () => {
    const newState = !isAutoPlaying;
    setIsAutoPlaying(newState);
  };

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setShowPulse(false);
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
    }
  };

  const handleResumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  const handleNextStep = () => {
    setActiveStep((prev) => (prev >= steps.length - 1 ? 0 : prev + 1));
    setShowPulse(false);
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
    }
  };

  const handlePrevStep = () => {
    setActiveStep((prev) => (prev <= 0 ? steps.length - 1 : prev - 1));
    setShowPulse(false);
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => {
      stopAutoPlay();
    };
  }, [isAutoPlaying, startAutoPlay, stopAutoPlay]);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      clearIntervalTimer();
      clearPulseTimeout();
    };
  }, [clearIntervalTimer, clearPulseTimeout]);

  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const width = ((activeStep + 1) / steps.length) * 100;
    setProgressWidth(width);
  }, [activeStep, steps.length]);

  return (
    <section
      id="pricing"
      className="py-10 lg:py-16 xl:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 lg:mb-12 xl:mb-16 animate-fade-in">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800">
              Как проходит путешествие
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleAutoPlay}
                className="bg-gradient-to-r from-[#3DA5D9] to-cyan-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
                aria-label={isAutoPlaying ? "Пауза" : "Воспроизвести"}
              >
                {isAutoPlaying ? (
                  <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
              {!isAutoPlaying && (
                <button
                  onClick={handleResumeAutoPlay}
                  className="text-xs sm:text-sm text-[#3DA5D9] hover:text-cyan-600 font-medium px-3 py-1 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                >
                  Возобновить
                </button>
              )}
            </div>
          </div>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#3DA5D9] via-cyan-500 to-teal-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            От заявки до незабываемых воспоминаний — простой путь к мечте
          </p>
        </div>

        {isMobile ? (
          <div className="relative animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={handlePrevStep}
                className="bg-white w-10 h-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r from-[#3DA5D9] to-cyan-500 ${
                    isAutoPlaying ? "animate-pulse" : ""
                  }`}
                ></div>
                <span className="text-[#3DA5D9] font-medium text-sm">
                  Этап {activeStep + 1} из {steps.length}
                </span>
              </div>

              <button
                onClick={handleNextStep}
                className="bg-white w-10 h-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div
              className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${
                showPulse ? "animate-pulse" : ""
              }`}
              onClick={() => handleStepClick(activeStep)}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(to bottom right, ${steps[activeStep].color})`,
                  }}
                >
                  {React.createElement(steps[activeStep].icon, {
                    className: "w-6 h-6 sm:w-7 sm:h-7 text-white",
                  })}
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#3DA5D9] to-cyan-500 text-white flex items-center justify-center font-bold text-sm">
                      {activeStep + 1}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {steps[activeStep].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeStep
                        ? "bg-[#3DA5D9] scale-125"
                        : "bg-gray-300"
                    }`}
                  ></div>
                  <span className="text-xs text-gray-500 mt-1">
                    {index + 1}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-8">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#3DA5D9] via-cyan-500 to-teal-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressWidth}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    className={`text-xs font-medium transition-all duration-300 ${
                      index <= activeStep ? "text-[#3DA5D9]" : "text-gray-400"
                    }`}
                    onClick={() => handleStepClick(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative animate-fade-in">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-cyan-300 to-yellow-300 transform -translate-x-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                const isActive = activeStep === index;

                return (
                  <div
                    key={index}
                    className={`relative group ${
                      isEven
                        ? "lg:text-right lg:pr-10 xl:pr-12"
                        : "lg:pl-10 xl:pl-12 lg:col-start-2"
                    }`}
                    onClick={() => handleStepClick(index)}
                  >
                    <div
                      className={`hidden lg:block absolute top-1/2 w-5 h-5 xl:w-6 xl:h-6 rounded-full border-4 border-white shadow-lg transform -translate-y-1/2 transition-all duration-300 cursor-pointer ${
                        isEven
                          ? "right-[-10px] xl:right-[-12px]"
                          : "left-[-10px] xl:left-[-12px]"
                      } ${
                        isActive ? "scale-125" : "scale-100 hover:scale-110"
                      }`}
                      style={{
                        background: `linear-gradient(to bottom right, ${step.color})`,
                      }}
                    ></div>

                    <div
                      className={`bg-white rounded-2xl lg:rounded-3xl xl:rounded-4xl p-5 lg:p-6 xl:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                        isActive
                          ? "scale-[1.02] border-2 border-blue-200 transform -translate-y-1"
                          : "hover:scale-[1.01] hover:border hover:border-blue-100"
                      } ${isActive ? "animate-pulse" : "animate-fade-up"}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div
                        className={`flex items-start gap-3 lg:gap-4 ${
                          isEven ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                            isActive ? "scale-110" : ""
                          }`}
                          style={{
                            background: `linear-gradient(to bottom right, ${step.color})`,
                          }}
                        >
                          {React.createElement(step.icon, {
                            className:
                              "w-5 h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-white",
                          })}
                        </div>
                        <div
                          className={`flex-1 ${isEven ? "lg:text-right" : ""}`}
                        >
                          <div className="inline-flex items-center gap-2 mb-2">
                            <div
                              className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                                isActive
                                  ? "bg-gradient-to-r from-[#3DA5D9] to-cyan-500 text-white scale-110"
                                  : "bg-blue-100 text-blue-600"
                              }`}
                            >
                              {index + 1}
                            </div>
                            <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {!isMobile && (
          <div className="mt-8 lg:mt-12 xl:mt-16 animate-fade-in">
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-medium text-sm lg:text-base">
                  Начало
                </span>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gradient-to-r from-[#3DA5D9] to-cyan-500 ${
                      isAutoPlaying ? "animate-pulse" : ""
                    }`}
                  ></div>
                  <span className="text-[#3DA5D9] font-medium text-sm lg:text-base">
                    Этап {activeStep + 1} из {steps.length}
                  </span>
                </div>
                <span className="text-gray-600 font-medium text-sm lg:text-base">
                  Завершение
                </span>
              </div>

              <div className="relative h-3 lg:h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#3DA5D9] via-cyan-500 to-teal-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressWidth}%` }}
                >
                  <div
                    className={`absolute right-0 top-0 w-1 h-full bg-white/50 ${
                      isAutoPlaying ? "animate-pulse" : ""
                    }`}
                  ></div>
                </div>

                <div className="absolute inset-0 flex justify-between items-center px-1 lg:px-2">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleStepClick(index)}
                      className={`relative z-10 w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center ${
                        index <= activeStep ? "animate-bounce-in" : ""
                      }`}
                    >
                      <div
                        className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                          index <= activeStep
                            ? "bg-white border-2 border-white shadow-lg scale-125"
                            : "bg-gray-300 border-2 border-white hover:bg-gray-400"
                        }`}
                      ></div>
                      <span className="absolute -bottom-5 lg:-bottom-6 text-xs font-medium text-gray-600">
                        {index + 1}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-6 lg:mt-8">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    className={`text-xs lg:text-sm font-medium transition-all duration-300 ${
                      index <= activeStep
                        ? "text-[#3DA5D9] scale-110"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                    onClick={() => handleStepClick(index)}
                  >
                    {step.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center mt-6 lg:mt-8">
              <div className="inline-flex items-center gap-2 lg:gap-3 bg-gray-100 rounded-full px-3 lg:px-4 py-1 lg:py-2">
                <div
                  className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${
                    isAutoPlaying
                      ? "bg-green-500 animate-pulse"
                      : "bg-yellow-500"
                  }`}
                ></div>
                <span className="text-gray-600 text-xs lg:text-sm">
                  {isAutoPlaying
                    ? "Автопрокрутка включена"
                    : "Автопрокрутка приостановлена"}
                </span>
                <div className="flex gap-1 lg:gap-2">
                  <div className="flex gap-0.5 lg:gap-1">
                    {[...Array(steps.length)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 h-3 lg:h-4 rounded-full transition-all duration-300 ${
                          i === activeStep ? "bg-[#3DA5D9]" : "bg-gray-300"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
