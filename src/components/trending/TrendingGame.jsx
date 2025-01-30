import { arrowPrimary, calendar, metacritic } from "../../assets";
const TrendingGame = ({ game, showAll }) => {
  return (
    <div className="shrink-0 rounded-xl border-2 border-violetLight p-2 xl:p-2.5">
      <img
        src={game.image}
        alt={game.name}
        className={`mb-3 rounded-xl lg:h-[184px] lg:w-[151.2px] xl:h-[239px] xl:w-[207.2px] ${
          showAll ? "max-lg:w-full" : "h-[184px] w-[151.2px]"
        }`}
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
            <div className="tex-xs font-light text-grey">
              <span className="font-regular text-base text-yellow">
                {game.review}
              </span>
              /100
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-between">
          <div className="flex items-center">
            <div className="mr-1 text-xs font-light text-grey line-through">
              {game.originalPrice}
              <span className="text-[8px]">$</span>
            </div>
            <div className="pr-2">
              {game.currentPrice}
              <span className="text-xs">$</span>
            </div>
            <div className="rounded-lg bg-primary px-1 py-0.5 text-[10px] font-light">
              {game.discount}%
            </div>
          </div>
          <button className="flex items-center gap-1 text-xs max-lg:hidden">
            <div className="">Buy Now</div>
            <img src={arrowPrimary} alt="-" width={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingGame;
