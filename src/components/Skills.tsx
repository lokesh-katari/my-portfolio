import React from "react";

import "./skillscard.css";
const SkillCard = ({ icon, name }: any) => {
  return (
    <div className=" flex-col rounded-lg overflow-hidden  shadow-lg hover:shadow-xl flex items-center justify-center">
      <i className={`text-6xl text-white ${icon}`}></i>
      <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
    </div>
  );
};

const Skills = () => {
  const icons = [
    {
      name: "HTML",
      icon: "devicon-html5-plain",
    },
    {
      name: "Java",
      icon: "devicon-java-plain",
    },
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain",
    },
    {
      name: "python",
      icon: "devicon-python-plain",
    },
  ];
  return (
    <>
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-7 mx-auto">
          {icons.map((icon) => {
            return <SkillCard icon={icon.icon} name={icon.name} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
