import { useEffect, useState } from "react";
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
  useEffect(() => {
    menuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  return (
    <motion.header
      variants={headerVar}
      animate={hidden ? "hidden" : "visible"}
      className="fixed left-0 right-0 top-0 z-50 bg-bg bg-opacity-[15%] py-3 backdrop-blur-md lg:py-2.5 xl:py-3"
    >
      <div className="container flex items-center justify-between gap-5">
        <div className="flex items-center gap-5">
          <Logo />
          <div className="flex size-9 items-center justify-center rounded-full bg-primary lg:size-[44px]">
            <img
              src={searchIcon}
              alt="search"
              className="size-[18px] lg:size-5"
            />
          </div>
        </div>
        <nav className="flex flex-1 items-center justify-around max-lg:hidden">
          {navLinks.map((navLink, i) => (
            <div key={navLink.id} className="flex items-center gap-1">
              <a
                href={navLink.url}
                className={`text-sm font-medium xl:text-[15px] ${
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
            className="rounded-2xl px-6 py-3 font-medium"
          >
            Sign Up
          </PrimaryButton>
          <PrimaryButton
            type="outline"
            className="rounded-2xl px-6 py-3 font-medium"
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
            className="fixed top-0 flex h-screen w-screen flex-col bg-bg p-4 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button onClick={() => setMenuOpen(false)}>
                <img src={close} alt="close" width={36} height={36} />
              </button>
            </div>
            <nav className="relative mt-20 flex flex-1 flex-col items-center gap-4 text-lg font-semibold">
              <div className="absolute left-1/2 top-1/2 -z-10 h-1/3 w-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violetLight blur-[100px]" />
              {navLinks.map((link) => (
                <a key={link.id} href="" className="">
                  {link.text}
                </a>
              ))}
              <div className="mt-8 flex gap-4">
                <PrimaryButton
                  type="fill"
                  className="rounded-2xl px-6 py-3 font-medium"
                >
                  Sign Up
                </PrimaryButton>
                <PrimaryButton
                  type="outline"
                  className="rounded-2xl px-6 py-3 font-medium"
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
