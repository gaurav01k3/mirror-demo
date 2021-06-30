import React from "react";
import { useHistory } from "react-router-dom";
import "../CSS/Header.css";
import Upper from "./Upper";
import IntroCarousel from "./IntroCarousel";
import Count from "./Count";
import MediaCard from "./MediaCard";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";

const Header = () => {
  const history = useHistory();
  const deleteJwt = () => {
    localStorage.clear("jwt");
    history.push("/login");
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__wrapper">
          <div className="navbar__logo">Mirror</div>
          <div className="navbar__list">
            <div className="navbar__listItem">
              <a href="#vids">
                <Button variant="contained" color="primary">
                  Videos Lectures
                </Button>
              </a>
            </div>
            <div className="navbar__listItem">
              <Button variant="contained" color="primary">
                Study Material
              </Button>
            </div>
            <div className="navbar__listItem">
              <Button variant="contained" color="primary">
                Live Videos
              </Button>
            </div>
            <div className="navbar__listItem">
              <Button variant="contained" color="secondary">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Upper />
      <Count />
      <IntroCarousel />
      <MediaCard />
      <Footer />
    </>
  );
};

export default Header;
