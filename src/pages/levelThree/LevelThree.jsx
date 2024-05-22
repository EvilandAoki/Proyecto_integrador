import { Canvas } from "@react-three/fiber"
import { LightsOne } from "../levelOne/lights/LightsOne"
import { CameraControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense } from "react"
import { Perf } from "r3f-perf"
import { WorldThree } from "./world/WorldThree"
import { LightsTutorial } from "./lights/lightsTutorial"
import CarControls, { CarKeyboardControls } from "../../components/controls/CarControls"


export const LevelThree = () => {

    return (
        <CarKeyboardControls>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.7,
                    far: 300,
                    position: [5, 4, 5]
                }}
            >
                <PerspectiveCamera makeDefault position={[0, 10, 20]} />
                <CameraControls />
                <color attach="background" args={["#ececec"]} />
                <LightsTutorial />
                <Physics debug={true}>
                    <Suspense>
                        <WorldThree />                       
                    </Suspense>
                </Physics>
                <Perf />
                <CarControls />
            </Canvas>
        </CarKeyboardControls>
    )
}
