export function TravelPrice() {
  return (
    <div className="flex flex-row gap-5">
      <div className="bg-white px-16 py-[60px] flex flex-col gap-[90px]">
        <p className="text-[#212121] text-3xl">Стоимость</p>
        <div className="flex flex-col gap-4">
          <h1 className="text-black font-medium text-[64px]">1499 $</h1>
          <p className="text-[#212121] font-medium text-2xl">
            1399 $ до 1 сентября
          </p>
        </div>
      </div>
      <div className="bg-white"></div>
    </div>
  );
}
