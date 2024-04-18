import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./Experience/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import Content from "./Content/Content";
import Logo from "./Experience/Logo";
import Since from "./Experience/Since";

function App() {
  return (
    <>
      <Canvas>
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
