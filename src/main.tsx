import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AnimatedCursor from "react-animated-cursor";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <AnimatedCursor
        innerSize={8}
        outerSize={30}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0}
        // hasBlendMode={true}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
        trailingSpeed={5}
        outerStyle={{
          border: '3px solid var(--cursor-color)'
        }}
        // outerStyle={{
        //   mixBlendMode: 'exclusion'
        // }}
      />
  </React.StrictMode>
);
