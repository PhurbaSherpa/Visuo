import React from "react";

export default function Bar(props) {
  return (
    <div class="bar-container">
      <div>{props.value}</div>
      <div class="bar" style={{ height: `${props.value}%` }}></div>
    </div>
  );
}
