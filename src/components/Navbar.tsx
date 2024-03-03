import logo from "../../public/lokesh logo.png";
import { Link } from "react-scroll";
import "../App.css";
import BottomNav from "./BottomNav";
const Navbar = () => {
  const isDesktop = window.innerWidth >= 768;

  return (
    <>
      {isDesktop ? (
        <>
          <nav className="bg-transparent  fixed w-full z-20 top-0 start-0  dark:border-gray-600 mt-5">
            <div className="w-4/5 flex flex-wrap nav items-center justify-between mx-auto p-2 border-2 border-white rounded-full pl-2 pr-2 ">
              <Link
                to="home"
                className="flex items-center space-x-3 rtl:space-x-reverse"
                duration={500}
                smooth
              >
                <img src={logo} className="h-11" alt="Flowbite Logo" />
              </Link>
              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Resume
                </button>
                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                  <li>
                    <Link
                      to="home"
                      className="block py-2 px-3 text-white "
                      duration={500}
                      smooth
                    >
                      <button> Home</button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="experience"
                      smooth
                      duration={500}
                      offset={-110}
                      className="block py-2 px-3 text-white  "
                    >
                      <button>About</button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="projects"
                      smooth
                      duration={500}
                      offset={-100}
                      className="block py-2 px-3 text-white "
                    >
                      <button>Projects</button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="skills"
                      duration={500}
                      offset={-100}
                      smooth
                      className="block py-2 px-3 text-white"
                    >
                      <button>Contact</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className=" absolute left-4 w-max z-20 top-0 start-0  mt-3 ">
            <div className="w-4/5 flex flex-wrap nav items-center justify-center mx-auto p-1 border px-1 border-white rounded-full">
              <Link
                to="home"
                className="flex items-center "
                smooth
                duration={500}
              ></Link>
              <img src={logo} className="h-16 w-20" alt="Flowbite Logo" />
            </div>
          </nav>

          <BottomNav />
        </>
      )}
    </>
  );
};

export default Navbar;
