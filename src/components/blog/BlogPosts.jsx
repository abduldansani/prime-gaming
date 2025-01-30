import { useState } from "react";
import { blogPosts } from "../../constants/BlogPosts";
import Section from "../shared/Section";
import Controls from "./Controls";
import SmallScreenView from "./SmallScreenView";
import LargeScreenView from "./LargeScreenView";

import { motion } from "motion/react";
import { revealVar } from "../../motion/opacityReveal";

const BlogPosts = () => {
  const [viewAll, setViewAll] = useState(false);
  const handleViewAll = () => setViewAll((prev) => !prev);
  return (
    <Section>
      <motion.div
        variants={revealVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container relative space-y-6 xl:space-y-8"
      >
        <div className="absolute right-0 -z-10 h-full w-1/4 bg-violetLight blur-[250px]" />
        <Controls viewAll={viewAll} onViewALl={handleViewAll} />

        <div className="grid grid-cols-2 gap-2 max-md:hidden lg:grid-cols-4">
          {blogPosts.map((post, i) => (
            <LargeScreenView key={post.id} post={post} i={i} />
          ))}
        </div>

        <div
          className={`md:hidden ${
            viewAll
              ? "grid gap-x-2 gap-y-3 sm:grid-cols-2"
              : "flex gap-3 overflow-x-scroll no-scrollbar"
          }`}
        >
          {blogPosts.map((post) => (
            <SmallScreenView key={post.id} viewAll={viewAll} post={post} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default BlogPosts;
