import { calendar, comment, metacritic, star, view } from "../assets";
import PrimaryButton from "./shared/PrimaryButton";

const ReviewCard = ({ game }) => {
  return (
    <div className="p-2 flex max-md:flex-col gap-4 lg:gap-5 xl:gap-3 rounded-lg border-2 border-violetLight">
      <div
        className="shrink-0 w-full max-md:min-w-[294px] max-md:min-h-[194px] md:w-[140px] bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${game.image})` }}
      ></div>
      <div className="flex flex-col gap-4 md:gap-2 justify-between">
        <h3 className="border-b-2 border-white font-medium">
          {game.game} <span className="text-grey">({game.year})</span>
        </h3>
        <p className="text-xs text-grey font-light">{game.description}</p>
        <div className="flex items-center gap-1">
          {game.categories.map((category, i) => (
            <div
              key={i}
              className="rounded-[35px] py-1 px-3 bg-bg2 text-[9px] font-light"
            >
              {category}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={metacritic} alt="metacritic" width={20} height={20} />
            <div className="text-grey">
              <span className="text-xl text-yellow font-bold">
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
      <div className="flex flex-col gap-2 justify-between shrink-0">
        <div className="flex md:flex-col gap-1 justify-between items-center">
          <div className="flex gap-1 items-center flex-col">
            <img src={view} alt="views" width={20} height={20} />
            <div className="text-sm">
              {game.views}{" "}
              <span className="text-xs font-light text-grey">Views</span>
            </div>
          </div>
          <div className="flex gap-1 items-center flex-col">
            <img src={comment} alt="views" width={20} height={20} />
            <div className="text-sm">
              {game.comments}{" "}
              <span className="text-xs font-light text-grey">Comments</span>
            </div>
          </div>
          <div className="flex gap-1 items-center flex-col">
            <img src={star} alt="views" width={20} height={20} />
            <div className="text-sm">
              {game.stars}{" "}
              <span className="text-xs font-light text-grey">/10</span>
            </div>
          </div>
        </div>
        <PrimaryButton
          type="fill"
          className="px-4 py-2 text-sm font-light rounded-xl"
        >
          Full Review
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ReviewCard;
