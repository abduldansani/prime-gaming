import { arrowLeft, arrowRight, chevronRight } from "../../assets";
const Controls = ({ viewAll, onViewALl }) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-12">
        <h2 className="text-xl font-semibold lg:text-2xl lg:font-bold">
          Blog Post
        </h2>
        <button className="flex cursor-not-allowed items-center gap-2 text-lg font-medium text-primary max-md:hidden">
          <div className="">View All</div>
          <img src={chevronRight} alt="-" width={16} height={16} />
        </button>
      </div>
      <div className="space-y-2 max-md:hidden">
        <div className="flex items-center gap-2.5">
          <button className="flex h-8 w-11 cursor-not-allowed items-center justify-center rounded-lg border-2 border-white">
            <img src={arrowLeft} alt="previous" />
          </button>
          <button className="flex h-8 w-11 cursor-not-allowed items-center justify-center rounded-lg border-2 border-white">
            <img src={arrowRight} alt="next" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-3 w-7 rounded-lg bg-primary" />
          <div className="size-[7px] rounded-full bg-violet" />
          <div className="size-[7px] rounded-full bg-violet" />
          <div className="size-[7px] rounded-full bg-violet" />
        </div>
      </div>
      <button
        onClick={onViewALl}
        className="flex items-center gap-2 text-sm font-light text-primary md:hidden"
      >
        <div className="">View {viewAll ? "Less" : "All"}</div>
        <img
          src={chevronRight}
          alt="-"
          width={16}
          height={16}
          className={viewAll ? "rotate-90" : ""}
        />
      </button>
    </div>
  );
};

export default Controls;
