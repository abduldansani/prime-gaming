import React from "react";
import { arrowPrimary, calendar } from "../assets";

const UpcomingGameCard = ({ game }) => {
  return (
    <div className="shrink-0 p-2 xl:p-2.5 rounded-xl border-2 border-violetLight">
      <img
        src={game.image}
        alt={game.name}
        className="w-[151.2px] h-[184px] xl:w-[207.2px] xl:h-[239px] rounded-xl mb-3"
      />
      <div className="space-y-2 xl:space-y-3">
        <h3 className="font-medium max-xl:text-center">{game.name}</h3>
        <div className="flex items-center justify-between flex-col xl:flex-row gap-2">
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
