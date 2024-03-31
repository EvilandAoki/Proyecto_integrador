import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { KeyboardControls } from "./controls";
import HomeScreen from "./layouts/HomeScreen";

function App() {
  return (
    <HomeScreen>
      <Canvas shadows camera={{ position: [90, 20, 60], fov: 40 }}>
        <color attach="background" args={["#ececec"]} />
        <Suspense>
          <Physics>
            <Experience />
          </Physics>
        </Suspense>
        <KeyboardControls />
      </Canvas>
    </HomeScreen>
  );
}

export default App;