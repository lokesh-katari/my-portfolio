import Navbar from "../Navbar";

import { Outlet } from "react-router-dom";
import "../VideoBackground.css";
// import bgp from "../../../public/background.png";
const Layout = () => {

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
