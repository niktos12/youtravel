import Hero from "./components/sections/Hero";
import Highlights from "./components/sections/Highlights";
import Program from "./components/sections/Program";
import Pricing from "./components/sections/Pricing";
import Reviews from "./components/sections/Reviews";
import { ProgramTravel } from "./components/sections/ProgramTravel";
import { PhotoBlock } from "./components/sections/PhotoBlock";
import { TravelPrice } from "./components/sections/TravelPrice";

export default function Home() {
  return (
    <>
      <Hero />
      <ProgramTravel />
      <PhotoBlock />
      <TravelPrice />
      <Highlights />
      <Program />
      <Pricing />
      <Reviews />
    </>
  );
}
