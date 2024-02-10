import React from "react";
import Navbar from "../components/navbar/Navbar";
import LandingPage from "../components/navbar/landingPage/LandingPage";
import Marquee from "../components/navbar/marquee/Marquee";
import About from "../components/about/About";
import Eyes from "../components/eyes/Eyes";
import Featured from "../components/feautured/Featured";
import Cards from "../components/cards/Cards";
import Footer from "../components/footer/Footer";
import "./style.css";

const Home = () => {
  return (
    <div className="app">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
