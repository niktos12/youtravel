export function PhotoBlock() {
  return (
    <div className="flex flex-row gap-5 p-5 m-5">
      <div className="bg-[url(/photo1.png)] w-[600px] h-[729px] bg-cover bg-center p-12 rounded-4xl items-end flex">
        <p className="text-white text-3xl">
          Живём на острове с уютными пляжами, кафе, магазинами и водными
          развлечениями
        </p>
      </div>
      <div className="bg-[url(/photo2.jpg)] w-[600px] h-[729px] bg-cover bg-center p-12 rounded-4xl items-end flex">
        <p className="text-white text-3xl">
          Каждый день — новые острова, снорклинг, катание, приключения
        </p>
      </div>
      <div className="bg-[url(/photo3.jpg)] w-[600px] h-[729px] bg-cover bg-center p-12 rounded-4xl items-end flex">
        <p className="text-white text-3xl">
          А вечерами — банька, посиделки и атмосфера YouTravel
        </p>
      </div>
    </div>
  );
}
