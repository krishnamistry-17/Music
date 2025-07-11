import React from "react";

const Card = ({ user }) => {
  return (
    <div>
      <div>
        <p>Id:{user.id}</p>
        <p style={{ color: "black" }}>Name:{user?.name?.[0]}</p>
        <p>Email:{user.email}</p>
        <p>Username:{user.username}</p>
      </div>
    </div>
  );
};

export default Card;
