import { arrowPrimary, calendar, metacritic } from "../../assets";

const GameCard = ({ game }) => {
  return (
    <div className="rounded-xl border-2 border-violetLight p-3 sm:p-2 xl:p-2.5">
      <img
        src={game.image}
        alt={game.name}
        className="mb-3 w-full rounded-xl"
      />
      <div className="space-y-2 xl:space-y-3">
        <h3 className="overflow-x-scroll text-nowrap font-medium no-scrollbar xl:text-xl xl:font-semibold">
          {game.name}
        </h3>
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
            {game.currentPrice ? (
              <>
                {game.originalPrice && (
                  <div className="mr-1 text-xs font-light text-grey line-through">
                    {game.originalPrice}
                    <span className="text-[8px]">$</span>
                  </div>
                )}
                <div className="pr-2">
                  {game.currentPrice}
                  <span className="text-xs">$</span>
                </div>
              </>
            ) : (
              <p>Free</p>
            )}
            {game.discount && (
              <div className="rounded-lg bg-primary px-1 py-0.5 text-[10px] font-light">
                {game.discount}%
              </div>
            )}
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

export default GameCard;
