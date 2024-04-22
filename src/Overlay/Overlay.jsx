import LoadingProgress from "../Content/Components/LoadingProgress";

function Overlay() {
  return (
    <div className="h-[100vh] relative ">
      <div className="">{/* <Greetings duration={100} spread={5} /> */}</div>
      <p>From oceans of ideas </p>
      <LoadingProgress progress={"100"} visible={true} />
      {/* <LoadingProgress /> */}
    </div>
  );
}

export default Overlay;
