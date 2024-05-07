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

}) => {
  return (
    <div
  
      
      className="max-w-sm p-6 w-[85%] bg-cardbg text-cardtextprim  border  rounded-lg shadow-lg   overflow-hidden  hover:shadow-lg   hover:scale-105 transition duration-300 ease-in-out hover:shadow-cardhover  "
// className="  overflow-hidden    hover:scale-105 transition duration-300 ease-in-out ml-9 bg-cardbg text-cardtextprim hover:shadow-xl hover:shadow-cardhover  text-justify w-4/5  sm:w-full xl:w-full md:w-full lg:full m-4 max-w-sm p-6  border border-gray-200 rounded-lg shadow "
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
