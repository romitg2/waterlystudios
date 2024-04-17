import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./Experience/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import Content from "./Content/Content";

function App() {
  return (
    <>
      <Canvas>
        <ScrollControls pages={3} damping={0.2}>
          <Experience />
          <Scroll html>
            <p>working</p>
            <Content />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <div>working</div>
    </>
  );
}

export default App;
