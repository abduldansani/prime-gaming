import { email, google, user } from "../assets";
import Section from "./shared/Section";

const Cta = () => {
  return (
    <Section>
      <div className="relative container flex max-lg:flex-col gap-4 xl:gap-6">
        <div className="absolute w-1/4 h-full bg-violetLight blur-[250px] right-0 -z-10" />
        <div className="flex flex-col gap-3 xl:gap-4 justify-between">
          <h2 className="font-semibold text-xl text-center">
            Unlock the Ultimate{" "}
            <span className="text-primary">Gaming Experience</span>
          </h2>
          <p className="max-xl:text-xs xl:text-sm">
            Sign up now to dive into exclusive content, track your progress, and
            connect with a global community of gamers. Don’t miss out on special
            offers made just for you!
          </p>
          <div className="grid md:grid-cols-2 gap-3 md:gap-6">
            <div className="p-3 rounded-lg bg-bg2">
              <h4 className="max-xl:text-sm font-medium text-center mb-2">
                Access <span className="text-primary">Exclusive Games</span>
              </h4>
              <p className="text-xs">
                Get early access to new releases and hidden gems, only for
                registered members. Be the first to play!
              </p>
            </div>
            <div className="p-3 rounded-lg bg-bg2">
              <h4 className="max-xl:text-sm font-medium text-center mb-2">
                Track <span className="text-primary">Stats</span> &{" "}
                <span className="text-primary">Achievements</span>
              </h4>
              <p className="text-xs">
                Get early access to new releases and hidden gems, only for
                registered members. Be the first to play!
              </p>
            </div>
            <div className="p-3 rounded-lg bg-bg2">
              <h4 className="max-xl:text-sm font-medium text-center mb-2">
                Join Our <span className="text-primary">Community</span>
              </h4>
              <p className="text-xs">
                Connect with a passionate community of gamers. Share tips,
                strategies, and gaming experiences
              </p>
            </div>
            <div className="p-3 rounded-lg bg-bg2">
              <h4 className="max-xl:text-sm font-medium text-center mb-2">
                Exclusive <span className="text-primary">Discounts</span> &{" "}
                <span className="text-primary">Offers</span>
              </h4>
              <p className="text-xs">
                Enjoy member-only discounts on top-rated games, DLCs, and
                in-game items. Save on your favorites!
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl p-2 xl:p-4 bg-bg2 lg:w-1/2 shrink-0 flex gap-2 xl:gap-4 md:justify-around flex-col">
          <div className="flex gap-2 flex-col">
            <div className="flex items-center gap-4 justify-center">
              <div className="flex gap-1 flex-col items-center">
                <div className="text-primary text-xl xl:text-2xl font-bold">
                  Signup
                </div>
                <div className="w-full h-1 bg-primary"></div>
              </div>
              <div className="xl:text-xl font-semibold text-primaryLight">
                Login
              </div>
            </div>
            <label className="font-medium space-y-2">
              Name
              <div className="border-2 border-white rounded px-1 py-2 flex items-center gap-1">
                <img src={user} alt="-" />
                <input
                  type="text"
                  className="flex-1 outline-none text-[10px] bg-transparent px-2"
                  placeholder="Enter Your Name"
                />
              </div>
            </label>
            <label className="font-medium space-y-2">
              Email
              <div className="border-2 border-white rounded px-1 py-2 flex items-center gap-1">
                <img src={email} alt="-" />
                <input
                  type="text"
                  className="flex-1 outline-none text-[10px] bg-transparent px-2"
                  placeholder="Enter Your E-Mail"
                />
              </div>
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <button className="w-full rounded font-medium p-3 bg-primary">
              Sign Up
            </button>
            <div className="flex items-center gap-1.5">
              <div className="flex-1 h-px bg-white" />
              <div className="font-medium">Or</div>
              <div className="flex-1 h-px bg-white" />
            </div>
            <button className="w-full rounded font-medium p-2 border border-white flex justify-center gap-2">
              <img src={google} alt="-" />
              <div className="">Sign Up With Google</div>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Cta;
