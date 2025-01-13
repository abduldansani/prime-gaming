import { gamepad } from "../../assets";

const Logo = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-1">
        <img src={gamepad} alt="gamepad" />
        <div className="font-light text-xs md:text-sm xl:text-base">Prime</div>
      </div>
      <div className="md:text-xl xl:text-[22px] font-black text-primary">
        Gaming
      </div>
    </div>
  );
};

export default Logo;
