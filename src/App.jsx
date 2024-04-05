import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { KeyboardControls } from "./controls";
import HomeScreen from "./layouts/HomeScreen";
import { ReferenceKeyboardControls } from "./controls/ReferenceKeyboardControls";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <HomeScreen>
      <Canvas shadows camera={{ position: [90, 20, 60], fov: 40 }}>
        <color attach="background" args={["#ececec"]} />
        <ReferenceKeyboardControls />
        <Suspense>
          <Physics>
            <Experience />
          </Physics>
        </Suspense>
        <ReferenceKeyboardControls />
        {/* <KeyboardControls /> */}
      </Canvas>
    </HomeScreen>
  );
}

export default App;