import { Canvas } from "@react-three/fiber"
import { LightsOne } from "../levelOne/lights/LightsOne"
import { CameraControls, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useState } from "react"
import { Perf } from "r3f-perf"
import { WorldThree } from "./world/WorldThree"
import { LightsTutorial } from "./lights/lightsTutorial"
import CarControls, { CarKeyboardControls } from "../../components/controls/CarControls"
import { Physics } from "@react-three/cannon"

const URLENVIRONMENT = '/assets/textures/envmap.hdr'
const URLENVIRONMENT2 = '/assets/textures/dikhololo_night_1k.hdr'

export const LevelThree = () => {
    const [thirdPerson, setThirdPerson] = useState(false);
    const [cameraPosition, setCameraPosition] = useState([-20, 3.9, 6.21]);

    return (
        <Canvas
            // camera={{
            //     fov: 45,
            //     near: 0.7,
            //     far: 300,
            //     position: [5, 4, 5]
            // }}
            shadows={true}
        >
            <Environment files={URLENVIRONMENT} background={"both"} />
            <PerspectiveCamera makeDefault position={cameraPosition} fov={80} />
            {!thirdPerson && (
                <OrbitControls target={[10.64, -10.71, 0.03]} />
            )}
            <color attach="background" args={["#ececec"]} />
            <LightsTutorial />
            <Physics
                broadphase="SAP"
                gravity={[0, -2.6, 0]}
            >
                <Suspense>
                    <WorldThree />
                </Suspense>
            </Physics>
            <Perf />
        </Canvas>
    )
}
