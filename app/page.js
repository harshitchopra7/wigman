// internal components
import SideBar from "./components/SideBar";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row">
      <SideBar />

      <div className="p-5 pl-10 w-full md:ml-[60px]">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}
