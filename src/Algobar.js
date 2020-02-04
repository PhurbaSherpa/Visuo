import React from "react";

export default function Algobar(props) {
  return (
    <div id="algo-container">
      <button
        onClick={() => {
          props.setAlgo("Bubble Sort");
        }}
        className="algo"
        type="button"
      >
        Bubble Sort
      </button>
      <button
        onClick={() => {
          props.setAlgo("Insertion Sort");
        }}
        className="algo"
        type="button"
      >
        Insertion Sort
      </button>
      <button
        onClick={() => {
          props.setAlgo("Merge Sort");
        }}
        className="algo"
        type="button"
      >
        Merge Sort
      </button>
      <button
        onClick={() => {
          props.setAlgo("Quick Sort");
        }}
        className="algo"
        type="button"
      >
        Quick Sort
      </button>
      <button
        onClick={() => {
          props.setAlgo("Radix Sort");
        }}
        className="algo"
        type="button"
      >
        Radix Sort
      </button>
      <button
        onClick={() => {
          props.setAlgo("Selection Sort");
        }}
        className="algo"
        type="button"
      >
        Selection Sort
      </button>
    </div>
  );
}
