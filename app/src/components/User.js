import React from "react";

const User = ({ user }) => {
  return (
    <>
      <img alt="alt" src={user.picture.large} />
      <h3>{user.name.first}</h3>
      <p>{user.name.last}</p>
    </>
  );
};

export default User;
