
import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, } from "@react-three/drei"
import { Perf } from "r3f-perf"
import { TutorialMap } from "./world/TutorialMap"
import { LightsTutorial } from "./lights/lightsTutorial"
import AceleracionVelocimetro from "./../../components/controls/Speedometer"
import Supra from "../../components/cars/Supra"
import { Vector3 } from "three";

import { Debug, Physics } from "@react-three/cannon"
import { CubeCar } from "../../components/cars/CubeCar"


export const TutorialLevel = () => {
    const [thirdPerson, setThirdPerson] = useState(true);
    const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);
    const [aceleracion, setAceleracion] = useState(0);

    const handleFrame = (newAceleracion) => {
        setAceleracion(newAceleracion);
    };


    return (
        <>
        <Canvas
            shadows={true}
        >
            <PerspectiveCamera makeDefault position={cameraPosition} fov={80} />
            {!thirdPerson && (
                <OrbitControls target={[-2.64, -0.71, 0.03]} />
            )}
            <LightsTutorial />
            
            <Physics
                broadphase="SAP"
                gravity={[0, -9.8, 0]}
                frictionGravity={[0, 1, 0]}
                defaultContactMaterial={{ restitution: 0.3 }}
            >
                <Debug color="red">

                    <color attach="background" args={["#ececec"]} />
                    <LightsTutorial />
                    <Suspense>
                        <TutorialMap />
                        <CubeCar thirdPerson={thirdPerson} onFrame={handleFrame}/>
                        <Supra />
                    </Suspense>
                </Debug>
            </Physics>
            
            <Perf />
            
        </Canvas>
        <AceleracionVelocimetro aceleracion={aceleracion} />
        </>
    )
}
