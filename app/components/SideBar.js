import React from "react";

// icons
import Logo from "../assets/sidebar/Logo";
import HomeIcon from "../assets/sidebar/HomeIcon";
import ChatIcon from "../assets/sidebar/ChatIcon";
import MessagesIcon from "../assets/sidebar/MessagesIcon";
import SettingsIcon from "../assets/sidebar/SettingsIcon";

function SideBar() {
  return (
    <div className="bg-[#115E56] flex flex-col justify-between items-center p-4 fixed h-full">
      <div className="flex flex-col justify-between items-center">
        <Logo />

        <div className="flex flex-col items-center justify-center my-12 gap-5">
          <HomeIcon />
          <ChatIcon />
          <MessagesIcon />
        </div>
      </div>

      <SettingsIcon />
    </div>
  );
}

export default SideBar;
