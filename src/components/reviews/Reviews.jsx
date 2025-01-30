import { useState } from "react";
import { arrowLeft, arrowRight, chevronRight } from "../../assets";
import { gameReviews } from "../../constants/gameReviews";
import ReviewCard from "./ReviewCard";
import Section from "../shared/Section";

const Reviews = () => {
  const [viewAll, setViewAll] = useState(false);
  return (
    <Section>
      <div className="container relative space-y-6 xl:space-y-8">
        <div className="absolute right-0 -z-10 h-full w-1/4 bg-violetLight blur-[300px]" />
        <div className="flex justify-between">
          <div className="flex items-center gap-12">
            <h2 className="text-xl font-semibold lg:text-2xl lg:font-bold">
              Game Reviews
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
              <div className="h-2 w-4 rounded-full bg-violet" />
              <div className="h-2 w-4 rounded-full bg-violet" />
            </div>
          </div>
          <button
            onClick={() => setViewAll(!viewAll)}
            className="flex items-center gap-2 text-sm font-light text-primary md:focus:opacity-35 lg:hidden"
          >
            <div className="">View {viewAll ? "less" : "All"}</div>
            <img src={chevronRight} alt="-" width={16} height={16} />
          </button>
        </div>
        <div
          className={`overflow-scroll no-scrollbar ${
            viewAll ? "max-md:grid sm:max-md:grid-cols-2" : ""
          } flex items-center gap-4 md:grid md:gap-3 xl:grid-cols-2 xl:gap-6`}
        >
          {gameReviews.map((game) => (
            <ReviewCard key={game.id} game={game} viewAll={viewAll} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Reviews;
