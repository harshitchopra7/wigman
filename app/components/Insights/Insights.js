import React from "react";

// internal components
import Graph from "../Graph";
import ComparisonChart from "../ComparisonChart";
import Forecasts from "../Forecasts";

function Insights() {
  return (
    <div>
      <p className="text-3xl font-medium">Insights</p>

      <div className="my-10 flex flex-col xl:flex-row items-center gap-5">
        <Graph />
        <ComparisonChart />
        <Forecasts />
      </div>
    </div>
  );
}

export default Insights;
