import SpringHoverWrapper from "./Components/SpringHoverWrapper";

function GetInTouch() {
  return (
    <div className="h-[90vh] w-[80vw] ml-[2vw] mt-[10vw] rounded-lg  bg-black opacity-80 relative ">
      <div className="text-4xl absolute left-8 top-[32vh] ">
        <span className="text-6xl">Elevate</span> your{" "}
        <span className=" font-bold text-5xl">Digital </span>
        presence
      </div>
      <div className="text-[20vh] absolute top-[35vh] font-bold ">
        GET IN TOUCH
      </div>
      <button className="top-[70vh] absolute ml-[4vw] rounded-full ">
        <p className="text-6xl border-t-purple-500 ">
          Hello@WaterlyStudios.com &#8594;
        </p>
      </button>
    </div>
  );
}

export default GetInTouch;
