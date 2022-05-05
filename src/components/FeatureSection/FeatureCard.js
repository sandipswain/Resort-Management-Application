import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./Feature.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    height: 350,
    backgroundColor: " #edf9ed",
    borderRadius: 10,
  },
  textCenter: {
    textAlign: "center",
  },
});
function FeatureCard({ card }) {
  console.log("card", card);
  const classes = useStyles();
  return (
    <>
      <Card className="featureCard">
        <CardActionArea className={classes.root}>
          <Grid container alignItems="center" justifyContent="center">
            <card.iconName className="iconSize" />
          </Grid>
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="h2"
              className={classes.textCenter}
            >
              {card.header}
            </Typography>
            <Typography
              variant="h5"
              color="textSecondary"
              component="p"
              className={classes.textCenter}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              inventore quasi dignissimos, voluptatem cupiditate sunt tempore
              tenetur quam commodi temporibus.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default FeatureCard;
