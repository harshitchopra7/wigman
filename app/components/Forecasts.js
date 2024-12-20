import React from "react";

// icons
import TrendUp from "../assets/TrendUp";
import ChatLight from "../assets/overview/ChatLight";

function Forecasts() {
  return (
    <div className="bg-gradient-to-b from-[#15B79F] to-[#0E9382] shadow-[0px_5px_22px_0px_#0000000A,0px_0px_0px_1px_#0000000F] rounded-2xl p-6 text-white">
      <div className="py-2.5 pb-6 flex items-center gap-2.5">
        <ChatLight />
        <p className="text-xs font-semibold">FORECASTS</p>
      </div>

      <div>
        <div className="flex items-center">
          <p className="text-5xl font-medium">+15%</p>
          <TrendUp />
        </div>
        <p className="text-sm">
          forecasted increase in your sales closed by the end of the current
          month
        </p>
      </div>

      <div>
        <div className="flex items-center">
          <p className="text-5xl font-medium">+20%</p>
          <TrendUp />
        </div>
        <p className="text-sm">
          forecasted increase in your sales closed by the end of the current
          month
        </p>
      </div>
    </div>
  );
}

export default Forecasts;
