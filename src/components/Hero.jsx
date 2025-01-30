import { useEffect, useState } from "react";
import Header from "./Header";
import { popularGames } from "../constants/popularGames";
import SmallScreenHero from "./hero/SmallScreenHero";
import LargeScreenHero from "./hero/LargeScreenHero";

const Hero = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedGame = popularGames[selectedIndex];

  const handleNext = () => {
    if (selectedIndex >= popularGames.length - 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex <= 0) {
      setSelectedIndex(popularGames.length - 1);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleSetSelectedIndex = (val) => {
    setSelectedIndex(val);
  };

  return (
    <div>
      <Header />
      <div
        className="relative bg-cover bg-center lg:min-h-screen"
        style={{ backgroundImage: `url(${selectedGame.bg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 lg:bg-opacity-30" />
        <div className="absolute left-0 right-1/3 h-full bg-gradient-to-l from-black/0 to-bg md:via-bg md:to-bg" />
        <div className="absolute bottom-0 top-2/3 w-full bg-gradient-to-b from-black/0 to-bg" />

        <SmallScreenHero
          handleNext={handleNext}
          handlePrev={handlePrev}
          popularGames={popularGames}
          selectedGame={selectedGame}
          selectedIndex={selectedIndex}
        />
        <LargeScreenHero
          handleNext={handleNext}
          handlePrev={handlePrev}
          popularGames={popularGames}
          selectedGame={selectedGame}
          selectedIndex={selectedIndex}
          handleSetSelectedIndex={handleSetSelectedIndex}
        />
      </div>
    </div>
  );
};

export default Hero;
