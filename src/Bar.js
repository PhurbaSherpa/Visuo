import React from "react";

export default function Bar(props) {
  return (
    <div className="bar-container">
      <div>{props.value}</div>
      <div className="bar" style={{ height: `${props.value}%` }}></div>
    </div>
  );
}
