export default function Pricing() {
  const included = [
    "Проживание в отеле",
    "Питание по системе 'всё включено'",
    "Трансферы",
    "Экскурсии",
    "Сопровождение гида",
  ];

  const excluded = [
    "Авиаперелет",
    "Страховка",
    "Дополнительные экскурсии",
    "Личные расходы",
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-blue-500 to-teal-400 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Стоимость</h2>
          <div className="flex justify-center items-baseline space-x-4">
            <span className="text-5xl font-bold">1 499 $</span>
            <span className="text-xl line-through opacity-70">1 999 $</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Что входит?</h3>
            <ul className="space-y-3">
              {included.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Что не входит?</h3>
            <ul className="space-y-3">
              {excluded.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg">
            Забронировать сейчас
          </button>
        </div>
      </div>
    </section>
  );
}
