import React from "react";
import { useParams } from "react-router-dom";

import "./place.styles.scss";
import PlaceList from "../Shared/Places/place-list";
import MainWrapper from "../Common/Wrapper/wrapper";

const PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nisi amet delectus incidunt, fuga saepe deserunt autem magni laudantium?",
    imageUrl: "",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nisi amet delectus incidunt, fuga saepe deserunt autem magni laudantium?",
    imageUrl: "",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const Place = () => {
  const params = useParams();
  const userID = params.userId;

  const loadedPlaces = PLACES.filter((place) => place.creator === userID);

  return (
    <MainWrapper>
      <div className="place">
        <h2 className="place__heading">User Name Shared Places</h2>
        <PlaceList items={loadedPlaces} />
      </div>
    </MainWrapper>
  );
};

export default Place;
