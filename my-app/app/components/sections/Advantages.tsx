"use client";
import { useEffect, useState } from "react";
import { CheckCircle, Shield, Users, Star, Award, Globe } from "lucide-react";

export function AdvantagesBlock() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const advantages = [
    {
      icon: Shield,
      title: "Безопасность",
      description: "Страхование, опытные гиды и круглосуточная поддержка",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Команда",
      description: "Профессиональные гиды с 7+ летним опытом",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Star,
      title: "Эксклюзив",
      description: "Доступ к закрытым местам и уникальным активностям",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Award,
      title: "Качество",
      description: "Более 98% довольных клиентов возвращаются к нам",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Поддержка",
      description: "Помощь с визой, билетами и трансферами",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: CheckCircle,
      title: "Гарантии",
      description: "Возврат средств при отмене поездки",
      color: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            Почему выбирают нас?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3DA5D9] to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Мы создаем незабываемые путешествия с 2015 года
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl lg:rounded-4xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate__animated animate__fadeInUp ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 animate__animated animate__pulse animate__infinite animate__slow`}
                >
                  <item.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Статистика */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "8", label: "Лет опыта", suffix: "+" },
            { value: "95", label: "Успешных туров", suffix: "%" },
            { value: "2500", label: "Счастливых клиентов", suffix: "+" },
            { value: "15", label: "Стран", suffix: "" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center animate__animated animate__zoomIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-[#3DA5D9] mb-2">
                {stat.value}
                <span className="text-cyan-500">{stat.suffix}</span>
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
