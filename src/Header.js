import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ExpandMore, Language } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt=""
        />
      </Link>

      <div className="header__center">
        <input />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
