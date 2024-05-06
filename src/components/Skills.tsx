import "./skillscard.css";
const SkillCard = ({ icon, name }: any) => {
  return (
    <div className="mx-4 py-1 mt-[2px] hover:shadow-cardtextsec shadow-cardtextsec shadow-md sm:rounded-lg sm:shadow-xl md:rounded-lg md:shadow-xl  px-2 sm:w-[100px] sm:h-[100px] flex-col rounded-lg overflow-hidden   hover:shadow-lg flex items-center hover:scale-110 transition duration-300 ease-in-out justify-center ">
      <i
        className={`text-6xl text-cardtextprim ${icon} hidden sm:inline-block md:inline-block lg:inline-block `}
      ></i>

      <h3 className="text-lg font-semibold  m-1 text-cardtextprim ">{name}</h3>
    </div>
  );
};

const Skills = () => {
  const programmingLanguages = [
    {
      name: "HTML",
      icon: "devicon-html5-plain",
    },
    {
      name: "Java",
      icon: "devicon-java-plain",
    },
    {
      name: "nodejs",
      icon: "devicon-nodejs-plain-wordmark",
    },
    {
      name: "python",
      icon: "devicon-python-plain",
    },
    {
      name: "Go",
      icon: "devicon-go-plain",
    },
    {
      name: "CSS",
      icon: "devicon-css3-plain",
    },
    {
      name: "TypeScript",
      icon: "devicon-typescript-plain",
    },
  ];

  const frameworks = [
    {
      name: "React",
      icon: "devicon-react-original",
    },
    {
      name: "Redux",
      icon: "devicon-redux-original",
    },
    {
      name: "tailwindcss",
      icon: "devicon-tailwindcss-original",
    },
    {
      name: "express",
      icon: "devicon-express-original",
    },
    {
      name: "nextjs",
      icon: "devicon-nextjs-plain",
    },
    {
      name: "spring",
      icon: "devicon-spring-original",
    },
  ];

  const tools = [
    {
      name: "Docker",
      icon: "devicon-docker-plain",
    },
    {
      name: "tRPC",
      icon: "devicon-trpc-plain",
    },
    {
      name: "vscode",
      icon: "devicon-vscode-plain",
    },
    {
      name: "AWS",
      icon: "devicon-amazonwebservices-plain-wordmark",
    },
    {
      name: "GCP",
      icon: "devicon-googlecloud-plain",
    },
    {
      name: "gRPC",
      icon: "devicon-grpc-plain",
    },
    {
      name: "linux",
      icon: "devicon-linux-plain",
    },
    {
      name: "redis",
      icon: "devicon-redis-plain",
    },
    {
      name: "git",
      icon: "devicon-git-plain",
    },
    {
      name: "rabbitmq",
      icon: "devicon-rabbitmq-original",
    },
  ];

  const databases = [
    {
      name: "MongoDB",
      icon: "devicon-mongodb-plain",
    },
    {
      name: "Postgres",
      icon: "devicon-postgresql-plain",
    },
    {
      name: "MySQL",
      icon: "devicon-mysql-plain",
    },
  ];

  return (
    <>
      <div className=" mx-auto py-12 text-cardtextsec"
      style={{
        color:'#E07A5F'
      }}>
        <h3 className="text-3xl  mb-4 mt-10 underline lg:mt-10 lg:mb-6">Programming languages</h3>
        <div
          data-aos="zoom-out-right"
          className="flex flex-wrap justify-center gap-2 items-center sm:flex-row md:items-start md:flex-row mx-auto"
        >
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-7 mx-auto"> */}
          {programmingLanguages.map((icon) => {
            return <SkillCard icon={icon.icon} name={icon.name} />;
          })}
        </div>
        <h3 className="text-3xl mb-4 mt-10 underline  lg:mt-10 lg:mb-6">Frameworks</h3>
        <div
          data-aos="zoom-out-right"
          className="flex flex-wrap justify-center gap-2 items-center sm:flex-row md:items-start md:flex-row mx-auto"
        >
          {frameworks.map((icon) => {
            return <SkillCard icon={icon.icon} name={icon.name} />;
          })}
        </div>
        <h3 className="text-3xl mb-6 mt-6 underline  lg:mt-10 lg:mb-6">Tools</h3>
        <div
          data-aos="zoom-out-right"
          className="flex flex-wrap justify-center gap-2 items-center sm:flex-row md:items-start md:flex-row mx-auto"
        >
          {tools.map((icon) => {
            return <SkillCard icon={icon.icon} name={icon.name} />;
          })}
        </div>
        <h3 className="text-3xl mb-4 mt-10 underline  lg:mt-10 lg:mb-6">Database</h3>
        <div
          data-aos="zoom-out-right"
          className="flex flex-wrap justify-center gap-2 items-center sm:flex-row md:items-start md:flex-row mx-auto"
        >
          {databases.map((icon) => {
            return <SkillCard icon={icon.icon} name={icon.name} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
