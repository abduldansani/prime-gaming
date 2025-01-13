import React from "react";
import { arrowPrimary, calendar, metacritic } from "../../assets";

const GameCard = ({ game }) => {
  return (
    <div className="shrink-0 p-2 xl:p-2.5 rounded-xl border-2 border-violetLight">
      <img
        src={game.image}
        alt={game.name}
        className="w-full rounded-xl mb-3"
      />
      <div className="space-y-2 xl:space-y-3">
        <h3 className="font-medium xl:text-xl xl:font-semibold">{game.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src={calendar} alt="date" width={20} height={20} />
            <div className="text-xs font-light text-grey">{game.date}</div>
          </div>
          <div className="flex items-center gap-1">
            <img src={metacritic} alt="metacritic" width={20} height={20} />
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
  );
};

export default GameCard;
