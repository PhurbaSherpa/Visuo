import React, { useState } from "react";
import Bar from "./Bar";
const generateArr = require("./algorithims/generateNewArr");

export default function Graph(props) {
  const [arr, setArr] = useState([]);
  console.log(arr);

  return (
    <div>
      <div id="generateArr">
        <button
          onClick={() => {
            let arr = generateArr();
            setArr(arr);
          }}
          type="button"
        >
          Generate New Array
        </button>
        <button
          onClick={() => {
            let newArr = props.algo(arr);
            setArr([...newArr]);
          }}
        >
          Sort
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
