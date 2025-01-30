import { chevronRight } from "../../assets";
import GameCard from "./GameCard";
import PrimaryButton from "../shared/PrimaryButton";
import Section from "../shared/Section";
import { allGames } from "../../constants/allGames";
import { useState } from "react";
import { useEffect } from "react";
import Filter from "./Filter";

import { motion } from "motion/react";
import { revealVar } from "../../motion/opacityReveal";

const initialFilterParams = {
  search: "",
  categories: [],
  platform: "All",
  publisher: "All",
  players: "All",
  releaseYear: [2000, 2025],
  rating: [0, 100],
  online: false,
  free: false,
};

const GamesByFilter = ({}) => {
  const [showAll, setShowAll] = useState(false);
  const [displayedGames, setDisplayedGames] = useState(allGames);
  const [gamesToShow, setGamesToShow] = useState(0);
  const [filterParams, setFilterParams] = useState(initialFilterParams);

  const filterGames = () => {
    const filteredGames = allGames.filter((game) => {
      const matchesSearch =
        !filterParams.search ||
        game.name.toLowerCase().includes(filterParams.search.toLowerCase());

      const matchesCategory =
        !filterParams.categories.length ||
        game.genre.some((genre) =>
          filterParams.categories.some(
            (category) => category.toLowerCase() === genre.toLowerCase(),
          ),
        );

      const matchesPlatform =
        filterParams.platform === "All" ||
        game.platforms.some(
          (platform) =>
            platform.toLowerCase() === filterParams.platform.toLowerCase(),
        );

      const matchesPublisher =
        filterParams.publisher === "All" ||
        game.publisher.toLowerCase() === filterParams.publisher.toLowerCase();

      const matchesPlayers =
        filterParams.players === "All" ||
        game.players.toLowerCase() === filterParams.players.toLowerCase();

      const matchesReleaseYear =
        !filterParams.releaseYear.length ||
        (Number(game.date) >= filterParams.releaseYear[0] &&
          Number(game.date) <= filterParams.releaseYear[1]);

      const matchesRating =
        !filterParams.rating.length ||
        (Number(game.review) >= filterParams.rating[0] &&
          Number(game.review) <= filterParams.rating[1]);

      const matchesOnline = !filterParams.online || game.online;

      const matchesFree =
        !filterParams.free || !game.currentPrice || game.currentPrice === 0;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPlatform &&
        matchesPublisher &&
        matchesPlayers &&
        matchesReleaseYear &&
        matchesRating &&
        matchesOnline &&
        matchesFree
      );
    });

    setDisplayedGames(filteredGames);
    setShowAll(false);
  };

  const resetFilters = () => {
    setFilterParams(initialFilterParams);
    setShowAll(false);
  };

  const handleFilterChange = (key, value) => {
    setFilterParams((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    const handleResize = () => {
      const columns = getColumns();
      setGamesToShow(showAll ? allGames.length : columns * 2);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [showAll, allGames.length]);

  const getColumns = () => {
    const width = window.innerWidth;

    if (width < 640) return 1;
    if (width >= 640 && width < 768) return 2;
    if (width >= 768 && width < 1024) return 3;
    return 5;
  };
  return (
    <Section>
      <motion.div
        variants={revealVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container relative space-y-6 lg:space-y-8"
      >
        <div className="absolute left-0 -z-10 h-full w-1/4 bg-violetLight blur-[300px]" />
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-bold">Games By Filter</h1>
          <p className="text-grey">
            At This Section You Can Search For Games by multiple filters
          </p>
        </div>
        <Filter
          handleFilterChange={handleFilterChange}
          filterParams={filterParams}
          filterGames={filterGames}
        />
        {displayedGames.length ? (
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {displayedGames.slice(0, gamesToShow).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <>
            <p className="text-center text-2xl font-medium italic text-primary">
              Sorry! no game matches your search. try adjusting or resetting the
              filters
            </p>
          </>
        )}
        <div className="flex items-center justify-center gap-2">
          {displayedGames.length >= gamesToShow && (
            <div onClick={() => setShowAll(!showAll)}>
              <PrimaryButton
                type="outline"
                className="mx-auto flex items-center justify-center gap-2 rounded-2xl px-6 py-3"
              >
                <div className="font-medium">
                  View {showAll ? "Less" : "All"}
                </div>
                <img src={chevronRight} alt="-" />
              </PrimaryButton>
            </div>
          )}
          {filterParams !== initialFilterParams && (
            <div
              onClick={() => {
                setDisplayedGames(allGames);
                resetFilters();
              }}
            >
              <PrimaryButton className="rounded-2xl px-6 py-3">
                Reset filters
              </PrimaryButton>
            </div>
          )}
        </div>
      </motion.div>
    </Section>
  );
};

export default GamesByFilter;
