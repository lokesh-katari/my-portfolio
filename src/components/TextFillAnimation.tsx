// TextFillAnimation.tsx
import React, { useState } from "react";
import { TimelineMax, Power2 } from "gsap";
import { motion } from "framer-motion";

interface Props {}

const TextFillAnimation: React.FC<Props> = ({}) => {
  const svgRef = React.useRef(null);
  const [fillColor, setFillColor] = useState("#fff");

  const handleClick = () => {
    const timeline: any = new TimelineMax();
    timeline.to(".letter", 1, {
      fill: "#f00",
      ease: Power2.easeOut,
      stagger: { amount: 0.2 },
    });
    timeline.to(() => setFillColor("#f00"), 1);
  };

  return (
    <div onClick={handleClick}>
      <svg ref={svgRef} viewBox="-60 -70 120 140">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#f00" />
          </linearGradient>
        </defs>
        <path
          d="M...your_d_attribute..."
          fill="url(#gradient)"
          className="letter"
        />
      </svg>
      <button type="button">Change Fill Color</button>
    </div>
  );
};

export default TextFillAnimation;
