"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  Star,
  Heart,
  Quote,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const reviews = [
    {
      name: "Анна Воробьёва",
      text: "Поездка на Мальдивы превзошла ожидания! Плавание со скатами и акулами — восторг. Прозрачная вода и дружелюбные гиды сделали всё идеально.",
      avatar: "АВ",
      rating: 5,
      date: "Октябрь 2024",
    },
    {
      name: "Иван Петров",
      text: "Невероятные впечатления! Каждый день — новые открытия. Особенно запомнилась ночная рыбалка и ужин из свежего улова.",
      avatar: "ИП",
      rating: 5,
      date: "Сентябрь 2024",
    },
    {
      name: "Мария Сидорова",
      text: "Лучший отпуск в жизни! Организация на высшем уровне. Отдельное спасибо гидам за интересные экскурсии и заботу.",
      avatar: "МС",
      rating: 5,
      date: "Ноябрь 2024",
    },
    {
      name: "Алексей Козлов",
      text: "Приехал один, уезжаю с новыми друзьями! Атмосфера в группе была потрясающая. Обязательно поеду снова!",
      avatar: "АК",
      rating: 5,
      date: "Август 2024",
    },
  ];

  return (
    <section
      id="reviews"
      className={`py-12 lg:py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden ${
        isVisible ? "animate__animated animate__fadeIn" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 lg:mb-16 animate__animated animate__fadeInDown">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="relative">
              <Heart className="w-8 h-8 text-pink-500 animate__animated animate__heartBeat animate__infinite" />
              <div className="absolute inset-0 w-8 h-8 bg-pink-500/20 rounded-full animate__animated animate__pulse animate__infinite"></div>
            </div>
            <span className="text-lg font-semibold text-pink-600">
              25% едут одни
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 animate__animated animate__flipInX">
            Возвращаются с друзьями
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full mb-6 animate__animated animate__zoomIn"></div>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate__animated animate__fadeInUp">
            Присоединяйтесь к сообществу путешественников, которые находят новых
            друзей в каждой поездке
          </p>
        </div>

        <div className="relative animate__animated animate__fadeIn">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".reviews-pagination",
              renderBullet: (index, className) => {
                return `<span class="${className} !w-8 !h-2 !rounded-full !bg-gradient-to-r from-blue-500 to-cyan-500 !opacity-30 hover:!opacity-100 transition-opacity"></span>`;
              },
            }}
            navigation={{
              nextEl: ".reviews-next",
              prevEl: ".reviews-prev",
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="!pb-20"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`h-full p-2 transition-all duration-500 ${
                    activeIndex === index ? "scale-100" : "scale-95 opacity-80"
                  }`}
                >
                  <div
                    className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 animate__animated animate__flipInY"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-xl lg:text-2xl font-bold animate__animated animate__rubberBand">
                          {review.avatar}
                        </div>
                        <Quote className="absolute -top-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 text-blue-300 bg-white p-1 rounded-full" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-800">
                            {review.name}
                          </h3>
                          <span className="text-gray-500 text-sm">
                            {review.date}
                          </span>
                        </div>
                        <div className="flex gap-1 mt-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400 animate__animated animate__tada"
                              style={{
                                animationDelay: `${i * 0.3}s`,
                                animationIterationCount: "infinite",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <p className="text-gray-600 leading-relaxed lg:text-lg">
                        "{review.text}"
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-blue-500">
                          <Users className="w-4 h-4" />
                          <span>25% одиноких путешественников</span>
                        </div>
                        <div className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full animate__animated animate__bounce animate__infinite animate__slow">
                          100% рекомендуют
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="hidden lg:block">
            <button className="reviews-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white w-12 h-12 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-50 group animate__animated animate__slideInLeft">
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 mx-auto" />
            </button>

            <button className="reviews-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white w-12 h-12 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-50 group animate__animated animate__slideInRight">
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 mx-auto" />
            </button>
          </div>

          <div className="reviews-pagination flex justify-center gap-2 mt-6 lg:mt-8"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12 lg:mt-16">
          {[
            {
              value: "140+",
              label: "Проведенных туров",
              color: "from-blue-500 to-cyan-500",
            },
            {
              value: "1,000+",
              label: "Счастливых туристов",
              color: "from-purple-500 to-pink-500",
            },
            {
              value: "98%",
              label: "Положительных отзывов",
              color: "from-green-500 to-emerald-500",
            },
            {
              value: "25%",
              label: "Одиноких путешественников",
              color: "from-orange-500 to-amber-500",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.color} text-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 text-center animate__animated animate__jackInTheBox`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="text-2xl lg:text-4xl font-bold mb-2 animate__animated animate__bounceIn">
                {stat.value}
              </div>
              <p className="text-white/90 text-sm lg:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
