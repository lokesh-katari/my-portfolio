import Skills from "../Skills";
import "../../App.css";
import Projects from "./Projects";
import { MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Experencecard from "../Experencecard";
import Education from "./Education";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';
import prof from '../../assets/download (1).png'

const Home = () => {
  const isDesktop = window.innerWidth >= 768;
  let position  = isDesktop ? "top-right" : "bottom-center";
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);
  return (
    <div
      className=" text-center pt-3 "
      style={{
        color: "#3D405B",
      }}
    >
        <Toaster 
        reverseOrder={false}
         toastOptions={{
          className: '',

          style: {
            border: '1px solid #E07A5F',
            padding: '16px',
            color: '#E07A5F',
            backgroundColor:'#4A4A4A',
          },
        }} />
      <div className="">
        <section className=" " id="home">
          <div className="px-2 md:flex md:flex-row lg:items-center flex-row-reverse ">
            <div className="w-full lg:w-1/2 h-full">
              <div className="my-10  lg:my-0 lg:px-10 ">
                <p className="mt-4 w-xl text-base leading-relaxed font-bold">
                  <div className="flex items-center justify-between font-bold  mt-72 ">
                    <div>
                      <div className="flex w-max">
                        <span className="text-textprim md:text-[2.0rem] lg:text-3xl sm:text-[37px] m-2  xl:text-2xl text-[1.4rem]">
                          Hii{" "}
                          <span className="inline-block w-min animate-wave">
                            👋
                          </span>{" "}
                        </span>
                      </div>
                      <span className="text-textprim w-max ml-2 md:text-[2.0rem] lg:text-3xl sm:text-[37px] text-[1.4rem] ">
                        I'm LOKESH KATARI
                      </span>
                    </div>
                    {/* <Name /> */}
                    <div className="mr-4 lg:hidden md:hidden">
                    <img className="transition duration-300 md:h-32 md:mr-6 sm:h-32 ease-in-out h-20 rounded-xl hover:scale-105 hover:shadow-md hover:shadow-texthover" src={prof} alt="image"  />
                    </div>
                  </div>
                  <div className="text-justify m-3 mt-2 text-[12px]  font-mono text-textsecond">
                    “ A passionate software engineer and dynamic full-stack
                    developer, I specialize in crafting scalable systems with
                    Go, JavaScript, TypeScript, Node.js, React, Next.js, and
                    Docker. Join me as we redefine possibilities and shape the
                    future of technology ”
                  </div>
                  <div className="flex ml-2 mt-2">
                    <MapPin className="text-cardtextprim" />
                    <span className="pt-1 ml-1">
                      <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                        In
                      </span>
                      <span className="bg-gradient-to-r from-white to-green-500 text-transparent bg-clip-text">
                        dia
                      </span>
                    </span>
                  </div>
                  <div className="border flex mt-4   border-cardtextsec w-max text-cardtextprim rounded-lg ml-3">
                    <div className="w-6  bg-cardtextsec  rounded-l-lg"></div>
                    <div className="px-2 py-1 mr-2 font-mono  flex items-center justify-between "><p className="mr-4">
                    npx lokeshkatari
                    </p>
                  
                   <div className="">
                   <CopyToClipboard text="npx lokeshkatari" >
                    <button className="" onClick={()=>(toast("run this in your terminal ツ",{
                      
                      position:"top-right", 
                      style:{
                        backgroundColor:"#4A4A4A",
                        color:"#E07A5F",
                      },
                      id: 'clipboard',
                    }))}><ContentCopyIcon/></button>
        </CopyToClipboard>
                   </div>
                   
                    </div>
                  </div>
                </p>
              </div>
            </div>
            <div className="w-full  lg:w-1/2">
              <div className="mt-52  hidden md:flex md:mt-72 lg:flex justify-around  ">
              <img className="transition duration-300 ease-in-out h-60 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-texthover" src={prof} alt="image"  />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="h-max w-screen  mt-52 ">
          <h1 className="m-5  text-textprim">Projects</h1>
          <Projects />
          {}
        </section>
        <section id="experience" className="h-full mt-24 ">
          <h1 className="m-5 text-textprim"> Experience</h1>
          <div className="flex  justify-center">
            <Experencecard
              title="BikerBuds"
              description="Nodejs Developer intern"
            />
          </div>
        </section>
        <section id="educational" className="h-screen w-screen   mt-24 ">
          <h1 className="m-5 text-textprim"> Educational qualifications</h1>
          <div className="flex justify-center">
            <Education />
          </div>
        </section>
        <section id="skills" className="h-max w-screen  mt-52  pb-32">
          <h1 className="m-5 pt-8 text-textprim "> Skills</h1>
          <Skills />
        </section>
      </div>
    </div>
  );
};

export default Home;
