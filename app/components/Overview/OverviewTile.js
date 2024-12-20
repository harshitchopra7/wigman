import React from "react";

// icons
import DecreaseIcon from "@/app/assets/DecreaseIcon";
import IncreaseIcon from "@/app/assets/IncreaseIcon";

const PERCENT_TYPE = {
  INCREASE: "increase",
  DECREASE: "decrease",
};

function OverviewTile({ overview }) {
  return (
    <div className="rounded-2xl shadow-[0px_5px_22px_0px_#0000000A,0px_0px_0px_1px_#0000000F] w-full sm:w-[32%] p-5">
      <div className="flex items-center gap-2.5">
        {overview.icon}
        <p className="text-xs font-semibold text-[#667085]">
          {overview.title.toUpperCase()}
        </p>
      </div>
      <div className="my-5 text-4xl font-medium text-[#212636]">
        {overview.count}
      </div>
      <div className="flex items-center gap-2.5">
        {overview.type === PERCENT_TYPE.INCREASE ? (
          <IncreaseIcon />
        ) : (
          <DecreaseIcon />
        )}

        <div className="flex items-center text-sm font-normal gap-1.5 text-[#667085]">
          <p
            className={`${
              overview.type === PERCENT_TYPE.INCREASE
                ? "text-[#15B79F]"
                : "text-[#F04438]"
            }`}
          >
            {overview.percent}%
          </p>
          <p>{overview.type}</p>
        </div>
      </div>
    </div>
  );
}

export default OverviewTile;
