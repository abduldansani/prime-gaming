import { arrowLeft, arrowRight, chevronRight } from "../assets";
import { blogPosts } from "../constants/BlogPosts";
import Section from "./shared/Section";

const BlogPosts = () => {
  return (
    <Section>
      <div className="relative container space-y-6 xl:space-y-8">
        <div className="absolute w-1/4 h-full bg-violetLight blur-[250px] right-0 -z-10" />
        <div className="flex justify-between">
          <div className="flex gap-12 items-center">
            <h2 className="text-xl lg:text-2xl font-semibold lg:font-bold">
              Blog Post
            </h2>
            <button className="max-lg:hidden text-primary text-lg font-medium flex items-center gap-2">
              <div className="">View All</div>
              <img src={chevronRight} alt="-" width={16} height={16} />
            </button>
          </div>
          <div className="max-lg:hidden space-y-2">
            <div className="flex items-center gap-2.5">
              <button className="border-2 border-white w-11 h-8 rounded-lg flex items-center justify-center">
                <img src={arrowLeft} alt="previous" />
              </button>
              <button className="border-2 border-white w-11 h-8 rounded-lg flex items-center justify-center">
                <img src={arrowRight} alt="next" />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-7 h-3 rounded-lg bg-primary" />
              <div className="size-[7px] rounded-full bg-violet" />
              <div className="size-[7px] rounded-full bg-violet" />
              <div className="size-[7px] rounded-full bg-violet" />
            </div>
          </div>
          <button className="lg:hidden text-primary text-sm font-light flex items-center gap-2">
            <div className="">View All</div>
            <img src={chevronRight} alt="-" width={16} height={16} />
          </button>
        </div>

        {/* TODO: Make them flex on small screen */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {blogPosts.map((post, i) => (
            <div
              key={post.id}
              className={`relative flex flex-col justify-end bg-cover bg-center rounded-lg ${
                i === 0
                  ? "gap-2 lg:gap-3 col-span-2 lg:row-span-2 h-[380px] p-3 xl:py-4 xl:px-5"
                  : "gap-1 h-[186px] p-2"
              }`}
              style={{ backgroundImage: `url(${post.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <h3
                className={`z-10 ${
                  i === 0 ? "text-xl font-semibold" : " font-medium"
                }`}
              >
                {post.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BlogPosts;
