import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Button, Toolbar, Typography } from "@material-ui/core";
import DeckIcon from "@material-ui/icons/Deck";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "./Navbar.css";
import { Link } from "react-router-dom";

const links = [
  {
    path: "",
    text: "Home",
  },
  {
    path: "about",
    text: "About Us",
  },
  {
    path: "contact",
    text: "Contact Us",
  },
  {
    path: "gallery",
    text: "Gallery",
  },
];
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    window.innerWidth <= 960 ? setButton(false) : setButton(true);
  };
  window.addEventListener("resize", showButton);
  useEffect(() => {
    showButton();
  }, []);
  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <DeckIcon className="navbar-icon" />
              <Typography variant="h4">Lavish</Typography>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? (
                <CloseIcon className="icon" />
              ) : (
                <MenuIcon className="icon" />
              )}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {links.map((link) => {
                return (
                  <div className="nav-item">
                    <Link
                      to={`/${link.path}`}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      {link.text}
                    </Link>
                  </div>
                );
              })}
              <li className="nav-btn">
                {button ? (
                  <Link to="sign-up" className="btn--link">
                    <Button variant="outlined" className="btn btn--outline">
                      Sign Up
                    </Button>
                  </Link>
                ) : (
                  <Link
                    to="sign-up"
                    className="btn--link"
                    onClick={closeMobileMenu}
                  >
                    <Button variant="outlined" className="btn--mobile">
                      Sign Up
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
