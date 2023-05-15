import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import "./header.styles.scss";
import { ScrollContext } from "../../../Context/scroll.context";

const Header = (props) => {
  const { isScrolled } = useContext(ScrollContext);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const className = isHomePage
    ? isScrolled
      ? "header__main"
      : "header"
    : "header__main";

  return <header className={className}>{props.children}</header>;
};

export default Header;
