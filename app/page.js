import Image from "next/image";

// internal components
import SideBar from "./components/SideBar";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <div className="h-screen w-screen flex">
      <SideBar />

      <div className="p-5 pl-10 w-full ml-[60px]">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}
