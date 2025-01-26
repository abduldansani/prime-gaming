import { useState } from "react";
import { arrowLeft, arrowRight, chevronRight } from "../assets";
import { categories } from "../constants/categories";
import Section from "./shared/Section";

const Categories = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <Section>
      <div className="container space-y-6 xl:space-y-8">
        <div className="flex justify-between">
          <h2 className="text-xl lg:text-2xl font-semibold lg:font-bold">
            Game Categories
          </h2>
          <div className="space-y-2 cursor-not-allowed">
            <div className="cursor-not-allowed max-lg:hidden flex items-center gap-2.5">
              <button className="border-2 border-white size-8 rounded-lg flex items-center justify-center">
                <img src={arrowLeft} alt="previous" />
              </button>
              <button className="border-2 border-white size-8 rounded-lg flex items-center justify-center">
                <img src={arrowRight} alt="next" />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-10 h-3 rounded-lg bg-primary" />
              <div className="w-5 h-2 rounded-lg bg-violet" />
            </div>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="lg:hidden text-primary text-sm font-light flex items-center gap-2"
          >
            <div className="">{showAll ? "View less" : "View All"}</div>
            <img src={chevronRight} alt="-" width={16} height={16} />
          </button>
        </div>
        <div
          className={`flex gap-2 lg:grid lg:grid-cols-4 lg:gap-4 ${
            showAll ? "grid sm:grid-cols-2" : "overflow-scroll no-scrollbar"
          }`}
        >
          {categories.map((category, i) => (
            <div
              key={category.id}
              className={`p-1 shrink-0 h-[194px] lg:h-[177px] bg-no-repeat bg-cover bg-center ${
                showAll ? "max-lg:w-full" : "max-lg:w-[280.5px]"
              } ${(i === 0 || i === categories.length - 1) && "lg:col-span-2"}`}
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <h3 className="w-full h-full bg-black bg-opacity-30 p-4 flex items-end text-xl font-semibold">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Categories;
