import React from "react";
import bg from "../../public/background.png";
import "./skillscard.css";
interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  techStack: string[];
  imagelink?: string;
  isEven: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
  techStack,
  imagelink,
  isEven,
}) => {
  return (
    <div
      data-aos-duration={1000}
      data-aos={isEven ? `fade-right` : "fade-left"}
      className=" w-[70vw] content-stretch   border-white border-0.5 rounded-xl overflow-hidden  shadow-md hover:shadow-lg flex  hover:scale-105 transition duration-300 ease-in-out  hover:shadow-slate-400 flex-col sm:flex-col md:flex-row lg:flex-row"
    >
      <div className="w-[70vw] md:w-[30vw] sm:w-[70vw] ">
        <img
          className="h-full w-full object-cover"
          src={imagelink ? imagelink : bg}
          alt="Project Thumbnail"
        />
      </div>
      <div className=" flex flex-col w-[90%] m-1 ">
        <a
          href={githubLink}
          className="block mt-1 text-lg leading-tight font-semibold gradient-text no-underline "
        >
          <h3>{title}</h3>
        </a>
        <p className="mt-2 text-gray-100 ">{description}</p>
        <p className="underline">tech stack</p>
        <div className="flex flex-wrap w-full justify-center">
          {techStack.map((tech, index) => (
            <i key={index} className={`text-2xl text-white ${tech} mx-2 `}></i>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
