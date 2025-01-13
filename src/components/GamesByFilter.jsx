import { arrowLeft, arrowRight, chevronDown, searchIcon } from "../assets";
import { categories, filterSelect } from "../constants/filters";
import { allGames } from "../constants/games";
import GameCard from "./shared/GameCard";
import PrimaryButton from "./shared/PrimaryButton";
import Section from "./shared/Section";

const GamesByFilter = ({}) => {
  return (
    <Section>
      <div className="container space-y-6 lg:space-y-8">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-bold">Games By Filter</h1>
          <p className="text-grey">
            At This Section You Can Search For Games by multiple filters
          </p>
        </div>
        <div className="space-y-6 lg:space-y-8">
          <div className="flex items-center gap-4 bg-bg2 rounded-lg py-2 px-3">
            <img src={searchIcon} alt="search" width={32} height={32} />
            <input
              type="text"
              placeholder="Game Name"
              className="bg-transparent outline-none flex-1"
            />
          </div>
          <div className="flex gap-3 items-center">
            <button className="border-2 border-white size-11 rounded-lg flex items-center justify-center">
              <img src={arrowLeft} alt="previous" />
            </button>
            <div className="flex-1 flex gap-4 overflow-hidden items-center">
              {categories.map((category, i) => (
                <button key={i} className="py-3 px-6 rounded-[35px] bg-bg2">
                  {category}
                </button>
              ))}
            </div>
            <button className="border-2 border-white size-11 rounded-lg flex items-center justify-center">
              <img src={arrowRight} alt="next" />
            </button>
          </div>
          <div className="flex max-md:flex-col gap-9 justify-between">
            {Object.entries(filterSelect).map(([key, value], i) => (
              <div key={i} className="flex items-center gap-3 flex-1">
                <h3 className="min-w-16 font-medium">{key}</h3>
                <div className="flex-1 bg-bg2 rounded-lg py-2 px-3 flex justify-between">
                  <div className="text-sm text-grey">{value[0]}</div>
                  <img src={chevronDown} alt="more" />
                </div>
              </div>
            ))}
          </div>
          {/* Todo: filterByYear */}
          <PrimaryButton
            type="fill"
            className="py-3 flex items-center gap-2 rounded-2xl justify-center w-full"
          >
            <img src={searchIcon} alt="-" width={20} height={20} />
            <div className="font-medium">Search For Games</div>
          </PrimaryButton>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {allGames.map((game, i) => (
            <GameCard key={i} game={game} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default GamesByFilter;
