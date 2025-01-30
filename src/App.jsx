import BlogPosts from "./components/blog/BlogPosts";
import Categories from "./components/Categories";
import Cta from "./components/cta/Cta";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import GameOfTheMonth from "./components/gameOfTheMonth/GameOfTheMonth";
import GamesByFilter from "./components/allGames/GamesByFilter";
import Hero from "./components/Hero";
import Reviews from "./components/reviews/Reviews";
import Trending from "./components/trending/Trending";
import Upcoming from "./components/upcoming/Upcoming";

function App() {
  return (
    <>
      <Hero />
      <Categories />
      <Trending />
      <GameOfTheMonth />
      <Reviews />
      <Upcoming />
      <GamesByFilter />
      <BlogPosts />
      <Cta />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
