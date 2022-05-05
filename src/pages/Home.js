import { Divider } from "@material-ui/core";
import React from "react";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import HeroComponent from "../components/HeroComponent/HeroComponent";

const Home = () => {
  return (
    <>
      <HeroComponent />
      <Divider />
      <FeatureSection />
    </>
  );
};

export default Home;
