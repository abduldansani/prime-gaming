import { useState } from "react";
import { arrowLeft, arrowRight, calendar, metacritic } from "../assets";
import { gameOfTheMonth } from "../constants/gameOfTheMonth";
import PrimaryButton from "./shared/PrimaryButton";
import Section from "./shared/Section";

const GameOfTheMonth = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedMedia = gameOfTheMonth.trailerAndGallery[selectedIndex];

  const handleNext = () => {
    if (selectedIndex === gameOfTheMonth.trailerAndGallery.length - 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex === 0) {
      setSelectedIndex(gameOfTheMonth.trailerAndGallery.length - 1);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <Section>
      <div className=" relative container space-y-6 xl:space-y-8">
        <div className="absolute w-1/4 h-full bg-violetLight blur-[300px] right-0 -z-10" />
        <h1 className="font-bold text-2xl text-center">Game Of The Month</h1>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-9">
          <div className="space-y-4 lg:w-1/2">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{gameOfTheMonth.name}</h2>
              <p className="text-sm lg:text-base">
                {gameOfTheMonth.description}
              </p>
            </div>
            <div className="space-y-3 xl:space-y-4">
              <div className="flex gap-7 justify-between">
                <div className="flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={metacritic}
                      alt="metacritic"
                      width={32}
                      height={32}
                    />
                    <div className="text-grey">
                      <span className="text-xl text-yellow font-bold">
                        {gameOfTheMonth.review}
                      </span>
                      /100
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={calendar} alt="date" width={32} height={32} />
                    <div className="text-sm">{gameOfTheMonth.releaseDate}</div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="text-center">
                    <div className="font-semibold text-xl">Available For:</div>
                    <div className="text-grey">
                      {gameOfTheMonth.availableFor}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-xl">Genre:</div>
                    <div className="text-grey">{gameOfTheMonth.genre}</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {gameOfTheMonth.platforms.map((platform, i) => (
                  <div
                    key={i}
                    className="py-2 rounded-lg border-2 border-grey text-grey text-center"
                  >
                    {platform}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <PrimaryButton
                  type="fill"
                  className="py-2 w-full rounded-[20px]"
                >
                  Buy Now
                </PrimaryButton>
                <PrimaryButton
                  type="outline"
                  className="py-2 w-full rounded-[20px]"
                >
                  Game review
                </PrimaryButton>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-4">
            <div className="flex justify-between">
              <h2 className="text-xl lg:text-xl font-semibold lg:font-bold">
                Trailer & Gallery
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handlePrev}
                    className="border-2 border-white w-11 h-8 rounded-lg flex items-center justify-center"
                  >
                    <img src={arrowLeft} alt="previous" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="border-2 border-white w-11 h-8 rounded-lg flex items-center justify-center"
                  >
                    <img src={arrowRight} alt="next" />
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  {gameOfTheMonth.trailerAndGallery.map((item, i) => (
                    <div
                      className={`${
                        i === selectedIndex
                          ? "w-7 h-3 rounded-lg bg-primary"
                          : "size-[7px] rounded-full bg-violet"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <img src={selectedMedia} alt="-" className="w-full" />
            <div className="flex gap-2 xl:gap-3 justify-between items-center overflow-scroll no-scrollbar">
              {gameOfTheMonth.trailerAndGallery.map((media, i) => (
                <img
                  onClick={() => setSelectedIndex(i)}
                  key={i}
                  src={media}
                  alt=""
                  className={`cursor-pointer ${
                    i === selectedIndex
                      ? "w-[157px] h-[84px]"
                      : "w-3/4 lg:w-[83px] xl:w-[129.67px] h-[60px]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-9">
          <div className="flex flex-col gap-3">
            <h2 className="font-medium lg:text-xl lg:font-semibold">
              <span className="text-primary">Minimum</span> System Requirments
            </h2>
            <div className="flex-1 flex gap-2 justify-between flex-col">
              {Object.entries(gameOfTheMonth.minSystemReq).map(
                ([key, value], i) => (
                  <div key={i} className="text-grey2">
                    <span className="text-white font-semibold text-xl">
                      {key}:{" "}
                    </span>
                    {value}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-medium lg:text-xl lg:font-semibold">
              <span className="text-primary">Recommended</span> System
              Requirments
            </h2>
            <div className="flex-1 flex gap-2 justify-between flex-col">
              {Object.entries(gameOfTheMonth.recSystemReq).map(
                ([key, value], i) => (
                  <div key={i} className="text-grey2">
                    <span className="text-white font-semibold text-xl">
                      {key}:{" "}
                    </span>
                    {value}
                  </div>
                )
              )}
            </div>
          </div>
          <form className="md:max-lg:col-span-2 py-2 px-4 bg-bg2 rounded-xl space-y-3">
            <div className="flex flex-col gap-4 xl:gap-3">
              {gameOfTheMonth.reqTestInput.map((input, i) => (
                <label key={i} htmlFor="" className="space-y-1">
                  <div className="font-medium text-xs">{input.label}</div>
                  <div className="py-1 px-2 rounded-[4px] border-2 border-white flex items-center gap-2">
                    <img src={input.icon} alt="-" width={24} height={24} />
                    <input
                      type="text"
                      className="flex-1 bg-transparent outline-none text-[10px]"
                      placeholder={input.placeholder}
                    />
                  </div>
                </label>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <PrimaryButton type="fill" className="py-2 rounded-lg">
                Can I Run It?
              </PrimaryButton>
              <PrimaryButton type="outline" className="py-2 rounded-lg">
                Test My PC Automaticly
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default GameOfTheMonth;
