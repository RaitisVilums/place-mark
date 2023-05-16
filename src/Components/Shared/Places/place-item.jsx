import React from "react";

import "./place-item.styles.scss";
import Button from "../../Common/Button/button";
import Map from "../Map/map";

const PlaceItem = (props) => {
  return (
    <li className="place-item">
      <div className="place-item__map">
        <div className="map">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </div>
      <div className="place-item__image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="place-item__info">
        <h2>{props.title}</h2>
        <h3>{props.address}</h3>
        <p>{props.description}</p>
      </div>
      <div className="place-item__actions">
        <Button to={`/places/${props.id}`}>EDIT</Button>
        <Button danger>DELETE</Button>
      </div>
    </li>
  );
};

export default PlaceItem;
