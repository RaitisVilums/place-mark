import React from "react";

import "./navigation.styles.scss";
import Header from "../../Common/Header/header";
import NavLinks from "./navigation-links";

const Navigation = () => {
  return (
    <Header home>
      <h1>PlaceMark</h1>
      <nav className="main-navigation">
        <NavLinks />
      </nav>
    </Header>
  );
};

export default Navigation;
