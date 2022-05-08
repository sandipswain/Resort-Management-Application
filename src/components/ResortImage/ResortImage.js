import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "./Resort.css";

function ResortImage({ imageData }) {
  return (
    <div>
      <Grid container className="resortContainer">
        {imageData.map((data, i) => {
          return (
            <div
              key={data.header}
              className={i % 2 === 0 ? "imageDiv" : "imageDivRev"}
            >
              <Grid item className="headerContainer" key={data.header}>
                <Typography variant="h3" className="resortText">
                  {data.header}
                </Typography>
                <Typography variant="body2">{data.description}</Typography>
              </Grid>
              <Grid item className="imageContainer">
                <img src={data.image} alt="" className="resortImage" />
              </Grid>
            </div>
          );
        })}
      </Grid>
    </div>
  );
}

export default ResortImage;
