import React from "react";

import "./skillscard.css";
import "../App.css"
interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  techStack: string[];
  isEven: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
  techStack,
  isEven,
}) => {
  return (
    // <div
    //   data-aos-duration={1000}
    //   data-aos={isEven ? `fade-right` : "fade-left"}
    //   className="  border-white border-0.5 rounded-xl overflow-hidden  shadow-md hover:shadow-lg flex  hover:scale-105 transition duration-300 ease-in-out  hover:shadow-slate-400 flex-col sm:flex-col md:flex-row lg:flex-row"
    // >
    //   <div className=" flex flex-col w-[90%] m-1 ">
    //     <a
    //       href={githubLink}
    //       className="block mt-1 text-lg leading-tight font-semibold gradient-text no-underline "
    //     >
    //       <h3>{title}</h3>
    //     </a>
    //     <p className="mt-2 text-gray-100 ">{description}</p>
    //     <p className="underline">tech stack</p>
    //     <div className="flex flex-wrap w-full justify-center">
    //       {techStack.map((tech, index) => (
    //         <i key={index} className={`text-2xl text-white ${tech} mx-2 `}></i>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div
      data-aos-duration={1000}
      data-aos={isEven ? `fade-right` : "fade-left"}
      className="max-w-sm p-6 bg-cardbg text-cardtextprim  border  rounded-lg shadow   overflow-hidden  hover:shadow-lg   hover:scale-105 transition duration-300 ease-in-out hover:shadow-cardhover  "
      style={{
        borderColor:"#E07A5F",

      
      }
  }
      
    >
      <a href={githubLink} className="flex justify-between items-start  text-2xl">
        <h5 style={{
          // color:"#E63946"
          textShadow: "0px 1px 1px #81B29A"
        }} className=" block mt-1  text-2xl leading-tight   no-underline   font-bold tracking-tight ">
          {title}
        </h5>
        <i className="devicon-github-original"></i>
      </a>
      <p className="mb-3 font-normal text-cardtextsec">
        {description}
      </p>

      <p className="underline">crafted with:</p>
      <div className="flex flex-wrap w-full justify-center">
        {techStack.map((tech, index) => (
          <i key={index} className={`text-2xl text-cardtextsec   ${tech} mx-2 `}
          ></i>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
