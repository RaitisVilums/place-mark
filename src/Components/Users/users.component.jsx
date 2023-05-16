import React from "react";

import "./users.styles.scss";
import UserList from "../Shared/Users/user-list";
import MainWrapper from "../Common/Wrapper/wrapper";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Raitis Vilums",
      image: "",
      places: 3,
      rating: 5,
    },
    {
      id: "u2",
      name: "Sigita Visnevska",
      image: "",
      places: 3,
      rating: 5,
    },
  ];
  return (
    <MainWrapper>
      <div className="users">
        <div className="users__content">
          <h1>Our users</h1>
          <input type="search" />
          <UserList items={USERS} />
        </div>
        <div className="users__content">
          <h1>Highly rated users</h1>
          <input type="search" />
          <UserList items={USERS} />
        </div>
      </div>
      <div className="feedback">
        <h2>Feedback</h2>
        <div className="feedback__content"></div>
      </div>
    </MainWrapper>
  );
};
export default Users;
