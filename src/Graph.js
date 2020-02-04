import React, { useState } from "react";
import Bar from "./Bar";

export default function Graph() {
  const [arr, setArr] = useState([]);

  return (
    <div>
      <div id="generateArr">
        <button
          onClick={() => {
            let arr = new Array(20).fill(0).map(function(n) {
              return Math.floor(Math.random() * (100 - 1) + 1);
            });
            setArr(arr);
          }}
          type="button"
        >
          Generate New Array
        </button>
      </div>

      <div id="bars-container">
        {arr.map((value, index) => {
          return <Bar value={value} key={index} />;
        })}
      </div>
    </div>
  );
}
