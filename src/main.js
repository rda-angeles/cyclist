import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/" element={<Hero />} />
      </Routes> */}
      <Hero/>
      <About/>
    </>
  );
};

export default App;
