import { useEffect, useState } from "react";
import { arrowLeft, arrowRight } from "../../assets";
import { gameOfTheMonth } from "../../constants/gameOfTheMonth";
const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedMedia = gameOfTheMonth.trailerAndGallery[selectedIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (selectedIndex >= gameOfTheMonth.trailerAndGallery.length - 1) {
        setSelectedIndex(0);
      } else {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [selectedIndex]);

  const handleNext = () => {
    if (selectedIndex === gameOfTheMonth.trailerAndGallery.length - 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex === 0) {
      setSelectedIndex(gameOfTheMonth.trailerAndGallery.length - 1);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  };
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold lg:text-xl lg:font-bold">
          Trailer & Gallery
        </h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              className="flex h-8 w-11 items-center justify-center rounded-lg border-2 border-white"
            >
              <img src={arrowLeft} alt="previous" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-8 w-11 items-center justify-center rounded-lg border-2 border-white"
            >
              <img src={arrowRight} alt="next" />
            </button>
          </div>
          <div className="flex items-center justify-between">
            {gameOfTheMonth.trailerAndGallery.map((item, i) => (
              <div
                key={i}
                className={`${
                  i === selectedIndex
                    ? "h-3 w-7 rounded-lg bg-primary"
                    : "size-[7px] rounded-full bg-violet"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <img src={selectedMedia} alt="-" className="w-full" />
      <div className="flex items-center justify-between gap-2 overflow-scroll no-scrollbar xl:gap-3">
        {gameOfTheMonth.trailerAndGallery.map((media, i) => (
          <img
            onClick={() => setSelectedIndex(i)}
            key={i}
            src={media}
            alt=""
            className={`cursor-pointer ${
              i === selectedIndex
                ? "h-[84px] w-[157px]"
                : "h-[60px] w-3/4 lg:w-[83px] xl:w-[129.67px]"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
