import React from "react";
import { NavLink } from "react-router-dom";

import "./navigation-links.styles.scss";

const NavLinks = () => {
  return (
    <ul className="main-navigation__items">
      <li>
        <NavLink to={"/"} className={`main-navigation__item`}>
          home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/users"} className={`main-navigation__item`}>
          users
        </NavLink>
      </li>
      <li>
        <NavLink to={"/add-place"} className={`main-navigation__item`}>
          add place
        </NavLink>
      </li>
      <li>
        <NavLink to={`/:userId/places`} className={`main-navigation__item`}>
          my places
        </NavLink>
      </li>
      <li>
        <NavLink to={"/profile"} className={`main-navigation__item`}>
          profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/auth"}
          className={`main-navigation__item main-navigation__item--login`}
        >
          log in
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
