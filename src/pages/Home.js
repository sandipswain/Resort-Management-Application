import React from "react";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import ResortContainer from "../components/ResortImage/ResortContainer";

const Home = () => {
  return (
    <>
      <HeroComponent />
      <FeatureSection />
      <ResortContainer />
    </>
  );
};

export default Home;
