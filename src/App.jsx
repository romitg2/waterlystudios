/* eslint-disable react/no-unescaped-entities */
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./Experience/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import Content from "./Content/Content";
import Since from "./Experience/Since";
import { Cursor } from "./Content/Components/Cursor";
import { Leva } from "leva";
import { Cloud, Clouds } from "@react-three/drei";
import * as THREE from "three";

function App() {
  return (
    <>
      <Leva />
      <Cursor />
      <Canvas className="hidden sm:block ">
        {/* <Perf /> */}
        {/* <Logo position={[-5.5, 3.3, 0]} scale={0.5} /> */}
        <Since position={[6, 3.5, 0]} scale={0.2} />
        <ScrollControls pages={10} damping={0.2}>
          <Experience />

          <Scroll>
            {/* <Clouds material={THREE.MeshBasicMaterial}> */}
            {/*   <Cloud */}
            {/*     segments={40} */}
            {/*     bounds={[10, 2, 2]} */}
            {/*     volume={4} */}
            {/*     color="white" */}
            {/*   /> */}
            {/*   <Cloud seed={1} scale={2} volume={2} color="hotpink" fade={100} /> */}
            {/* </Clouds> */}
          </Scroll>
          <Scroll html>
            <Content />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
