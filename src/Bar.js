import React from "react";

export default function Bar(props) {
  let color = "orange";
  let donecolor = "green";
  return props.done ? (
    <div className="bar-container">
      <div>{props.value}</div>
      <div
        className="bar"
        style={{ height: `${props.value}%`, backgroundColor: `${donecolor}` }}
      ></div>
    </div>
  ) : props.permanent ? (
    <div className="bar-container">
      <div>{props.value}</div>
      <div
        className="bar"
        style={{ height: `${props.value}%`, backgroundColor: `${color}` }}
      ></div>
    </div>
  ) : (
    <div className="bar-container">
      <div>{props.value}</div>
      <div className="bar" style={{ height: `${props.value}%` }}></div>
    </div>
  );
}
