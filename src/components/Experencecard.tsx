interface props {
  title: string;
  description: string;
}
const Experencecard = (props: props) => {
  return (
    <div className="block w-4/5 m-4 max-w-sm p-6 bg-transparent border border-gray-200 rounded-lg shadow ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
    </div>
  );
};

export default Experencecard;
