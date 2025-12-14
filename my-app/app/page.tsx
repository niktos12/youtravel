import Hero from "./components/sections/Hero";
import Reviews from "./components/sections/Reviews";
import { ProgramTravel } from "./components/sections/ProgramTravel";
import { PhotoBlock } from "./components/sections/PhotoBlock";
import { TravelPrice } from "./components/sections/TravelPrice";
import { AdvantagesBlock } from "./components/sections/Advantages";
import { ProcessBlock } from "./components/sections/ProcessBlock";

export default function Home() {
  return (
    <>
      <Hero />
      <ProgramTravel />
      <ProcessBlock />
      <PhotoBlock />
      <TravelPrice />
      <AdvantagesBlock />
      <Reviews />
    </>
  );
}
