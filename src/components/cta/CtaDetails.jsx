import React from "react";

const CtaDetails = () => {
  return (
    <div className="flex flex-col justify-between gap-3 xl:gap-4">
      <h2 className="text-center text-xl font-semibold">
        Unlock the Ultimate{" "}
        <span className="text-primary">Gaming Experience</span>
      </h2>
      <p className="max-xl:text-xs xl:text-sm">
        Sign up now to dive into exclusive content, track your progress, and
        connect with a global community of gamers. Don’t miss out on special
        offers made just for you!
      </p>
      <div className="grid gap-3 md:grid-cols-2 md:gap-6">
        <div className="rounded-lg bg-bg2 p-3">
          <h4 className="mb-2 text-center font-medium max-xl:text-sm">
            Access <span className="text-primary">Exclusive Games</span>
          </h4>
          <p className="text-xs">
            Get early access to new releases and hidden gems, only for
            registered members. Be the first to play!
          </p>
        </div>
        <div className="rounded-lg bg-bg2 p-3">
          <h4 className="mb-2 text-center font-medium max-xl:text-sm">
            Track <span className="text-primary">Stats</span> &{" "}
            <span className="text-primary">Achievements</span>
          </h4>
          <p className="text-xs">
            Get early access to new releases and hidden gems, only for
            registered members. Be the first to play!
          </p>
        </div>
        <div className="rounded-lg bg-bg2 p-3">
          <h4 className="mb-2 text-center font-medium max-xl:text-sm">
            Join Our <span className="text-primary">Community</span>
          </h4>
          <p className="text-xs">
            Connect with a passionate community of gamers. Share tips,
            strategies, and gaming experiences
          </p>
        </div>
        <div className="rounded-lg bg-bg2 p-3">
          <h4 className="mb-2 text-center font-medium max-xl:text-sm">
            Exclusive <span className="text-primary">Discounts</span> &{" "}
            <span className="text-primary">Offers</span>
          </h4>
          <p className="text-xs">
            Enjoy member-only discounts on top-rated games, DLCs, and in-game
            items. Save on your favorites!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CtaDetails;
