import { Canvas } from "@react-three/fiber"
import { LightsOne } from "../levelOne/lights/LightsOne"
import { CameraControls, PerspectiveCamera } from "@react-three/drei"
import React, { Suspense, useState } from 'react'
import { Perf } from "r3f-perf"
import { WorldTwo } from "./world/WorldTwo"
import { LightsTutorial } from "./lights/lightsTutorial"
import { Debug, Physics } from '@react-three/cannon'
import { CubeCar } from '../../components/cars/CubeCar'
import { useCarContext } from '../../context'


export const LevelTwo = () => {
    const [thirdPerson, setThirdPerson] = useState(false);
    const [cameraPosition, setCameraPosition] = useState([-20, 3.9, 6.21]);

    const { car } = useCarContext()
    return (
            <>
                <Canvas
                    camera={{
                        fov: 45,
                        near: 0.7,
                        far: 300,
                        position: [5, 4, 5]
                    }}
                >
                    <Physics
                    broadphase="SAP"
                    gravity={[0, -2.6, 0]}
                    >
                        <CubeCar thirdPerson={thirdPerson} />
                        <PerspectiveCamera makeDefault position={[0, 10, 20]} />
                        <CameraControls />
                        <color attach="background" args={["#ececec"]} />
                        <LightsTutorial />                
                        <Perf />
                        <WorldTwo />
                    </Physics>
                    
                </Canvas>
            </>
    )
}
