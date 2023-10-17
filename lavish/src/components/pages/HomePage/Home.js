import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";
import Footer from "../Footer/Footer";
import Pricing from "../../Pricing";

const Home = () => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
      <Footer />
    </>
  );
};

export default Home;
