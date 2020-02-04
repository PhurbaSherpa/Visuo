import React from "react";

export default function Algobar(props) {
  return (
    <div id="algo-container">
      <button
        onClick={() => {
          props.setAlgo("Bubble Sort");
        }}
        class="algo"
        type="button"
      >
        Bubble Sort
      </button>
      <button
        onClick={() => {
          props.setAlgo("Insertion Sort");
        }}
        class="algo"
        type="button"
      >
        Insertion Sort
      </button>
      <button
        onClick={() => {
          props.setAlgo("Merge Sort");
        }}
        class="algo"
        type="button"
      >
        Merge Sort
      </button>
      <button
        onClick={() => {
          props.setAlgo("Quick Sort");
        }}
        class="algo"
        type="button"
      >
        Quick Sort
      </button>
      <button
        onClick={() => {
          props.setAlgo("Radix Sort");
        }}
        class="algo"
        type="button"
      >
        Radix Sort
      </button>
      <button
        onClick={() => {
          props.setAlgo("Selection Sort");
        }}
        class="algo"
        type="button"
      >
        Selection Sort
      </button>
    </div>
  );
}
