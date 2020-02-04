import React, { useState } from "react";
import Graph from "./Graph";
import AlgoBar from "./Algobar";

export default function App() {
  const [algo, setAlgo] = useState("Choose a Sorting Algorithim");

  return (
    <div>
      <AlgoBar setAlgo={setAlgo} />
      <div>Algo : {`${algo}`}</div>
      <Graph />
    </div>
  );
}
