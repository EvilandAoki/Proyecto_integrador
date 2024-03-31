import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { KeyboardControls } from "./controls";

function App() {
  return (
    <Canvas shadows camera={{ position: [90, 20, 60], fov: 40 }}>
      <color attach="background" args={["#ececec"]} />
      <Suspense>
        <Physics>
          <Experience />
        </Physics>
      </Suspense>
      <KeyboardControls/>
    </Canvas>
  );
}

export default App;