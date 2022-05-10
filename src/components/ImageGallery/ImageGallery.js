import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "./ImageGallery.css";

// images
import cuisine from "./images/cuisine.jpg";
import service from "./images/service.jpg";
import spa from "./images/spa.jpg";
import pool from "./images/pool.jpg";
import meeting from "./images/meeting.jpg";
import bowling from "./images/bowling.jpg";
import snooker from "./images/snooker.jpg";
import temple from "./images/temple.jpg";
import kids from "./images/kids.jpg";
import gym from "./images/gym.jpg";

const galleryConfig = [
  { title: "Multi-cuisine Restaurant", image: cuisine },
  { title: "24x7 Room Service", image: service },
  { title: "Spacious Banquet & Meeting Halls", image: meeting },
  { title: "Swimming Pools", image: pool },
  { title: "Spas", image: spa },
  { title: "Bowling Alley", image: bowling },
  { title: "Snooker Table", image: snooker },
  { title: "Guided Temple Tours", image: temple },
  { title: "Kids Zone", image: kids },
  { title: "Gym", image: gym },
];
function ImageGallery() {
  return (
    <>
      <Typography variant="h3" align="center" className="galleryHeader">
        Amenities At Lavish Resorts
      </Typography>
      <Grid container className="galleryContainer">
        {galleryConfig.map((gallery) => {
          return (
            <Grid item sm={6} xs={12}>
              <img
                src={gallery.image}
                alt={gallery.title}
                className="galleryImage"
              />
              <Typography variant="h4" align="center">
                {gallery.title}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default ImageGallery;
