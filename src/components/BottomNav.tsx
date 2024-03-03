import "../App.css";
const BottomNav = () => {
  return (
    <div>
      <div
        className="fixed   z-50 w-[90%] h-16 max-w-lg -translate-x-1/2 border border-white
       rounded-full bottom-4 left-1/2 "
      >
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          <a
            href="#home"
            className="inline-flex flex-col items-center justify-center px-5 rounded-s-full text-white group"
          >
            <button data-tooltip-target="tooltip-home" type="button">
              Home
            </button>
          </a>{" "}
          <a
            href="#experience"
            className="inline-flex flex-col items-center justify-center px-5 text-white group"
          >
            <button data-tooltip-target="tooltip-wallet" type="button">
              {" "}
              About
            </button>
          </a>
          <div className="flex items-center justify-center">
            <button
              data-tooltip-target="tooltip-new"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
            >
              L
            </button>
          </div>
          <div
            id="tooltip-new"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Create new item
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <a
            href="#projects"
            className="inline-flex flex-col items-center justify-center px-5 text-white group"
          >
            <button data-tooltip-target="tooltip-wallet" type="button">
              {" "}
              Projects
            </button>
          </a>
          <a
            href="#skills"
            className="inline-flex flex-col items-center justify-center px-5 text-white group"
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
