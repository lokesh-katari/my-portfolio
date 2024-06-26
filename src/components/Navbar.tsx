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
          <nav className="fixed  w-full z-20 top-0 start-0 mt-5">
            <div
              className="w-4/5 flex flex-wrap  items-center justify-between mx-auto p-2 border  rounded-full pl-2 pr-2 "
              style={{
                backgroundColor: "#3D405B",
                color:"#F4F1DE"
              }}
            >
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
                  className="text-texthover mr-2 hover:text-textprim hover:border-2 border-2 hover:border-texthover p-2 rounded-xl"
                ><a href="https://drive.google.com/file/d/14RD44iKczgGRHcjE_Si-GH0ZQbQeyLaw/view?usp=drive_link" target="_blank">Resume</a>
              
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
                <ul className="flex text-textprim flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                  <li>
                    <Link
                      to="home"
                      className="block py-2 px-3  hover:text-texthover  "
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
                      className="block py-2 px-3 hover:text-texthover  "
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
                      className="block py-2 px-3 hover:text-texthover "
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
                      className="block py-2 px-3  hover:text-texthover "
                    >
                      <button>Skills</button>
                    </Link>
                  </li>
              
                </ul>
              </div>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className=" fixed left-4 w-max z-20 top-0 start-0  mt-3 ">
            <div className="w-4/5 flex flex-wrap items-center justify-center mx-auto  border border-textprim rounded-full"
            style={{
              backgroundColor:"#3D405B",
              color:"#F4F1DE"
            
            }}>
              <a 
                href="#home"
                className="flex items-center "
             
             
              >
              <img src={logo} className="h-16 w-20 " alt="Flowbite Logo" />
              </a>
            </div>
          </nav>

          <BottomNav />
        </>
      )}
    </>
  );
};

export default Navbar;
