import React from "react";
import { arrowPrimary, calendar } from "../../assets";

const UpcomingGameCard = ({ game, showAll }) => {
  return (
    <div className="shrink-0 rounded-xl border-2 border-violetLight p-2 xl:p-2.5">
      <img
        src={game.image}
        alt={game.name}
        className={`mb-3 w-[151.2px] rounded-xl lg:h-[184px] xl:h-[239px] xl:w-[207.2px] ${
          showAll ? "max-lg:w-full" : "h-[184px]"
        }`}
      />
      <div className="space-y-2 xl:space-y-3">
        <h3 className="font-medium max-xl:text-center">{game.name}</h3>
        <div className="flex flex-col items-center justify-between gap-2 xl:flex-row">
          <div className="flex items-center gap-1">
            <img src={calendar} alt="date" width={16} height={16} />
            <div className="text-xs font-light text-grey">{game.date}</div>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <div className="">Pre-Order</div>
            <img src={arrowPrimary} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingGameCard;
