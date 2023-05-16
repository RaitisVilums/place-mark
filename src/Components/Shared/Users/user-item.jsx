import React from "react";
import { Link } from "react-router-dom";

import "./user-item.styles.scss";
import ProfileImage from "../../../Assets/travel-bg-2.jpg";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Link to={`/${props.id}/places`}>
        <div className="user-item__image">
          <img src={ProfileImage} alt={`profile`} />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>
            {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
          </h3>
        </div>
      </Link>
    </li>
  );
};

export default UserItem;
