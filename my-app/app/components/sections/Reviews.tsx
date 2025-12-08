export default function Reviews() {
  const reviews = [
    {
      name: "Анна Воробьёва",
      text: "Поездка на Мальдивы превзошла все ожидания. Плавание со скатами и акулами было незабываемо. Прекрасная организация и дружеская атмосфера сделали всё идеально.",
    },
    {
      name: "Анна Воробьёва",
      text: "Поездка на Мальдивы превзошла все ожидания. Плавание со скатами и акулами было незабываемо. Прекрасная организация и дружеская атмосфера сделали всё идеально.",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            25% едут одни
          </h2>
          <p className="text-xl text-gray-600">Возвращаются с друзьями</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {review.name}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
