import "../assets/namecss.scss";
import { useRef, useEffect } from "react";
const Name = () => {
  return (
    <>
      <svg>
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="65%" className="text--line">
            Lokesh Katari
          </text>
        </symbol>

        <g className="g-ants">
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
        </g>
      </svg>
    </>
  );
};

export default Name;
