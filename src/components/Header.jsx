import { useState } from "react";
import { chevronDown, close, menu, searchIcon } from "../assets";
import { navLinks } from "../constants/navLinks";
import Logo from "./shared/Logo";
import PrimaryButton from "./shared/PrimaryButton";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

export const headerVar = {
  visible: { y: 0, transition: { duration: 0.35, ease: "easeInOut" } },
  hidden: { y: "-100%", transition: { duration: 0.35, ease: "easeInOut" } },
};

const menuVar = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: "0%",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 350) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.header
      variants={headerVar}
      animate={hidden ? "hidden" : "visible"}
      className="z-50 py-3 lg:py-2.5 xl:py-3 fixed top-0 left-0 bg-bg right-0 bg-opacity-[15%] backdrop-blur-md"
    >
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
        <button onClick={() => setMenuOpen(true)} className="lg:hidden">
          <img src={menu} alt="menu" width={36} height={36} />
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVar}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-bg w-screen h-screen fixed top-0 p-4 flex flex-col"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button onClick={() => setMenuOpen(false)}>
                <img src={close} alt="close" width={36} height={36} />
              </button>
            </div>
            <nav className="relative flex-1 flex flex-col items-center gap-4 justify-center font-semibold text-lg">
              <div className="absolute -z-10 w-1/4 h-1/3 rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-violetLight blur-[100px]" />
              {navLinks.map((link) => (
                <a key={link.id} href="" className="">
                  {link.text}
                </a>
              ))}
              <div className="flex gap-4 mt-8">
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
