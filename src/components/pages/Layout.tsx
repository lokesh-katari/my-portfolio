import Navbar from "../Navbar";
import VideoBackground from "../Videobg";
import { Outlet } from "react-router-dom";
import "../VideoBackground.css";
// import bgp from "../../../public/background.png";
const Layout = () => {
  const isDesktop = window.innerWidth >= 768;
  return (
    <>
      <Navbar />
      
      <div className="  w-full h-full " style={{
        backgroundColor: "#3D405B"
      }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
