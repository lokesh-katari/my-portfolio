import Skills from "../Skills";
import "../../App.css";
import Projects from "./Projects";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Experencecard from "../Experencecard";
import Education from "./Education";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';
import prof from '../../assets/download (1).png'
import XIcon from '@mui/icons-material/X';

import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from "@mui/material/styles";

const Home = () => {

  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);


const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({  }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#E07A5F",
    
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#E07A5F",
  },
}));

  const tooltipTop = {
    "& .MuiTooltip-tooltip": {
      color:'#F4F1DE',
      
    }
  };
  return (
    <div
      className=" text-center  grid-bg "
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
      <div className=" ">
        <section className=" flex items-center justify-center" id="home">
          <div className="px-2 md:flex md:flex-row lg:items-center flex-row-reverse max-w-fit items-center">
            <div className="w-full lg:w-[60%] h-full">
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
                    <div className="mr-4 grid-bg lg:hidden md:hidden">
                    <img className="  shadow-md shadow-texthover transition duration-300 md:h-32 md:mr-6 sm:h-32 ease-in-out h-20 rounded-xl hover:scale-105 hover:shadow-md hover:shadow-texthover" src={prof} alt="image"  />
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
                  <div className="text-textsecond flex pt-5 justify-around py-3 w-2/4">
                    <span ><BootstrapTooltip title="linkedin" placement="top" arrow sx={tooltipTop}><a href="https://www.linkedin.com/in/lokesh-katari/" target="_blank"><Linkedin strokeWidth={1.25} className="text-textsecond" /></a></BootstrapTooltip></span>
                    <span ><BootstrapTooltip title="github" placement="top" arrow sx={tooltipTop}><a href="https://github.com/lokesh-katari" target="_blank"><Github strokeWidth={1.25} className="text-textsecond"/></a></BootstrapTooltip></span>
                    <span ><BootstrapTooltip title="twitter" placement="top" arrow sx={tooltipTop}><a href="https://twitter.com/lokeshkatari921" target="_blank"><XIcon strokeWidth={1.25} className="text-textsecond "/></a></BootstrapTooltip></span>
                    <span ><BootstrapTooltip title="mail" placement="top" arrow sx={tooltipTop}><a href="mailto:lokeshkatari921@outlook.com" target="_blank"><Mail strokeWidth={1.25}  className="text-textsecond"/></a></BootstrapTooltip></span>
       
                  </div>
                 
                  <div className="border flex mt-4   border-cardtextsec w-max text-cardtextprim rounded-lg ml-3">
                    <div className="w-6  bg-cardtextsec  rounded-l-lg"></div>
                    <div className="px-2 py-1 mr-2 font-mono  flex items-center justify-between "><p className="mr-4">
                    npx lokeshkatari
                    </p>
                  
                   <div className="">
                   <CopyToClipboard text="npx lokeshkatari" >
                   <BootstrapTooltip title="click to copy" placement="top" arrow sx={tooltipTop}
                   
                   slotProps={{
                    popper: {
                      sx: {

                        [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                          {
                            marginBottom: '25px',
                          },
                       
                      },
                    }}}>
                    <button className="" onClick={()=>(toast("run this in your terminal ツ",{
                      
                      position:"top-right", 
                      style:{
                        backgroundColor:"#4A4A4A",
                        color:"#E07A5F",
                      },
                      id: 'clipboard',
                    }))}><ContentCopyIcon/></button>
        </BootstrapTooltip>
        </CopyToClipboard>
                   </div>
                   
                   
                    </div>
                    
                  </div>
                </p>
                
              </div>
            </div>
            <div className="w-full   lg:w-1/3">
              <div className="  mt-52  hidden md:flex md:mt-[17rem] lg:flex justify-around  ">
                
              <img className="transition shadow-lg shadow-texthover duration-300 ease-in-out h-72 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-texthover" src={prof} alt="image"  />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className=" h-max w-screen  mt-52 ">
          <h1 className="m-5  text-textprim">Projects</h1>
          <Projects />
          {}
        </section>
        <section id="experience" className="h-full  mt-24 ">
          <h1 className="m-5 text-textprim " > Experience</h1>
          <div className="flex  justify-center">
            <Experencecard
              title="BikerBuds"
              description="Nodejs Developer intern"
            />
          </div>
        </section>
        <section id="educational" className="h-max     mt-24 ">
          <h1 className="m-5 text-textprim"> Educational qualifications</h1>
          <div className="flex justify-center">
            <Education />
          </div>
        </section>
        <section id="skills" className="h-max w-screen   mt-52  pb-32">
          <h1 className="m-5 pt-8 text-textprim "> Skills</h1>
          <Skills />
        </section>
      </div>
    </div>
  );
};

export default Home;
