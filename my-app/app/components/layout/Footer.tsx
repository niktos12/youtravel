"use client";
import { useState, useEffect, useRef } from "react";
import CommentTextarea from "../ui/TextareaComment";
import IMask from "imask";

export default function Footer() {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      const mask = IMask(phoneInputRef.current, {
        mask: "+{7} (000) 000-00-00",
        lazy: false,
        placeholderChar: "_",
      });

      return () => mask.destroy();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setName("");
    setPhone("");
    setComment("");
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <footer className="flex flex-col lg:flex-row gap-5 p-4 lg:p-5 bg-[#2121210A]">
      <div className="flex flex-col gap-5 lg:w-2/5">
        <div className="flex flex-col gap-6 p-6 lg:p-9 bg-white rounded-3xl lg:rounded-4xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
          <div className="flex flex-row gap-5">
            <img
              src={"/avatar.svg"}
              alt="Аватар Юрия Богодуха"
              className="w-20 h-20 lg:w-24 lg:h-24 transition-all duration-500 hover:scale-105 hover:rotate-3"
            />
            <div className="flex flex-col">
              <h2 className="text-[#212121] font-light text-sm lg:text-base transition-colors duration-300 hover:text-gray-600">
                Директор и организатор
              </h2>
              <h1 className="text-[#212121] font-semibold text-xl lg:text-2xl mt-1 transition-colors duration-300 hover:text-blue-600">
                Юрий Богодух
              </h1>
              <div className="bg-gradient-to-r from-transparent via-[#212121] to-transparent h-px mt-3 transition-all duration-500 hover:via-blue-500"></div>
              <p className="mt-3 text-[#212121] font-medium text-lg transition-all duration-300 hover:translate-x-2 hover:text-blue-600">
                +7 917 972 20 09
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <button className="bg-[#F6F6F6] w-[93px] flex justify-center p-2.5 rounded-4xl transition-all duration-300 hover:bg-blue-500 hover:scale-105 group">
              <img
                src={"/vk.svg"}
                alt="ВКонтакте"
                className="transition-all duration-300 group-hover:invert group-hover:brightness-0"
              />
            </button>
            <button className="bg-[#F6F6F6] w-[93px] flex justify-center p-2 rounded-4xl transition-all duration-300 hover:bg-blue-400 hover:scale-105 group">
              <img
                src={"/tg.svg"}
                alt="Telegram"
                className="transition-all duration-300 group-hover:invert group-hover:brightness-0"
              />
            </button>
            <button className="bg-[#F6F6F6] w-[93px] flex justify-center p-2 rounded-4xl transition-all duration-300 hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 group">
              <img
                src={"/instagram.svg"}
                alt="Instagram"
                className="transition-all duration-300 group-hover:invert group-hover:brightness-0"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col bg-white p-6 lg:p-9 rounded-3xl lg:rounded-4xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
          <h1 className="text-[#212121] text-2xl lg:text-3xl mb-3 font-semibold transition-colors duration-300 hover:text-blue-600">
            Путешествуем <br />с 2009 года
          </h1>
          <h2 className="text-[#212121] text-lg transition-colors duration-300 hover:text-gray-600">
            Это будет уже 140-я поездка
          </h2>
          <div className="flex flex-row w-full justify-between items-end mt-6">
            <img
              src="/logo.svg"
              alt="YouTravel логотип"
              className="h-8 lg:h-10 transition-all duration-500 hover:scale-110"
            />
            <img
              src="/plane.svg"
              alt="Самолет"
              className="w-24 lg:w-32 -mr-6 lg:-mr-9 -mb-6 lg:-mb-9 transition-all duration-700 "
            />
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 lg:gap-6 p-6 lg:p-9 bg-gradient-to-br from-[#3DA5D9] to-cyan-500 rounded-3xl lg:rounded-4xl lg:w-3/5 transition-all duration-500 hover:shadow-2xl"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-2">
          <h1 className="text-white font-semibold text-2xl lg:text-3xl mb-4 lg:mb-0 transition-all duration-300 hover:scale-105">
            Оставь заявку
          </h1>
          <h2 className="text-white font-light text-base lg:text-lg text-center lg:text-right transition-opacity duration-300 hover:opacity-90">
            И мы свяжемся, чтобы рассказать детали
            <br /> и закрепить цену до повышения
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-6 w-full py-4 bg-white rounded-full text-[#212121] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:hover:scale-100"
            placeholder="Имя"
            required
            disabled={isSubmitting}
          />
          <input
            ref={phoneInputRef}
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-6 w-full py-4 bg-white rounded-full text-[#212121] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 font-mono transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:hover:scale-100"
            placeholder="+7 (___) ___-__-__"
            required
            disabled={isSubmitting}
          />
        </div>

        <CommentTextarea
          value={comment}
          onChange={setComment}
          placeholder="Дополнительные пожелания или вопросы"
          maxLength={300}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`text-white font-semibold py-4 lg:py-5 rounded-full mt-3 transition-all duration-500 hover:scale-105 hover:shadow-xl group ${
            isSubmitting
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#212121] hover:bg-gray-800"
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-3">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="transition-all duration-300">Отправка...</span>
            </div>
          ) : (
            <span className="flex items-center justify-center gap-3 transition-all duration-300 group-hover:gap-4">
              <span className="transition-all duration-300 group-hover:tracking-wider">
                Отправить
              </span>
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          )}
        </button>

        <p className="text-white text-xs lg:text-sm text-center opacity-80 mt-4 transition-opacity duration-300 hover:opacity-100">
          Нажимая кнопку «Отправить», Вы даете согласие на обработку
          персональных данных
        </p>
      </form>
    </footer>
  );
}
