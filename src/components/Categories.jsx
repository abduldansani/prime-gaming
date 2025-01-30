import { useState } from "react";
import { arrowLeft, arrowRight, chevronRight } from "../assets";
import { categories } from "../constants/categories";
import Section from "./shared/Section";
import { motion } from "motion/react";
import { revealVar } from "../motion/opacityReveal";

const Categories = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <Section>
      <motion.div
        variants={revealVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container space-y-6 xl:space-y-8"
      >
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold lg:text-2xl lg:font-bold">
            Game Categories
          </h2>
          <div className="cursor-not-allowed space-y-2">
            <div className="flex cursor-not-allowed items-center gap-2.5 max-lg:hidden">
              <button className="flex size-8 cursor-not-allowed items-center justify-center rounded-lg border-2 border-white">
                <img src={arrowLeft} alt="previous" />
              </button>
              <button className="flex size-8 cursor-not-allowed items-center justify-center rounded-lg border-2 border-white">
                <img src={arrowRight} alt="next" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="h-3 w-10 rounded-lg bg-primary" />
              <div className="h-2 w-5 rounded-lg bg-violet" />
            </div>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-sm font-light text-primary lg:hidden"
          >
            <div className="">{showAll ? "View less" : "View All"}</div>
            <img
              src={chevronRight}
              alt="-"
              width={16}
              height={16}
              className={`${showAll && "rotate-90"}`}
            />
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
              className={`h-[194px] shrink-0 bg-cover bg-center bg-no-repeat p-1 lg:h-[177px] ${
                showAll ? "max-lg:w-full" : "max-lg:w-[280.5px]"
              } ${(i === 0 || i === categories.length - 1) && "lg:col-span-2"}`}
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <h3 className="flex h-full w-full items-end bg-black bg-opacity-30 p-4 text-xl font-semibold">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Categories;
