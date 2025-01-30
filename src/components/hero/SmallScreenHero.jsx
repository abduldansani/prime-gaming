import { arrowLeft, arrowRight, calendar, metacritic } from "../../assets";
import PrimaryButton from "../shared/PrimaryButton";

const SmallScreenHero = ({
  handleNext,
  handlePrev,
  popularGames,
  selectedGame,
  selectedIndex,
}) => {
  return (
    <div className="relative space-y-7 pb-8 pt-52 lg:hidden">
      <div className="container flex items-center justify-between py-6 lg:py-24 xl:py-28">
        <button
          onClick={handlePrev}
          className="flex size-10 items-center justify-center rounded-lg border-2 border-white"
        >
          <img src={arrowLeft} alt="previous" width={40} height={40} />
        </button>
        <button
          onClick={handleNext}
          className="flex size-10 items-center justify-center rounded-lg border-2 border-white"
        >
          <img src={arrowRight} alt="next" width={40} height={40} />
        </button>
      </div>

      <div className="text-center">
        <div className="z-50 text-[32px] font-extrabold">
          {selectedGame.name}
        </div>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="flex items-center gap-3">
          <img src={metacritic} alt="metacritic" width={24} height={24} />
          <div className="text-grey">
            <span className="text-xl font-semibold text-yellow">
              {selectedGame.review}
            </span>
            /100
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src={calendar} alt="calendar" width={24} height={24} />
          <div className="">{selectedGame.releaseDate}</div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <PrimaryButton
          className="w-full max-w-52 rounded-[20px] py-3 text-lg font-medium"
          type="fill"
        >
          Buy Now
        </PrimaryButton>
        <PrimaryButton
          className="w-full max-w-52 rounded-[20px] py-3 text-lg font-medium"
          type="outline"
        >
          Game review
        </PrimaryButton>
      </div>
      <div className="flex items-center justify-center gap-1">
        {popularGames.map((game, i) => (
          <div
            key={game.id}
            className={`rounded-sm ${
              selectedIndex === i
                ? "h-2.5 w-[45px] bg-primary"
                : "h-1.5 w-[25px] bg-primaryDim"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SmallScreenHero;
