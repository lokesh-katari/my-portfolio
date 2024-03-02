import Name from "../Name";
import Skills from "../Skills";

import Projects from "./Projects";
const Home = () => {
  return (
    <div className="home text-center pt-3 ">
      <div className=" ">
        <section className=" ">
          <div className="px-2 lg:flex lg:flex-row lg:items-center flex-row-reverse ">
            <div className="w-full lg:w-1/2">
              <div className="my-10  lg:my-0 lg:px-10">
                <p className="mt-4 w-xl text-base leading-relaxed text-white font-bold">
                  <div className="text-8xl font-bold text-white mt-72">
                    <Name />
                  </div>

                  <div></div>
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2"></div>
          </div>
        </section>
        <section id="projects" className="h-max w-screen  mt-52 text-white">
          projects
          <Projects />
          {}
        </section>
        <section
          id="experience"
          className="h-screen w-screen  mt-52 text-white"
        >
          Experience
        </section>
        <section
          id="educational"
          className="h-screen w-screen  mt-52 text-white"
        >
          Educational qualifications
        </section>
        <section id="skills" className="h-max w-screen  mt-52 text-white">
          skills
          <Skills />
        </section>
      </div>
      {/* <BottomNav /> */}
    </div>
  );
};

export default Home;
