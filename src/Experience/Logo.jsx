/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { Float, Text } from "@react-three/drei";

function Logo(props) {
  return (
    <>
      <group {...props}>
        <Float>
          <Text font="./waterfont.ttf" position={[0, 0, 0]}>
            Waterly
            <meshBasicMaterial color="black" side={THREE.DoubleSide} />
          </Text>
        </Float>
        <Text font="./roboto.ttf" scale={0.6} position={[0, -0.7, 0]}>
          Studios
          <meshBasicMaterial color="black" side={THREE.DoubleSide} />
        </Text>
      </group>
    </>
  );
}

export default Logo;
