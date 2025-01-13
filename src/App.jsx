import BlogPosts from "./components/BlogPosts";
import Categories from "./components/Categories";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import GameOfTheMonth from "./components/GameOfTheMonth";
import GamesByFilter from "./components/GamesByFilter";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Trending from "./components/Trending";
import Upcoming from "./components/Upcoming";

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
