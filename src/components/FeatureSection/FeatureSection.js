import React from "react";
import FeatureCard from "./FeatureCard";
import LanguageIcon from "@material-ui/icons/Language";
import EmojiNatureIcon from "@material-ui/icons/EmojiNature";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./Feature.css";
import { Grid } from "@material-ui/core";

const cardConfig = [
  {
    iconName: LanguageIcon,
    header: "Explore the beauty",
  },
  {
    iconName: EmojiNatureIcon,
    header: "Meet Nature",
  },
  {
    iconName: ExploreIcon,
    header: "Find Your Way",
  },
  {
    iconName: FavoriteBorderIcon,
    header: "Live a Healthier Life",
  },
];

function FeatureSection() {
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      className="featureSection"
    >
      {cardConfig.map((card) => (
        <Grid item xs={2} sm={2} key={card.header}>
          <FeatureCard card={card} />
        </Grid>
      ))}
    </Grid>
  );
}

export default FeatureSection;
