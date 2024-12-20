import React from "react";

// icons
import ChartPieIcon from "../assets/navbar/ChartPieIcon";
import TagIcon from "../assets/navbar/TagIcon";
import ChatIcon from "../assets/navbar/ChatIcon";

const navElements = [
  {
    icon: <ChartPieIcon />,
    text: "Summary",
  },
  {
    icon: <TagIcon />,
    text: "Sales",
  },
  {
    icon: <ChatIcon />,
    text: "Summary",
  },
];

function Navbar() {
  return (
    <div className="flex items-center gap-6">
      {navElements.map((element, key) => (
        <div key={key} className="flex items-center justify-center gap-2.5">
          {element.icon}
          <p>{element.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
