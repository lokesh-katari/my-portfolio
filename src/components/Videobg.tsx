import React from "react";
import "./VideoBackground.css";
import bg from "../assets/bg.mp4"; // Import CSS for styling (see below)

const VideoBackground: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={bg} type="video/mp4" />
      </video>
      {/* <div className="content">asdfasdfasdf</div> */}
    </div>
  );
};

export default VideoBackground;
