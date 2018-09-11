import React from "react";
import "./Title.css";

const Title = props => (
    <div className="Title">
      <div className="Title">{props.children}</div>
      <div className="scores">
        Score: {props.score} Highscore: {props.highscore}
      </div>
    </div>
  );
export default Title;
