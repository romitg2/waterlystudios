import Greetings from "../Content/Components/Greetings";
import LoadingProgress from "../Content/Components/LoadingProgress";
import NavBar from "../Content/NavBar";

function Overlay() {
  return (
    <div className="h-[100vh] relative ">
      <div className="">
        <Greetings duration={100} spread={5} />
      </div>

      <LoadingProgress progress={"100"} visible={true} />
      {/* <LoadingProgress /> */}
    </div>
  );
}

export default Overlay;
