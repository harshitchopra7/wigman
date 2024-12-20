import React from "react";

// icons
import CaretDown from "../../assets/CaretDown";
import ChatIcon from "@/app/assets/sidebar/ChatIcon";
import TagIcon from "@/app/assets/navbar/TagIcon";

// internal components
import OverviewTile from "./OverviewTile";

const overviewData = [
  {
    id: 1,
    icon: <ChatIcon />,
    title: "Consultations",
    count: "24",
    percent: "15",
    type: "increase",
  },
  {
    id: 2,
    icon: <TagIcon />,
    title: "Orders Placed",
    count: "12",
    percent: "15",
    type: "decrease",
  },
  {
    id: 3,
    icon: <ChatIcon />,
    title: "Conversion",
    count: "50",
    percent: "15",
    type: "decrease",
  },
  {
    id: 4,
    icon: <ChatIcon />,
    title: "Total Sales Value",
    count: "$2,400",
    percent: "15",
    type: "increase",
  },
  {
    id: 5,
    icon: <ChatIcon />,
    title: "AVG Order Value",
    count: "$240",
    percent: "15",
    type: "increase",
  },
  {
    id: 6,
    icon: <ChatIcon />,
    title: "Comission Paid",
    count: "$240",
    percent: "15",
    type: "increase",
  },
];

function Overview() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-3;pxl font-medium">At a glance</p>
        <div className="border border-[#DCDFE4] shadow-[0px_1px_2px_0px_#00000014] flex items-center justify-between w-fit rounded-md p-2.5">
          7 days
          <div className="ml-1 cursor-pointer">
            <CaretDown />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-5 my-10">
        {overviewData.map((overview, key) => (
          <OverviewTile key={key} overview={overview} />
        ))}
      </div>
    </div>
  );
}

export default Overview;
