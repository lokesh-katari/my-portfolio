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
            href="#home"
            className="inline-flex flex-col items-center justify-center px-5 rounded-s-full  group"
          >
            <button data-tooltip-target="tooltip-home" type="button">
              Home
            </button>
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
            <button
              data-tooltip-target="tooltip-new"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 font-medium rounded-full group  border border-texthover"
            >
              L
            </button>
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
