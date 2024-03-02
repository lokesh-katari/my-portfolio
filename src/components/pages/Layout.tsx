import Navbar from "../Navbar";
import VideoBackground from "../Videobg";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <VideoBackground />
      <div className=" bg-transparent  w-full h-full backdrop-blur-2xl ">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
