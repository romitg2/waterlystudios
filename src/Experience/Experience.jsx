/* eslint-disable react/no-unknown-property */

import { GradientTexture, MeshDistortMaterial } from "@react-three/drei";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Experience() {
  const data = useScroll();
  const materialRef = useRef();

  useFrame(() => {
    console.log(materialRef.current.distort * 10);
    materialRef.current.distort = 0.4 + data.delta * 1000;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={5} />
      <mesh>
        {/* <sphereGeometry args={[15, 32, 16]} /> */}
        <planeGeometry args={[20, 10, 32, 32]} />
        <MeshDistortMaterial
          ref={materialRef}
          distort={0.3}
          opacity={0.2}
          speed={3}
        >
          <GradientTexture
            stops={[0, 0.8, 1]}
            // colors={["#ffffff", "#8888ff", "#ffffff"]}
            colors={["#ffffff", "#8888ff", "#000"]}
            size={100}
          />
        </MeshDistortMaterial>
      </mesh>
    </>
  );
}

export default Experience;
