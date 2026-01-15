import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#38B2AC" />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
