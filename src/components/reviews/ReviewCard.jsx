import { calendar, comment, metacritic, star, view } from "../../assets";
import PrimaryButton from "../shared/PrimaryButton";

const ReviewCard = ({ game, viewAll }) => {
  return (
    <div className="flex gap-4 rounded-lg border-2 border-violetLight p-2 max-md:flex-col lg:gap-5 xl:gap-3">
      <div
        className={`w-full shrink-0 ${
          viewAll ? "max-md:w-full" : "max-md:min-w-[294px]"
        } rounded-lg bg-cover bg-center max-md:min-h-[194px] md:w-[140px]`}
        style={{ backgroundImage: `url(${game.image})` }}
      ></div>
      <div className="flex flex-col justify-between gap-4 md:gap-2">
        <h3 className="border-b-2 border-white font-medium">
          {game.game} <span className="text-grey">({game.year})</span>
        </h3>
        <p className="text-xs font-light text-grey">{game.description}</p>
        <div className="flex items-center gap-1">
          {game.categories.map((category, i) => (
            <div
              key={i}
              className="rounded-[35px] bg-bg2 px-3 py-1 text-[9px] font-light"
            >
              {category}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={metacritic} alt="metacritic" width={20} height={20} />
            <div className="text-grey">
              <span className="text-xl font-bold text-yellow">
                {game.review}
              </span>
              /100
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src={calendar} alt="date" width={20} height={20} />
            <div className="text-sm">{game.date}</div>
          </div>
        </div>
      </div>
      <div className="flex shrink-0 flex-col justify-between gap-2">
        <div className="flex items-center justify-between gap-1 md:flex-col">
          <div className="flex flex-col items-center gap-1">
            <img src={view} alt="views" width={20} height={20} />
            <div className="text-sm">
              {game.views}{" "}
              <span className="text-xs font-light text-grey">Views</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src={comment} alt="views" width={20} height={20} />
            <div className="text-sm">
              {game.comments}{" "}
              <span className="text-xs font-light text-grey">Comments</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src={star} alt="views" width={20} height={20} />
            <div className="text-sm">
              {game.stars}{" "}
              <span className="text-xs font-light text-grey">/10</span>
            </div>
          </div>
        </div>
        <PrimaryButton
          type="fill"
          className="rounded-xl px-4 py-2 text-sm font-light"
        >
          Full Review
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ReviewCard;
