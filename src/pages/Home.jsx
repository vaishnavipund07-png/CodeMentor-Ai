import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Stats from "../components/Stats";
import Features from "../components/Features";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Stats />
      <Features />
    </>
  );
}

export default Home;