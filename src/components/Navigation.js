import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/" className="nav__btn">
        HOME
      </Link>
      <Link to="/about" className="nav__btn">
        ABOUT
      </Link>
    </div>
  );
};

export default Navigation;
