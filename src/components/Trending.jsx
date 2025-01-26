import { useState } from "react";
import {
  arrowLeft,
  arrowPrimary,
  arrowRight,
  calendar,
  chevronRight,
  metacritic,
} from "../assets";
import { trendingGames } from "../constants/trendingGames";
import Section from "./shared/Section";

const Trending = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <Section>
      <div className="container space-y-6 xl:space-y-8">
        <div className="flex justify-between">
          <div className="flex gap-12 items-center">
            <h2 className="text-xl lg:text-2xl font-semibold lg:font-bold">
              Trending Games
            </h2>
            <button className="cursor-not-allowed max-lg:hidden text-primary text-lg font-medium flex items-center gap-2">
              <div className="">View All</div>
              <img src={chevronRight} alt="-" width={16} height={16} />
            </button>
          </div>
          <div className="max-lg:hidden space-y-2">
            <div className="flex items-center gap-2.5">
              <button className="cursor-not-allowed border-2 border-white w-11 h-8 rounded-lg flex items-center justify-center">
                <img src={arrowLeft} alt="previous" />
              </button>
              <button className=" cursor-not-allowed border-2 border-white w-11 h-8 rounded-lg flex items-center justify-center">
                <img src={arrowRight} alt="next" />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-7 h-3 rounded-lg bg-primary" />
              <div className="size-[7px] rounded-full bg-violet" />
              <div className="size-[7px] rounded-full bg-violet" />
              <div className="size-[7px] rounded-full bg-violet" />
            </div>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="lg:hidden text-primary text-sm font-light flex items-center gap-2"
          >
            <div className="">{showAll ? "View less" : "View All"}</div>
            <img src={chevronRight} alt="-" width={16} height={16} />
          </button>
        </div>
        <div
          className={`flex items-center justify-between gap-4 lg:gap-3 xl:gap-4 ${
            showAll
              ? "max-lg:grid max-lg:grid-cols-1 sm:grid-cols-2 md:max-lg:grid-cols-3"
              : "overflow-scroll no-scrollbar"
          }`}
        >
          {trendingGames.map((game, i) => (
            <div
              key={i}
              className="shrink-0 p-2 xl:p-2.5 rounded-xl border-2 border-violetLight"
            >
              <img
                src={game.image}
                alt={game.name}
                className={`rounded-xl mb-3 w-[151.2px] h-[184px] xl:w-[207.2px] xl:h-[239px] ${
                  showAll ? "max-lg:w-full" : ""
                }`}
              />
              <div className="space-y-2 xl:space-y-3">
                <h3 className="font-medium xl:text-xl xl:font-semibold">
                  {game.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <img src={calendar} alt="date" width={20} height={20} />
                    <div className="text-xs font-light text-grey">
                      {game.date}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      src={metacritic}
                      alt="metacritic"
                      width={20}
                      height={20}
                    />
                    <div className="text-grey tex-xs font-light">
                      <span className="text-base text-yellow font-regular">
                        {game.review}
                      </span>
                      /100
                    </div>
                  </div>
                </div>
                <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between">
                  <div className="flex items-center">
                    <div className="mr-1 text-xs font-light text-grey line-through">
                      {game.originalPrice}
                      <span className="text-[8px]">$</span>
                    </div>
                    <div className="pr-2">
                      {game.currentPrice}
                      <span className="text-xs">$</span>
                    </div>
                    <div className="text-[10px] font-light bg-primary py-0.5 px-1 rounded-lg">
                      {game.discount}%
                    </div>
                  </div>
                  <button className="max-lg:hidden flex items-center gap-1 text-xs">
                    <div className="">Buy Now</div>
                    <img src={arrowPrimary} alt="-" width={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Trending;
