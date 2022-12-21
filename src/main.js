import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Featured from "./components/Featured/Featured";
import MostViewed from "./components/Featured/MostViewed";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";

import {
  topRated,
  topLuxury,
  mostViewed,
} from "./components/Featured/FeaturedData";

import { images } from "./components/Gallery/GalleryData";
const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/" element={<Hero />} />
      </Routes> */}
      <Hero />
      <About />
      <Featured featured={topRated} />
      <MostViewed {...mostViewed} />
      <Gallery images={images} />
      <Footer />
      {/* <Featured featured={topLuxury} /> */}
    </>
  );
};

export default App;
