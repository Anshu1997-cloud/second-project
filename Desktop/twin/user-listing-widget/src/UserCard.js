import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.picture} alt={`${user.name.first} ${user.name.last}`} />
      <div className="user-details">
        <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
        <p>{`${user.location.city}, ${user.location.country}`}</p>
      </div>
    </div>
  );
};

export default UserCard;