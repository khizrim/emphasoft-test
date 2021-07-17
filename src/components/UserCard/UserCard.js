import React from 'react';

import getTime from '../../utils/getTime';

import './UserCard.css';

function UserCard(props) {
  const { user } = props;

  return (
    <div className="user-card">
      <div className="user-card__heading">
        <div
          className={`user-card__user-status ${
            user.is_active && 'user-card__user-status_active'
          }`}
        />
        <h2 className="user-card__username">{user.username}</h2>
        <p className="user-card__fullname">
          {`${user.first_name ? user.first_name : ''} ${
            user.last_name ? user.last_name : ''
          }`}
        </p>
      </div>
      <div className="user-card__info">
        <p className="user-card__user-id">{user.id}</p>
        {user.last_login && (
          <p className="user-card__last-login">{getTime(user.last_login)}</p>
        )}
      </div>
    </div>
  );
}

export default UserCard;
