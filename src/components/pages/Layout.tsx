import Navbar from "../Navbar";
import VideoBackground from "../Videobg";
import { Outlet } from "react-router-dom";
import "../VideoBackground.css";
import bg from "../../assets/bg.mp4";
// import bgp from "../../../public/background.png";
const Layout = () => {
  const isDesktop = window.innerWidth >= 768;
  return (
    <>
      <Navbar />
      {isDesktop ? <VideoBackground /> : <></>}
      <div className=" bg-transparent  w-full h-full backdrop-blur-2xl">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
