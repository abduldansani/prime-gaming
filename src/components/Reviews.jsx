import { arrowLeft, arrowRight, chevronRight } from "../assets";
import { gameReviews } from "../constants/gameReviews";
import ReviewCard from "./ReviewCard";
import Section from "./shared/Section";

const Reviews = () => {
  return (
    <Section>
      <div className="container space-y-6 xl:space-y-8">
        <div className="flex justify-between">
          <div className="flex gap-12 items-center">
            <h2 className="text-xl lg:text-2xl font-semibold lg:font-bold">
              Game Reviews
            </h2>
            <button className="max-lg:hidden text-primary text-lg font-medium flex items-center gap-2">
              <div className="">View All</div>
              <img src={chevronRight} alt="-" width={16} height={16} />
            </button>
          </div>
          <div className="max-lg:hidden space-y-2">
            <div className="flex items-center gap-2.5">
              <button className="border-2 border-white w-11 h-8 rounded-lg flex items-center justify-center">
                <img src={arrowLeft} alt="previous" />
              </button>
              <button className="border-2 border-white w-11 h-8 rounded-lg flex items-center justify-center">
                <img src={arrowRight} alt="next" />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-7 h-3 rounded-lg bg-primary" />
              <div className="w-4 h-2 rounded-full bg-violet" />
              <div className="w-4 h-2 rounded-full bg-violet" />
            </div>
          </div>
          <button className="lg:hidden text-primary text-sm font-light flex items-center gap-2">
            <div className="">View All</div>
            <img src={chevronRight} alt="-" width={16} height={16} />
          </button>
        </div>
        <div className="overflow-hidden flex items-center gap-4 md:grid xl:grid-cols-2 md:gap-3 xl:gap-6">
          {gameReviews.map((game) => (
            <ReviewCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Reviews;
