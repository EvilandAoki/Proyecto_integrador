import { Canvas } from "@react-three/fiber"
import { LightsOne } from "../levelOne/lights/LightsOne"
import { CameraControls, FlyControls, MotionPathControls, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Suspense, useRef } from "react"
import { Perf } from "r3f-perf"
import { TutorialMap } from "./world/TutorialMap"
import { LightsTutorial } from "./lights/lightsTutorial"
import Supra from "../../components/cars/Supra"
import CarControls, { CarKeyboardControls } from "../../components/controls/CarControls"
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { Porsche } from "../../components/cars/Porsche"

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
            >
                <PerspectiveCamera makeDefault position={[0, 10, 20]} />
                <CameraControls />
                <color attach="background" args={["#ececec"]} />
                <LightsTutorial />
                <Physics debug={true}>
                    <Suspense>
                        <TutorialMap />
                        <Supra />
                    </Suspense>
                </Physics>
                <Perf />
                <CarControls />
            </Canvas>
        </CarKeyboardControls>
    )
}
