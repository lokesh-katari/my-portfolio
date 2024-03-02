import Name from "../Name";
import Skills from "../Skills";

import Projects from "./Projects";
const Home = () => {
  return (
    <div className=" text-center pt-3 ">
      <div className=" " id="home">
        <section className=" ">
          <div className="px-2 lg:flex lg:flex-row lg:items-center flex-row-reverse ">
            <div className="w-full lg:w-1/2">
              <div className="my-10  lg:my-0 lg:px-10">
                <p className="mt-4 w-xl text-base leading-relaxed text-white font-bold">
                  Hii
                  <div className="text-8xl font-bold text-white mt-72">
                    <p className="text-2xl text-center ">Hii</p> <Name />
                  </div>
                  <div></div>
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
        </section>
        <section
          id="educational"
          className="h-screen w-screen   mt-52 text-white"
        >
          <h1 className="m-5"> Educational qualifications</h1>
        </section>
        <section id="skills" className="h-max w-screen  mt-52 text-white mb-32">
          <h1 className="m-5 pt-8 "> Skills</h1>
          <Skills />
        </section>
      </div>
      {/* <BottomNav /> */}
    </div>
  );
};

export default Home;
