/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { Perf } from "r3f-perf";
import { MeshWobbleMaterial } from "@react-three/drei";
import { ScreenSizer } from "@react-three/drei";
import { Sparkles } from "@react-three/drei";
import { GradientTexture, MeshDistortMaterial } from "@react-three/drei";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";

function Experience() {
  const data = useScroll();
  const materialRef = useRef();

  const { color } = useControls({ color: "#ffffff" });

  useFrame(() => {
    console.log(materialRef.current.distort * 10);
    materialRef.current.distort = 0.4 + data.delta * 5000;
  });

  return (
    <>
      <Perf />
      <mesh>
        <boxGeometry args={[4, 4, 4, 32, 32, 32]} />
        <MeshWobbleMaterial wireframe factor={0.8} speed={1} />
      </mesh>
      <ScreenSizer
        scale={1} // scale factor
      ></ScreenSizer>
      <ambientLight intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={5} />
      <mesh>
        <Sparkles count={500} scale={5 * 2} size={1} speed={0.4} />
        {/* <sphereGeometry args={[15, 32, 16]} /> */}
        <planeGeometry args={[20, 10, 32, 32]} />
        <MeshDistortMaterial
          ref={materialRef}
          distort={0.3}
          opacity={0.3}
          speed={3}
        >
          <GradientTexture
            stops={[0, 0.8, 1]}
            // colors={["#ffffff", "#8888ff", "#ffffff"]}
            // colors={["#ffffff", "#4488ff", "#000"]}
            colors={["#ffffff", color, "#000"]}
            size={100}
          />
        </MeshDistortMaterial>
      </mesh>
      <mesh position={[0, 30, 0]}>
        <boxGeometry args={[10, 10, 10]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}

export default Experience;
