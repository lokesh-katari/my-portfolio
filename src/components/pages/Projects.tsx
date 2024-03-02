import ProjectCard from "../Projectscard";

const Projects = () => {
  const projects = [
    {
      title: "Code Realm",
      description:
        "CodeRealm is a Docker-Based Code Execution Platform that empowers users to submit, execute, and evaluate code and test cases securely. It's designed to be a dynamic and secure environment for code evaluation and execution, with a focus on system design principles and scalability.",
      githubLink: "https://github.com/lokesh-katari/Code-judge-Online",
      techStack: [
        "devicon-react-original",
        "devicon-docker-plain",
        "devicon-nodejs-plain",
        "devicon-materialui-plain",
        "devicon-redux-original",
        "devicon-mongodb-plain",
        "devicon-express-original",
        "devicon-rabbitmq-original",
      ],
      imagelink: "",
    },
    {
      title: "GoScale",
      description:
        "GoScale is a versatile load balancing application written in Go that provides various algorithms for distributing incoming traffic among backend servers. It supports various algorithms like RR, WRR, and Least Connections.",
      githubLink: "https://github.com/lokesh-katari/GoScale",
      techStack: ["devicon-go-plain", "devicon-docker-plain"],
      imagelink: "",
    },
    {
      title: "GoSurge",
      description:
        "GoSurge is a simple HTTP benchmarking and load testing tool written in Go. It takes advantage of Go's concurrency, supports various HTTP methods (GET, POST, PUT, DELETE), and can read URLs from files for making concurrent requests.",
      githubLink: "https://github.com/lokesh-katari/GoSurge",
      techStack: ["devicon-go-plain"],
      imagelink: "",
    },
    {
      title: "DNS Forwarder with Redis Cache",
      description:
        "A simple and efficient DNS forwarder written in Go. Forwards DNS queries to upstream servers while caching responses in Redis for faster subsequent lookups. Aims to improve DNS performance and reduce load on upstream servers.",
      githubLink: "https://github.com/lokesh-katari/DNS-forwarder",
      techStack: ["devicon-go-plain", "devicon-redis-plain"],
      imagelink: "",
    },
    {
      title: "E-Shoppy",
      description:
        "E-shoppy, your ultimate online shopping destination inspired by industry giants like Amazon. With a focus on user experience and innovation, E-shoppy offers a vast array of products across various categories, all in one convenient platform. From electronics to fashion, home essentials to gifts, E-shoppy aims to redefine the online shopping experience with its intuitive interface, secure transactions, and unparalleled customer service.",
      githubLink: "https://github.com/lokesh-katari/online-shopping-app",
      techStack: [
        "devicon-nodejs-plain-wordmark",
        "devicon-tailwindcss-original",
        "devicon-express-original",
        "devicon-react-original",
        "devicon-redux-original",
        "devicon-mongodb-plain",
      ],
      imagelink: "",
    },
    {
      title: "EveryNote",
      description:
        "This project is mainly a web application called EveryNote which stores the user notes and a specific user can access their own notes which is private",
      githubLink: "https://github.com/lokesh-katari/EveryNote",
      techStack: [
        "devicon-nodejs-plain-wordmark",
        "devicon-express-original",
        "devicon-react-original",
        "devicon-bootstrap-plain-wordmark",
        "devicon-mongodb-plain",
      ],
      imagelink: "",
    },
    {
      title: "Certificate Generator",
      description:
        "🚀 Welcome to the Certificate Generator project! This innovative solution was developed during the Google Cloud Study Jam to address the challenge of efficiently managing and issuing certificates to participants.",
      githubLink: "https://github.com/lokesh-katari/certficate-generator",
      techStack: [
        "devicon-typescript-plain",
        "devicon-tailwindcss-original",
        "devicon-nextjs-plain",
      ],
      imagelink: "",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center gap-y-12   gap-7 items-center sm:flex-row md:items-start md:flex-row mx-auto">
        {/* <div className="mx-auto flex flex-wrap justify-center gap-7 w-full max-w-7xl items-center space-y-4 px-2 py-10"> */}
        {projects.map((project, index) => {
          return (
            <ProjectCard
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
