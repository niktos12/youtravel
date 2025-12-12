"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="h-[1140px] p-5 mt-30 bg-[url(/bg-main.jpg)] m-5 bg-cover rounded-3xl flex flex-col justify-end">
      <div className="px-16 py-12 flex flex-col gap-6 rounded-4xl max-w-[744px] backdrop-blur-xl border-[#FFFFFF66]">
        <h1 className="text-white text-[84px]">
          Мы летим на
          <br />
          Мальдивы!
        </h1>
        <p className="text-3xl">10 дней приключений, солнца и кайфа</p>
        <button className="mt-6 bg-[#3DA5D9] py-6 rounded-full">Хочу поехать!</button>
      </div>
    </div>
  );
}
