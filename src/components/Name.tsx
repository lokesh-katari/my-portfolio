import React from "react";
import "../assets/namecss.scss";
import { useRef, useEffect } from "react";
const Name = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    const texts = svg.querySelectorAll("text");

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    texts.forEach((text) => {
      const bbox = text.getBBox();
      minX = Math.min(minX, bbox.x);
      minY = Math.min(minY, bbox.y);
      maxX = Math.max(maxX, bbox.x + bbox.width);
      maxY = Math.max(maxY, bbox.y + bbox.height);
    });

    const width = maxX - minX;
    const height = maxY - minY;

    svg.setAttribute("viewBox", `${minX} ${minY} ${width} ${height}`);
  }, []);
  return (
    <>
      <svg>
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="65%" className="text--line">
            Katari
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
