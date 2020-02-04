import React, { useState } from "react";
import Bar from "./Bar";

export default function Graph() {
  const [arr, setArr] = useState([]);

  return (
    <div>
      <button
        onClick={() => {
          let arr = new Array(15).fill(0).map(function(n) {
            return Math.floor(Math.random() * (100 - 1) + 1);
          });
          setArr(arr);
        }}
        type="button"
      >
        Generate New Array
      </button>
      {arr.map((value, index) => {
        return (
          <div class="bar" key={index}>
            {value}
          </div>
        );
      })}
    </div>
  );
}
