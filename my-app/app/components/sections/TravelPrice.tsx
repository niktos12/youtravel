export function TravelPrice() {
  return (
    <div className="flex flex-row gap-5 p-5 w-full">
      <div className="bg-white px-16 py-[60px] flex flex-col gap-[90px] rounded-4xl w-[613px]">
        <p className="text-[#212121] text-3xl">Стоимость</p>
        <div className="flex flex-col gap-4">
          <h1 className="text-black font-medium text-[64px]">1499 $</h1>
          <p className="text-[#212121] font-medium text-2xl">
            1399 $ до 1 сентября
          </p>
        </div>
      </div>
      <div className="bg-white flex flex-row rounded-4xl gap-5 px-8 py-9 w-full">
        <div className="bg-[#21212108] flex flex-col gap-4 rounded-4xl p-8 w-full">
          <h1 className="text-[#4CAF50] mt-2 font-medium text-2xl">
            Что входит
          </h1>
          <p className="text-black text-xl">Проживание в отеле у океана</p>
          <p className="text-black text-xl">Завтраки</p>
          <p className="text-black text-xl">Все трансферы</p>
          <p className="text-black text-xl">Страховка</p>
          <p className="text-black text-xl">Сопровождение организатора</p>
        </div>
        <div className="bg-[#21212108] flex flex-col rounded-4xl gap-4 p-8 w-full">
          <h1 className="text-[#F44336] mt-2 font-medium text-2xl">
            Что не входит
          </h1>
          <p className="text-black text-xl">
            Перелет <span className="opacity-40">~ 900 €</span>
          </p>
          <p className="text-black text-xl">
            Доп. экскурсии <span className="opacity-40">400 - 700 $</span>
          </p>
          <p className="text-black text-xl">
            Питание <span className="opacity-40">200 - 250 $</span>
          </p>
        </div>
      </div>
    </div>
  );
}
