import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import DeckIcon from "@material-ui/icons/Deck";
import { Link } from "react-router-dom";
import { links } from "../FormComponent/formConfig";
import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";

const footerIcons = [
  { iconName: Twitter },
  { iconName: Instagram },
  { iconName: Facebook },
  { iconName: YouTube },
];
function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer-iconContainer">
        <ul className="footer-links">
          {links.map((link) => {
            return (
              <Link
                to={`/${link.path}`}
                className="footer-link"
                key={link.text}
              >
                {link.text}
              </Link>
            );
          })}
        </ul>
        <ul className="footer-links socialContainer">
          <Typography variant="h4" className="socialHeader">
            Get in Touch
          </Typography>
          <div className="socialIconContainer">
            {footerIcons.map((footerIcon) => {
              return (
                <Link to={`/`} className="footer-link">
                  <footerIcon.iconName className="social-icons" />
                </Link>
              );
            })}
          </div>
        </ul>
      </div>
      <Link to="/" className="footer-logo">
        <DeckIcon className="footer-icon" />
        <Typography variant="h4" className="footer-text">
          Lavish
        </Typography>
      </Link>
    </div>
  );
}

export default Footer;
