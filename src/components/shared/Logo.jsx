import { gamepad } from "../../assets";

const Logo = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-1">
        <img src={gamepad} alt="gamepad" />
        <div className="text-xs font-light md:text-sm xl:text-base">Prime</div>
      </div>
      <div className="font-black text-primary md:text-xl xl:text-[22px]">
        Gaming
      </div>
    </div>
  );
};

export default Logo;
