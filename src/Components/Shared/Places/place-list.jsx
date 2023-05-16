import React from "react";

import "./place-list.styles.scss";

import PlaceItem from "./place-item";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list">
        <h1>No Places yet</h1>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
