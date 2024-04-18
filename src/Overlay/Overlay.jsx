import Greetings from "../Content/Components/Greetings";
import LoadingProgress from "../Content/Components/LoadingProgress";

function Overlay() {
  return (
    <div className="h-[100vh] relative ">
      <div className="">
        <Greetings duration={100} spread={5} />
        <LoadingProgress />
      </div>

      {/* <LoadingProgress /> */}
    </div>
  );
}

export default Overlay;
