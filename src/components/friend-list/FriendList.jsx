import React from "react";
import PropTypes from "prop-types";
import style from "./FriendList.module.css";

function FriendList({ friends }) {
  const onLine = "green";
  const offLine = "red";

  return (
    <ul className={style.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={style.friendListItem}>
          <span
            className={style.status}
            style={
              friend.isOnline ? { background: onLine } : { background: offLine }
            }
          ></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.defaultProps = {
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg",
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
