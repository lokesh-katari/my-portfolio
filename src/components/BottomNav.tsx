import { Home } from "lucide-react";
import "../App.css";
const BottomNav = () => {
  return (
    <div>
      <div
        className="fixed   z-50 w-[90%] h-16 max-w-lg -translate-x-1/2 border border-textprim
       rounded-full bottom-4 left-1/2 "
       style={{
        backgroundColor:"#3D405B",
        color:"#F4F1DE"
       }}
      >
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto text-textprim">
          <a
            href="https://drive.google.com/file/d/14RD44iKczgGRHcjE_Si-GH0ZQbQeyLaw/view?usp=drive_link" 
            className="inline-flex flex-col items-center justify-center px-5 rounded-s-full  group"
          >
            Resume
          </a>{" "}
          <a
            href="#projects"
            className="inline-flex flex-col items-center justify-center px-5 group"
          >
            <button data-tooltip-target="tooltip-wallet" type="button">
              {" "}
              Projects
            </button>
          </a>
          <div className="flex items-center justify-center">
            
           <a href="#home">
           <Home strokeWidth={1.25} />
           </a>
         
          </div>
          {/*  */}
          <a
            href="#experience"
            className="inline-flex flex-col items-center justify-center px-5  group"
          >
            <button data-tooltip-target="tooltip-wallet" type="button">
              {" "}
       About
            </button>
          </a>
          <a
            href="#skills"
            className="inline-flex flex-col items-center justify-center px-5  group"
          >
            <button data-tooltip-target="tooltip-wallet" type="button">
              {" "}
              Skills
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
