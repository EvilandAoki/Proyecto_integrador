import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, } from "@react-three/drei"
import { Perf } from "r3f-perf"
import { TutorialMap } from "./world/TutorialMap"
import { LightsTutorial } from "./lights/lightsTutorial"
import Supra from "../../components/cars/Supra"
import { Debug, Physics } from "@react-three/cannon"


export const TutorialLevel = () => {

    return (
        <Canvas
            camera={{
                fov: 45,
                near: 0.7,
                far: 300,
                position: [5, 4, 5]
            }}
            shadows={true}
        >
            <OrbitControls makeDefault />
            <color attach="background" args={["#ececec"]} />
            <LightsTutorial />
            <Physics
                broadphase="SAP"
                gravity={[0, -9.8, 0]}
                frictionGravity={[0, 1, 0]}
                defaultContactMaterial={{ restitution: 0.3 }}
            >
                <Debug color="red">
                    <Suspense>
                        <TutorialMap />
                        <Supra />
                    </Suspense>
                </Debug>
            </Physics>
            <Perf />
        </Canvas>
    )
}
