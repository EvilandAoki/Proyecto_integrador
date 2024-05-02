import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { LightsOne } from "../levelOne/lights/LightsOne"
import { CameraControls, FlyControls, MotionPathControls, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Perf } from "r3f-perf"
import { TutorialMap } from "./world/TutorialMap"
import { LightsTutorial } from "./lights/lightsTutorial"
import Supra from "../../components/cars/Supra"
import CarControls, { CarKeyboardControls } from "../../components/controls/CarControls"
import Tire from "../../components/Tire"

export const TutorialLevel = () => {

    return (
        <CarKeyboardControls>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.7,
                    far: 300,
                    position: [5, 4, 5]
                }}
                shadows={true}
            >
                <PerspectiveCamera makeDefault position={[0, 10, 20]} />
                <CameraControls />
                <color attach="background" args={["#ececec"]} />
                <LightsTutorial />
                <Physics debug={false}>
                    <Suspense>
                        <TutorialMap />
                        <Supra />
                        <Tire pos={[10, 0.5, 5]} />
                        <Tire pos={[-80, 0.5, -92]} />
                        <Tire pos={[85, 0.5, -10]} />
                        <Tire pos={[-50, 0.5, -30]} />
                    </Suspense>
                </Physics>
                <Perf />
                <CarControls />
            </Canvas>
        </CarKeyboardControls>
    )
}
