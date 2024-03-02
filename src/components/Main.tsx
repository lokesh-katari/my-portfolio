import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <>
      <h1
        className="text-center mt-20 p-2"
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "#fff",
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        }}
      >
        <div className="bg-black h-screen">{/* <Name /> */}</div>
        hii i’m lokesh
        <Typewriter
          options={{
            strings: ["Full Stack Dev", "World"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>{" "}
      {/* <TextFillAnimation /> */}
    </>
  );
};

export default Main;
