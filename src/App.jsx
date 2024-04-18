import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./Experience/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import Content from "./Content/Content";
import Logo from "./Experience/Logo";
import Since from "./Experience/Since";
import { Cursor } from "./Content/Components/Cursor";

function App() {
  return (
    <>
      <div className="block sm:hidden">
        pleace check on desktop!!! soon it'll be available for mobile too... but
        as of it's not.
      </div>
      <Cursor />
      <Canvas className="hidden sm:block">
        <Logo position={[-5.5, 3.3, 0]} scale={0.5} />
        <Since position={[6, 3.5, 0]} scale={0.2} />
        <ScrollControls pages={5} damping={0.2}>
          <Experience />
          <Scroll html>
            <Content />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
