export default function Program() {
  const program = [
    { date: "10 октября", event: "Вылет из Москвы" },
    { date: "11–20 октября", event: "Мальдивы", highlight: true },
    { date: "21 октября", event: "Домой" },
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Программа поездки
        </h2>

        <div className="max-w-2xl mx-auto">
          {program.map((item, index) => (
            <div
              key={index}
              className={`flex items-center mb-8 last:mb-0 ${
                item.highlight ? "bg-blue-50 rounded-lg p-6" : "p-2"
              }`}
            >
              <div
                className={`w-32 shrink-0 ${
                  item.highlight
                    ? "text-blue-600 font-bold text-lg"
                    : "text-gray-600"
                }`}
              >
                {item.date}
              </div>
              <div
                className={`grow ${
                  item.highlight
                    ? "text-blue-800 font-semibold text-xl"
                    : "text-gray-800"
                }`}
              >
                {item.event}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
