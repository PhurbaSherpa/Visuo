import React, { useState } from "react";
import Bar from "./Bar";
const generateArr = require("./algorithims/generateNewArr");
const compareArrays = require("./algorithims/compareArr");

export default function Graph(props) {
  const [arr, setArr] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [permanent, setPermanent] = useState([]);

  return (
    <div>
      <div id="generateArr">
        <button
          onClick={async () => {
            let arr = generateArr();
            setPermanent([]);
            setArr(arr);
            setSorted([...arr].sort((a, b) => a - b));
          }}
          type="button"
        >
          Generate New Array
        </button>
        <button
          onClick={() => {
            let sort = setInterval(() => {
              console.log(compareArrays(arr, sorted));
              if (compareArrays(arr, sorted)) clearInterval(sort);
              let index = permanent[permanent.length - 1]
                ? permanent[permanent.length - 1] + 1
                : 1;
              let returnObj = props.func(arr, index);
              let newArr = returnObj.arr;
              permanent.push(returnObj.index);
              console.log(permanent);
              setPermanent([...permanent]);
              setArr([...newArr]);
            }, 1000);
          }}
        >
          Sort
        </button>
      </div>
      <div id="bars-container">
        {compareArrays(arr, sorted)
          ? arr.map((value, index) => {
              return (
                <Bar
                  recheck={false}
                  value={value}
                  permanent={true}
                  index={index}
                  key={index}
                />
              );
            })
          : props.algo === "Bubble Sort"
          ? arr.map((value, index) => {
              let changeColor = false;
              if (permanent.includes(index)) {
                changeColor = true;
              } else if (permanent[permanent.length - 1] < index) {
                changeColor = true;
              }

              return (
                <Bar
                  value={value}
                  permanent={changeColor}
                  index={index}
                  key={index}
                />
              );
            })
          : props.algo === "Insertion Sort"
          ? arr.map((value, index) => {
              let changeColor = false;
              if (permanent.includes(index)) changeColor = true;
              else if (permanent[permanent.length - 1] > index) {
                changeColor = true;
              }
              return (
                <Bar
                  value={value}
                  permanent={changeColor}
                  index={index}
                  key={index}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
