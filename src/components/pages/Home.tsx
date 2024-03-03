import Skills from "../Skills";
import "../../App.css";
import Projects from "./Projects";
import { MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Experencecard from "../Experencecard";
import Education from "./Education";
const Home = () => {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);
  return (
    <div className=" text-center pt-3 ">
      <div className="">
        <section className=" " id="home">
          <div className="px-2 lg:flex lg:flex-row lg:items-center flex-row-reverse ">
            <div className="w-full lg:w-1/2">
              <div className="my-10  lg:my-0 lg:px-10">
                <p className="mt-4 w-xl text-base leading-relaxed text-white font-bold">
                  <div className="flex items-center font-bold text-white mt-72 ">
                    <div>
                      <div className="flex w-max">
                        <span className="md:text-[2.0rem] lg:text-3xl sm:text-[37px] m-2  xl:text-2xl text-[1.4rem]">
                          Hii{" "}
                          <span className="inline-block w-min animate-wave">
                            👋
                          </span>{" "}
                        </span>
                      </div>
                      <span className=" w-max ml-2 md:text-[2.0rem] lg:text-3xl sm:text-[37px] text-[1.4rem] ">
                        I'm LOKESH KATARI
                      </span>
                    </div>
                    {/* <Name /> */}
                  </div>
                  <div className="text-justify m-3 mt-2 text-[12px] text-gray-300 font-mono">
                    “ A passionate software engineer and dynamic full-stack
                    developer, I specialize in crafting scalable systems with
                    Go, JavaScript, TypeScript, Node.js, React, Next.js, and
                    Docker. Join me as we redefine possibilities and shape the
                    future of technology ”
                  </div>
                  <div className="flex ml-2 mt-2">
                    <MapPin />
                    <span className="pt-1 ml-1">
                      <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                        In
                      </span>
                      <span className="bg-gradient-to-r from-white to-green-500 text-transparent bg-clip-text">
                        dia
                      </span>
                    </span>
                  </div>
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2"></div>
          </div>
        </section>
        <section id="projects" className="h-max w-screen  mt-52 text-white">
          <h1 className="m-5">Projects</h1>
          <Projects />
          {}
        </section>
        <section id="experience" className="h-screen w-screen mt-24 text-white">
          <h1 className="m-5"> Experience</h1>
          <div className="flex  justify-center">
            <Experencecard
              title="BikerBuds"
              description="Nodejs Developer intern"
            />
          </div>
        </section>
        <section
          id="educational"
          className="h-screen w-screen   mt-52 text-white"
        >
          <h1 className="m-5"> Educational qualifications</h1>
          <div className="flex justify-center">
            <Education />
          </div>
        </section>
        <section id="skills" className="h-max w-screen  mt-52 text-white pb-32">
          <h1 className="m-5 pt-8 "> Skills</h1>
          <Skills />
        </section>
      </div>
    </div>
  );
};

export default Home;
