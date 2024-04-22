import { Canvas } from "@react-three/fiber"
import { LightsOne } from "../levelOne/lights/LightsOne"
import { OrbitControls } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Suspense } from "react"
import { Perf } from "r3f-perf"
import { TutorialMap } from "./world/TutorialMap"
import { LightsTutorial } from "./lights/lightsTutorial"
import { Supra } from "../../components/cars/Supra"


export const TutorialLevel = () => {
    return (
        <Canvas
            camera={{
                fov: 45,
                near: 0.7,
                far: 300,
                position: [5, 4, 5]
            }}
        >
            <color attach="background" args={["#ececec"]} />
            <LightsTutorial />
            <OrbitControls makeDefault />
            <Physics debug={true}>
                <Suspense>
                    <TutorialMap />
                    <Supra />
                </Suspense>
            </Physics>
            <Perf />
        </Canvas>
    )
}
