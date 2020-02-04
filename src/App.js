import React, { useState } from "react";
import Graph from "./Graph";
import AlgoBar from "./Algobar";
const {
  BubbleSort,
  InsertionSort,
  MergeSort,
  QuickSort,
  RadixSort,
  SelectionSort
} = require("./algorithims");

export default function App() {
  const [algo, setAlgo] = useState("Bubble Sort");

  let func;
  switch (algo) {
    case "Bubble Sort":
      func = BubbleSort;
      break;
    case "Insertion Sort":
      func = InsertionSort;
      break;
    case "Merge Sort":
      func = MergeSort;
      break;
    case "Quick Sort":
      func = QuickSort;
      break;
    case "Radix Sort":
      func = RadixSort;
      break;
    case "Selection Sort":
      func = SelectionSort;
      break;
  }

  return (
    <div>
      <AlgoBar setAlgo={setAlgo} />
      <div>Algo : {algo}</div>
      <Graph algo={func} />
    </div>
  );
}
