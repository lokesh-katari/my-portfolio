const Edu = [
  {
    title: "B.Tech (CSE)",
    CGPA: "9.0",
    college: "GMR Institute of Technology,razam",
    year: "2021-2025",
  },
  {
    title: "Intermediate (MPC)",
    CGPA: "9.4",
    college: "AP Residential Junior College, Nagarjuna Sagar",
    year: "2019-2021",
  },
  {
    title: "SSC",
    CGPA: "9.7",
    college: "Sri Satya Sai High School",
    year: "2009-2019",
  },
];
const Education = () => {
  return (
    <div className="flex   flex-col justify-center">
      {Edu.map((education) => {
        return (
          <div className="block ml-9  text-justify w-4/5  sm:w-full xl:w-full md:w-full lg:full m-4 max-w-sm p-6 bg-transparent border border-gray-200 rounded-lg shadow ">
            <h5 className="mb-2 text-xl sm:text-sm   font-bold tracking-tight text-gray-900 dark:text-white">
              {education.title}
            </h5>
            <p className="font-normal text-left text-gray-700 dark:text-gray-400">
              {education.college}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {education.year}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              CGPA: {education.CGPA}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
