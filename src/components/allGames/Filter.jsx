import { useRef, useState } from "react";
import { arrowLeft, arrowRight, chevronDown, searchIcon } from "../../assets";
import { categories, filterSelect } from "../../constants/filters";
import PrimaryButton from "../shared/PrimaryButton";

const Filter = ({ handleFilterChange, filterParams, filterGames }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();
  const [openSelect, setOpenSelect] = useState(null);
  const [selected, setSelected] = useState({
    Platform: "All",
    Publisher: "All",
    Players: "All",
  });
  const amount = 100;

  const handleScroll = (scrollAmount) => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    const maxScrollLeft = scrollWidth - clientWidth;
    const newScrollPosition = Math.min(
      Math.max(scrollLeft + scrollAmount, 0),
      maxScrollLeft,
    );

    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  const handleSearch = (val) => {
    handleFilterChange("search", val);
  };

  const handleCategorySelect = (category) => {
    const val = filterParams.categories.includes(category)
      ? filterParams.categories.filter((c) => c !== category)
      : [...filterParams.categories, category];
    handleFilterChange("categories", val);
  };

  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="flex items-center gap-4 rounded-lg bg-bg2 px-3 py-2">
        <img src={searchIcon} alt="search" width={32} height={32} />
        <input
          type="text"
          value={filterParams.search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Game Name"
          className="flex-1 bg-transparent outline-none"
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => handleScroll(-amount)}
          className="flex size-11 items-center justify-center rounded-lg border-2 border-white"
        >
          <img src={arrowLeft} alt="previous" />
        </button>
        <div
          ref={containerRef}
          className="flex flex-1 items-center gap-2 overflow-hidden overflow-x-scroll scroll-smooth no-scrollbar md:gap-4"
        >
          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => handleCategorySelect(category)}
              className={`rounded-[35px] px-6 py-3 ${
                filterParams.categories.includes(category)
                  ? "bg-primary"
                  : "bg-bg2"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <button
          onClick={() => handleScroll(amount)}
          className="flex size-11 items-center justify-center rounded-lg border-2 border-white"
        >
          <img src={arrowRight} alt="next" />
        </button>
      </div>
      <div className="flex justify-between gap-9 max-md:flex-col">
        {Object.entries(filterSelect).map(([key, value], i) => (
          <div key={i} className="relative flex flex-1 items-center gap-3">
            <h3 className="min-w-16 font-medium">{key}</h3>
            <div
              onClick={() => {
                openSelect === key ? setOpenSelect(null) : setOpenSelect(key);
              }}
              className="flex flex-1 justify-between rounded-lg bg-bg2 px-3 py-2"
            >
              <div className="overflow-scroll text-sm text-grey no-scrollbar">
                {filterParams[key.toLowerCase()]
                  ? filterParams[key.toLowerCase()]
                  : "All"}
              </div>
              <img src={chevronDown} alt="more" />
            </div>
            {openSelect === key && (
              <div className="absolute top-10 z-10 max-h-40 w-full space-y-2 overflow-x-hidden overflow-y-scroll rounded-xl border-[16px] border-bg bg-bg shadow-lg shadow-violet">
                {value.map((val, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      setSelected((prev) => ({ ...prev, [key]: val }));
                      setOpenSelect(null);
                      handleFilterChange(String(key.toLowerCase()), val);
                    }}
                    className={`text-sm ${
                      val === selected[key] ? "font-medium text-primary" : ""
                    }`}
                  >
                    {val}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6 max-md:flex-col">
        <div className="flex w-full gap-4 max-md:flex-col md:w-1/3 md:items-center">
          <div className="font-medium">Release Year</div>
          <div className="flex-1">
            <div className="mb-3 flex items-center">
              <input
                type="range"
                min={2000}
                max={filterParams.releaseYear[1] - 1}
                value={filterParams.releaseYear[0]}
                onChange={(e) => {
                  const newMin = Number(e.target.value);
                  if (newMin < filterParams.releaseYear[1]) {
                    handleFilterChange("releaseYear", [
                      newMin,
                      filterParams.releaseYear[1],
                    ]);
                  }
                }}
                className="-mr-0.5 w-full custom-range custom-range-thumb"
              />

              <input
                type="range"
                min={filterParams.releaseYear[0] + 1}
                max={2025}
                value={filterParams.releaseYear[1]}
                onChange={(e) => {
                  const newMax = Number(e.target.value);
                  if (newMax > filterParams.releaseYear[0]) {
                    handleFilterChange("releaseYear", [
                      filterParams.releaseYear[0],
                      newMax,
                    ]);
                  }
                }}
                className="-ml-0.5 w-full custom-range custom-range-max-thumb"
              />
            </div>

            <div className="flex justify-between">
              <div className="text-sm">{filterParams.releaseYear[0]}</div>
              <div className="text-sm">{filterParams.releaseYear[1]}</div>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-4 max-md:flex-col md:w-1/3 md:items-center">
          <div className="font-medium">Rating</div>
          <div className="flex-1">
            <div className="mb-3 flex items-center">
              <input
                type="range"
                min={0}
                max={filterParams.rating[1] - 1}
                value={filterParams.rating[0]}
                onChange={(e) => {
                  const newMin = Number(e.target.value);
                  handleFilterChange("rating", [
                    newMin,
                    filterParams.rating[1],
                  ]);
                }}
                className="-mr-0.5 w-full custom-range custom-range-thumb"
              />

              <input
                type="range"
                min={filterParams.rating[0] + 1}
                max={100}
                value={filterParams.rating[1]}
                onChange={(e) => {
                  const newMax = Number(e.target.value);
                  if (newMax > filterParams.rating[0]) {
                    handleFilterChange("rating", [
                      filterParams.rating[0],
                      newMax,
                    ]);
                  }
                }}
                className="-ml-0.5 w-full custom-range custom-range-max-thumb"
              />
            </div>

            <div className="flex justify-between">
              <div className="text-sm">{filterParams.rating[0]}</div>
              <div className="text-sm">{filterParams.rating[1]}</div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-between md:w-1/3">
          <button
            onClick={() => handleFilterChange("online", !filterParams.online)}
            className="flex items-center gap-4"
          >
            <div className="text-xl">Online</div>
            <div
              className={`rounded-3xl border-4 border-primary p-0.5 ${
                filterParams.online ? "bg-primary pl-6" : "pr-6"
              }`}
            >
              <div
                className={`size-4 rounded-full ${
                  filterParams.online ? "bg-bg" : "bg-primary"
                }`}
              ></div>
            </div>
          </button>
          <button
            onClick={() => handleFilterChange("free", !filterParams.free)}
            className="flex items-center gap-4"
          >
            <div className="text-xl">Free</div>
            <div
              className={`rounded-3xl border-4 border-primary p-0.5 ${
                filterParams.free ? "bg-primary pl-6" : "pr-6"
              }`}
            >
              <div
                className={`size-4 rounded-full ${
                  filterParams.free ? "bg-bg" : "bg-primary"
                }`}
              />
            </div>
          </button>
        </div>
      </div>
      <div onClick={filterGames} className="">
        <PrimaryButton
          type="fill"
          className="flex w-full items-center justify-center gap-2 rounded-2xl py-3"
        >
          <img src={searchIcon} alt="-" width={20} height={20} />
          <div className="font-medium">Search For Games</div>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Filter;
