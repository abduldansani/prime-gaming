import { useEffect, useState } from "react";
import { arrowLeft, arrowRight, calendar, metacritic } from "../assets";
import Header from "./Header";
import { popularGames } from "../constants/popularGames";
import PrimaryButton from "./shared/PrimaryButton";
import GreyButton from "./shared/GreyButton";

const Hero = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedGame = popularGames[selectedIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (selectedIndex >= popularGames.length - 1) {
        setSelectedIndex(0);
      } else {
        handleNext();
      }
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [selectedIndex]); // Empty dependency array ensures it runs only once after mounting

  const handleNext = () => {
    if (selectedIndex >= popularGames.length - 1) return;
    setSelectedIndex(selectedIndex + 1);
  };

  const handlePrev = () => {
    if (selectedIndex <= 0) return;
    setSelectedIndex(selectedIndex - 1);
  };
  return (
    <div>
      <Header />
      <div
        className="relative bg-cover bg-center lg:min-h-screen"
        style={{ backgroundImage: `url(${selectedGame.bg})` }}
      >
        {/* Background colors */}
        <div className="bg-black bg-opacity-40 lg:bg-opacity-30 absolute inset-0" />
        <div className="absolute left-0 right-1/3 bg-gradient-to-l from-black/0 md:via-bg to-bg md:to-bg h-full" />
        <div className="absolute bottom-0 top-2/3 bg-gradient-to-b from-black/0 to-bg w-full" />

        {/* Smaller screens only */}
        <div className="lg:hidden relative space-y-7 pt-52 pb-8">
          <div className="py-6 lg:py-24 xl:py-28 container flex justify-between items-center">
            <button
              onClick={handlePrev}
              className="border-2 border-white size-10 rounded-lg flex items-center justify-center"
            >
              <img src={arrowLeft} alt="previous" />
            </button>
            <button
              onClick={handleNext}
              className="border-2 border-white size-10 rounded-lg flex items-center justify-center"
            >
              <img src={arrowRight} alt="next" />
            </button>
          </div>

          <div className="text-center">
            <div className="z-50 font-extrabold text-[32px]">
              {selectedGame.name}
            </div>
          </div>
          <div className="flex gap-8 justify-center items-center">
            <div className="flex items-center gap-3">
              <img src={metacritic} alt="metacritic" width={24} height={24} />
              <div className="text-grey">
                <span className="text-yellow text-xl font-semibold">
                  {selectedGame.review}
                </span>
                /100
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={calendar} alt="calendar" width={24} height={24} />
              <div className="">{selectedGame.releaseDate}</div>
            </div>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <PrimaryButton
              className="py-3 text-lg font-medium rounded-[20px] w-full max-w-52"
              type="fill"
            >
              Buy Now
            </PrimaryButton>
            <PrimaryButton
              className="py-3 text-lg font-medium rounded-[20px] w-full max-w-52"
              type="outline"
            >
              Game review
            </PrimaryButton>
          </div>
          <div className="flex items-center justify-center gap-1">
            {popularGames.map((game, i) => (
              <div
                key={game.id}
                className={`rounded-sm ${
                  selectedIndex === i
                    ? "w-[45px] h-2.5 bg-primary"
                    : "w-[25px] h-1.5 bg-primaryDim"
                }`}
              />
            ))}
          </div>
        </div>
        {/* Larger screens */}
        <div className="container relative max-lg:hidden py-24 xl:py-[120px] flex gap-5 xl:gap-8 justify-between items-end">
          <div className="w-[323px] xl:w-[333px] flex flex-col gap-8">
            <div className="space-y-2">
              <div className="text-[40px] font-extrabold">
                {selectedGame.name}
              </div>
              <p className="text-sm xl:text-base text-justify">
                {selectedGame.description}
              </p>
            </div>
            <div className="space-y-7">
              <div className="flex gap-8 justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={metacritic}
                    alt="metacritic"
                    width={36}
                    height={36}
                  />
                  <div className="text-grey">
                    <span className="text-yellow text-2xl font-semibold">
                      {selectedGame.review}
                    </span>
                    /100
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={calendar} alt="calendar" width={36} height={36} />
                  <div className="">{selectedGame.releaseDate}</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <h2 className="text-xl font-semibold">Available For:</h2>
                  <p className="text-grey">
                    {selectedGame.platforms.join(" - ")}
                  </p>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold">Genre:</h2>
                  <p className="text-grey">{selectedGame.genre}</p>
                </div>
              </div>
              <div className="flex justify-between gap-2">
                {selectedGame.platforms.map((platform, i) => (
                  <GreyButton key={i} className="w-full text-nowrap">
                    {platform}
                  </GreyButton>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <PrimaryButton
                  type="fill"
                  className="py-3 w-full rounded-[20px]"
                >
                  Buy Now
                </PrimaryButton>
                <PrimaryButton
                  type="outline"
                  className="py-3 w-full rounded-[20px]"
                >
                  Game review
                </PrimaryButton>
              </div>
            </div>
          </div>

          <div className="space-y-5 flex-1">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                The Most <span className="text-primary">Pupular</span> Games
              </h2>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={handlePrev}
                  className="border-2 border-white size-11 rounded-lg flex items-center justify-center"
                >
                  <img src={arrowLeft} alt="previous" />
                </button>
                <button
                  onClick={handleNext}
                  className="border-2 border-white size-11 rounded-lg flex items-center justify-center"
                >
                  <img src={arrowRight} alt="next" />
                </button>
              </div>
            </div>
            <div className="flex gap-2 justify-between items-end">
              {popularGames.map((game, i) => (
                <img
                  key={game.id}
                  src={game.poster}
                  alt={game.name}
                  className={`w-[101.8px] xl:w-[153.4px] ${
                    selectedIndex === i
                      ? "h-[179px] xl:h-[240px]"
                      : "h-[164px] xl:h-[220px]"
                  } `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
