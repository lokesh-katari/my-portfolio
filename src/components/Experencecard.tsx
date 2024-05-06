interface props {
  title: string;
  description: string;
}
const Experencecard = (props: props) => {
  return (
    <div className=" overflow-hidden  hover:shadow-lg   hover:scale-105 transition duration-300 ease-in-out  w-4/5 m-4 max-w-sm p-6  border border-cardtextsec bg-cardbg  rounded-lg shadow text-cardtextprim hover:shadow-cardhover ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight ">
        {props.title}
      </h5>
      <p className="font-normal text-cardtextsec">
        {props.description}
      </p>
    </div>
  );
};

export default Experencecard;
