import React from "react";

function LevelIcon(props) {
  return (
    <div>
      <button className={props.level}>You Choosed level: {props.level}</button>
    </div>
  );
}

export default LevelIcon;
