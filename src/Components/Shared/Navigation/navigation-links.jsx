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
        <NavLink to={"/my-places"} className={`main-navigation__item`}>
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
          to={"/login"}
          className={`main-navigation__item main-navigation__item--login`}
        >
          log in
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/signup"}
          className={`main-navigation__item main-navigation__item--signup`}
        >
          sign up
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
