import { gameOfTheMonth } from "../../constants/gameOfTheMonth";
import PrimaryButton from "../shared/PrimaryButton";
import Section from "../shared/Section";
import Info from "./Info";
import Gallery from "./Gallery";
import SystemReq from "./SystemReq";
import PcTest from "./PcTest";

const GameOfTheMonth = () => {
  return (
    <Section>
      <div className="container relative space-y-6 xl:space-y-8">
        <div className="absolute right-0 -z-10 h-full w-1/4 bg-violetLight blur-[300px]" />
        <h1 className="text-center text-2xl font-bold">Game Of The Month</h1>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 xl:gap-9">
          <div className="space-y-4 lg:w-1/2">
            <Info />
          </div>

          <div className="space-y-4 lg:w-1/2">
            <Gallery />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-9">
          <SystemReq />
          <PcTest />
        </div>
      </div>
    </Section>
  );
};

export default GameOfTheMonth;
