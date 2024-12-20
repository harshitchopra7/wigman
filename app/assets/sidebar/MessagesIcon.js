import React from "react";

function MessagesIcon({ width = "22px", height = "22px" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.125 17.8875C26.1227 19.9588 25.2989 21.9446 23.8343 23.4093C22.3696 24.8739 20.3838 25.6977 18.3125 25.7H11.7242C11.3997 25.6996 11.0885 25.5705 10.859 25.341C10.6295 25.1115 10.5004 24.8003 10.5 24.4758V17.8875C10.5 15.8155 11.3231 13.8284 12.7882 12.3632C14.2534 10.8981 16.2405 10.075 18.3125 10.075C20.3845 10.075 22.3716 10.8981 23.8368 12.3632C25.3019 13.8284 26.125 15.8155 26.125 17.8875Z"
        fill="#CCFBEF"
      />
    </svg>
  );
}

export default MessagesIcon;