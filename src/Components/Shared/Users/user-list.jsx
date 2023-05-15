import React from "react";

import "./user-list.styles.scss";
import UserItem from "./user-item";

const UserList = (props) => {
  if (props.items.lenght === 0) {
    return (
      <div className="error-message">
        <h1>No users found!</h1>
      </div>
    );
  }
  console.log(props.items);
  return (
    <ul className="user-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UserList;
