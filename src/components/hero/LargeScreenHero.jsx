import { arrowLeft, arrowRight, calendar, metacritic } from "../../assets";
import GreyButton from "../shared/GreyButton";
import PrimaryButton from "../shared/PrimaryButton";

const LargeScreenHero = ({
  handleNext,
  handlePrev,
  popularGames,
  selectedGame,
  selectedIndex,
  handleSetSelectedIndex,
}) => {
  return (
    <div className="container relative flex items-end justify-between gap-5 pb-24 pt-52 max-lg:hidden xl:gap-8 xl:pb-[120px]">
      <div className="flex w-[323px] flex-col gap-8 xl:w-[333px]">
        <div className="space-y-2">
          <div className="text-[40px] font-extrabold">{selectedGame.name}</div>
          <p className="text-justify text-sm xl:text-base">
            {selectedGame.description}
          </p>
        </div>
        <div className="space-y-7">
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <img src={metacritic} alt="metacritic" width={36} height={36} />
              <div className="text-grey">
                <span className="text-2xl font-semibold text-yellow">
                  {selectedGame.review}
                </span>
                /100
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={calendar} alt="calendar" width={36} height={36} />
              <div className="">{selectedGame.releaseDate}</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <h2 className="text-xl font-semibold">Available For:</h2>
              <p className="text-grey">{selectedGame.platforms.join(" - ")}</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold">Genre:</h2>
              <p className="text-grey">{selectedGame.genre}</p>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            {selectedGame.platforms.map((platform, i) => (
              <GreyButton key={i} className="w-full text-nowrap">
                {platform}
              </GreyButton>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <PrimaryButton type="fill" className="w-full rounded-[20px] py-3">
              Buy Now
            </PrimaryButton>
            <PrimaryButton
              type="outline"
              className="w-full rounded-[20px] py-3"
            >
              Game review
            </PrimaryButton>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            The Most <span className="text-primary">Pupular</span> Games
          </h2>
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              className="flex size-11 items-center justify-center rounded-lg border-2 border-white"
            >
              <img src={arrowLeft} alt="previous" />
            </button>
            <button
              onClick={handleNext}
              className="flex size-11 items-center justify-center rounded-lg border-2 border-white"
            >
              <img src={arrowRight} alt="next" />
            </button>
          </div>
        </div>
        <div className="flex items-end justify-between gap-2">
          {popularGames.map((game, i) => (
            <img
              onClick={() => handleSetSelectedIndex(i)}
              key={game.id}
              src={game.poster}
              alt={game.name}
              className={`w-[101.8px] cursor-pointer xl:w-[153.4px] ${
                selectedIndex === i
                  ? "h-[179px] xl:h-[240px]"
                  : "h-[164px] xl:h-[220px]"
              } `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LargeScreenHero;
