import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function MovingStars() {
  const starsRef = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.x = mouse.y * 0.5;
      starsRef.current.rotation.y = mouse.x * 0.5;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
    </group>
  );
}

export default function GalaxyBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
      }}
    >
      <MovingStars />
    </Canvas>
  );
}