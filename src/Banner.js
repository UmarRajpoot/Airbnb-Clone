import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Banner.css";
import Search from "./Search";

const Banner = () => {
  const history = useHistory();
  const [ShowSearch, SetShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        <Button onClick={() => SetShowSearch(!ShowSearch)} variant="outlined">
          {ShowSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      {ShowSearch && <Search />}
      <div className="banner__info">
        <h1>Get Out and stretch your imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;
