import { gameOfTheMonth } from "../../constants/gameOfTheMonth";
import { calendar, metacritic } from "../../assets";
import PrimaryButton from "../shared/PrimaryButton";

const Info = () => {
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{gameOfTheMonth.name}</h2>
        <p className="text-sm lg:text-base">{gameOfTheMonth.description}</p>
      </div>
      <div className="space-y-3 xl:space-y-4">
        <div className="flex justify-between gap-7">
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <img src={metacritic} alt="metacritic" width={32} height={32} />
              <div className="text-grey">
                <span className="text-xl font-bold text-yellow">
                  {gameOfTheMonth.review}
                </span>
                /100
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={calendar} alt="date" width={32} height={32} />
              <div className="text-sm">{gameOfTheMonth.releaseDate}</div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-center">
              <div className="text-xl font-semibold">Available For:</div>
              <div className="text-grey">{gameOfTheMonth.availableFor}</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold">Genre:</div>
              <div className="text-grey">{gameOfTheMonth.genre}</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {gameOfTheMonth.platforms.map((platform, i) => (
            <div
              key={i}
              className="rounded-lg border-2 border-grey py-2 text-center text-grey"
            >
              {platform}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <PrimaryButton type="fill" className="w-full rounded-[20px] py-2">
            Buy Now
          </PrimaryButton>
          <PrimaryButton type="outline" className="w-full rounded-[20px] py-2">
            Game review
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default Info;
