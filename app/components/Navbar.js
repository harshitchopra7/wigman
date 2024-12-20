"use client";

import React, { useState } from "react";

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
    text: "Chats",
  },
];

function Navbar() {
  const [selectedElement, setSelectedElement] = useState(navElements[0].text);

  const handleNavElementClick = (element) => {
    setSelectedElement(element);
  };

  return (
    <div className="flex items-center gap-6">
      {navElements.map((element, key) => (
        <div
          key={key}
          className={`flex items-center justify-center gap-2.5 p-3 mx-0.5 cursor-pointer ${
            selectedElement === element.text
              ? "bg-[#CCFBEF] rounded-full font-bold"
              : ""
          }`}
          onClick={() => handleNavElementClick(element.text)}
        >
          {element.icon}
          <p>{element.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
