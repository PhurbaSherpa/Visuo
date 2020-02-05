import React, { useState } from "react";
import Bar from "./Bar";
const generateArr = require("./algorithims/generateNewArr");
const compareArrays = require("./algorithims/compareArr");

export default function Graph(props) {
  const [arr, setArr] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [permanent, setPermanent] = useState([]);
  const [stack, setStack] = useState([]);

  return (
    <div>
      <div id="generateArr">
        <button
          onClick={async () => {
            let arr = generateArr();
            setPermanent([]);
            setStack([]);
            setArr(arr);
            setSorted([...arr].sort((a, b) => a - b));
          }}
          type="button"
        >
          Generate New Array
        </button>
        <button
          onClick={() => {
            let newArr = arr;
            let sort = setInterval(() => {
              if (newArr.length === 1) newArr = newArr[0];
              if (compareArrays(newArr, sorted)) {
                clearInterval(sort);
              } else {
                if (props.algo === "Quick Sort") {
                  let returnObj = props.func(newArr, stack);
                  let newStack = returnObj.stack;
                  setStack([...newStack]);
                  newArr = returnObj.arr;
                } else {
                  let index = permanent[permanent.length - 1]
                    ? permanent[permanent.length - 1] + 1
                    : 1;
                  let returnObj = props.func(newArr, index);
                  newArr = returnObj.arr;
                  permanent.push(returnObj.index);
                  setPermanent([...permanent]);
                }
                setArr([...newArr]);
              }
            }, 500);
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
          : props.algo === "Merge Sort"
          ? arr.map((inner, index) => {
              let changeColor = false;
              if (index % 2 === 0) changeColor = true;
              console.log(changeColor);
              if (Array.isArray(inner)) {
                return inner.map((value, index) => {
                  // console.log(value);
                  return (
                    <Bar
                      value={value}
                      permanent={changeColor}
                      index={index}
                      key={index}
                    />
                  );
                });
              } else {
                return <Bar value={inner} index={index} key={index} />;
              }
            })
          : props.algo === "Quick Sort"
          ? arr.map((value, index) => {
              let permanent = false;
              if (stack.length > 0) {
                if (stack[0].includes(index)) {
                  permanent = true;
                }
              }
              return (
                <Bar
                  permanent={permanent}
                  value={value}
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
