export default function Highlights() {
  const highlights = [
    {
      title: "Сотни островов",
      description: "Исследуйте бесконечное разнообразие райских уголков",
    },
    {
      title: "День на водном курорте",
      description: "Роскошный отдых на лучших курортах Мальдив",
    },
    {
      title: "Плавание со скатами и акулами",
      description: "Уникальные встречи с морскими обитателями",
    },
    {
      title: "Ужин из улова на рыбалке",
      description: "Свежайшие морепродукты прямо из океана",
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Что ждет в поездке?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-700 max-w-3xl mx-auto">
          <p className="mb-4">
            Земли на склонах суетных столовых, воды, магазинами и складом
            разлетающихся
          </p>
          <p className="mb-4">
            Каждый день — новые острова, сноровки и спящих транспортников
          </p>
          <p>А вечерами — банды, прошёлмы и атмосферы Пиггана</p>
        </div>
      </div>
    </section>
  );
}
