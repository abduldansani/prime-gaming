import { chevronDown, menu, searchIcon } from "../assets";
import { navLinks } from "../constants/navLinks";
import Logo from "./shared/Logo";
import PrimaryButton from "./shared/PrimaryButton";

const Header = () => {
  return (
    <header className="z-50 py-3 lg:py-2.5 xl:py-3 fixed top-0 left-0 bg-bg right-0 bg-opacity-[15%] backdrop-blur-md">
      <div className="container flex gap-5 justify-between items-center">
        <div className="flex gap-5 items-center">
          <Logo />
          <div className="size-9 lg:size-[44px] bg-primary flex items-center justify-center rounded-full">
            <img
              src={searchIcon}
              alt="search"
              className="size-[18px] lg:size-5"
            />
          </div>
        </div>
        <nav className="max-lg:hidden flex-1 flex items-center justify-around">
          {navLinks.map((navLink, i) => (
            <div key={navLink.id} className="flex gap-1 items-center">
              <a
                href={navLink.url}
                className={`text-sm xl:text-[15px] font-medium ${
                  i === 0 && "text-primary"
                }`}
              >
                {navLink.text}
              </a>
              {navLink.hasChildren && (
                <img src={chevronDown} alt="more" width={12} height={12} />
              )}
            </div>
          ))}
        </nav>
        <div className="flex gap-4 max-lg:hidden">
          <PrimaryButton
            type="fill"
            className="py-3 px-6 rounded-2xl font-medium"
          >
            Sign Up
          </PrimaryButton>
          <PrimaryButton
            type="outline"
            className="py-3 px-6 rounded-2xl font-medium"
          >
            Login
          </PrimaryButton>
        </div>
        <div className="lg:hidden">
          <img src={menu} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
