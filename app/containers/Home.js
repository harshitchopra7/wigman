import React from "react";

// internal components
import Overview from "../components/Overview/Overview";
import Insights from "../components/Insights/Insights";
import Orders from "../components/Orders/Orders";

function Home() {
  return (
    <div className="shadow-[0px_5px_22px_0px_#0000000A,0px_0px_0px_1px_#0000000F] rounded-2xl p-7 px-6 my-7">
      <Overview />
      <Insights />
      <Orders />
    </div>
  );
}

export default Home;
