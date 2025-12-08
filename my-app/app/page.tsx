import Hero from "./components/sections/Hero";
import Highlights from "./components/sections/Highlights";
import Program from "./components/sections/Program";
import Pricing from "./components/sections/Pricing";
import Reviews from "./components/sections/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Program />
      <Pricing />
      <Reviews />
    </>
  );
}
