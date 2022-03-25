import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./HeroComponent.css";

const HeroComponent = () => {
  return (
    <>
      <div className="heroImage">
        <div className="heroImage__textBox">
          <Typography variant="h1" className="heroImage-primary">
            <span className="heroImage-primary--main">Outdoors</span>
            <span className="heroImage-primary--sub">
              is where life happens
            </span>
          </Typography>
          <Link to="/" className="btn btn--white btn--animated">
            Discover our services
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
