import { gameOfTheMonth } from "../../constants/gameOfTheMonth";
import PrimaryButton from "../shared/PrimaryButton";

const PcTest = () => {
  return (
    <form className="space-y-3 rounded-xl bg-bg2 px-4 py-2 md:max-lg:col-span-2">
      <div className="flex flex-col gap-4 xl:gap-3">
        {gameOfTheMonth.reqTestInput.map((input, i) => (
          <label key={i} htmlFor="" className="space-y-1">
            <div className="text-xs font-medium">{input.label}</div>
            <div className="flex items-center gap-2 rounded-[4px] border-2 border-white px-2 py-1">
              <img src={input.icon} alt="-" width={24} height={24} />
              <input
                type="text"
                className="flex-1 bg-transparent text-[10px] outline-none"
                placeholder={input.placeholder}
              />
            </div>
          </label>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <PrimaryButton type="fill" className="rounded-lg py-2">
          Can I Run It?
        </PrimaryButton>
        <PrimaryButton type="outline" className="rounded-lg py-2">
          Test My PC Automaticly
        </PrimaryButton>
      </div>
    </form>
  );
};

export default PcTest;
