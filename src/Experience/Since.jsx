import { Text } from "@react-three/drei";

function Since(props) {
  return (
    <group {...props}>
      <Text>
        since
        <meshBasicMaterial color="black" />
      </Text>
      <Text position={[0, -1, 0]} scale={0.8}>
        2024
        <meshBasicMaterial color="black" />
      </Text>
    </group>
  );
}

export default Since;
