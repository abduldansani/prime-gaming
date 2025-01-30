import { useState } from "react";
import { arrowLeft, arrowRight, chevronRight } from "../../assets";
import { upcomingGames } from "../../constants/upcomingGames";
import Section from "../shared/Section";
import UpcomingGameCard from "./UpcomingGameCard";

const Upcoming = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <Section>
      <div className="container relative space-y-6 xl:space-y-8">
        <div className="absolute left-0 -z-10 h-full w-1/4 bg-violetLight blur-[250px]" />
        <div className="flex justify-between">
          <div className="flex items-center gap-12">
            <h2 className="text-xl font-semibold lg:text-2xl lg:font-bold">
              Up Coming Games
            </h2>
            <button className="flex cursor-not-allowed items-center gap-2 text-lg font-medium text-primary max-lg:hidden">
              <div className="">View All</div>
              <img src={chevronRight} alt="-" width={16} height={16} />
            </button>
          </div>
          <div className="cursor-not-allowed space-y-2 max-lg:hidden">
            <div className="flex items-center gap-2.5">
              <button className="flex h-8 w-11 cursor-not-allowed items-center justify-center rounded-lg border-2 border-white">
                <img src={arrowLeft} alt="previous" />
              </button>
              <button className="flex h-8 w-11 cursor-not-allowed items-center justify-center rounded-lg border-2 border-white">
                <img src={arrowRight} alt="next" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="h-3 w-7 rounded-lg bg-primary" />
              <div className="size-[7px] rounded-full bg-violet" />
              <div className="size-[7px] rounded-full bg-violet" />
              <div className="size-[7px] rounded-full bg-violet" />
            </div>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-sm font-light text-primary lg:hidden"
          >
            <div className="">View {showAll ? "Less" : "All"}</div>
            <img src={chevronRight} alt="-" width={16} height={16} />
          </button>
        </div>
        <div
          className={`flex overflow-scroll no-scrollbar ${
            showAll
              ? "grid-cols-2 max-lg:grid max-sm:gap-x-1 sm:grid-cols-3 md:grid-cols-3"
              : "overflow-scroll no-scrollbar"
          } items-center justify-between gap-3`}
        >
          {upcomingGames.map((game) => (
            <UpcomingGameCard key={game.id} game={game} showAll={showAll} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Upcoming;
