import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card"onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img src={props.image} />
    </div>

  </div>
);

export default FriendCard;
