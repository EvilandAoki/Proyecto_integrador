import { Canvas } from "@react-three/fiber"
import { LightsOne } from "../levelOne/lights/LightsOne"
import { CameraControls, Environment, PerspectiveCamera } from "@react-three/drei"
import React, { Suspense, useState } from 'react'
import { Perf } from "r3f-perf"
import { WorldTwo } from "./world/WorldTwo"
import { LightsTutorial } from "./lights/lightsTutorial"
import { Debug, Physics } from '@react-three/cannon'
import { CubeCar } from '../../components/cars/CubeCar'
import { useCarContext } from '../../context'
import { Ramp } from "../../components/ramp/Ramp"
import { TextFloat } from "../../components/text3D/TextFloat"

const URLENVIRONMENT2 = '/assets/textures/dikhololo_night_1k.hdr'

export const LevelTwo = () => {
    const [thirdPerson, setThirdPerson] = useState(false);
    const [cameraPosition, setCameraPosition] = useState([20, 53.9, 126.21]);

    const { car } = useCarContext()
    return (
        <>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.7,
                    far: 300,
                    position: [20, 54, 50]
                }}
            >
                <Environment files={URLENVIRONMENT2} background={"both"} />
                <Physics
                    broadphase="SAP"
                    gravity={[0, -2.6, 0]}
                    color={'red'}
                >
                    <CubeCar thirdPerson={thirdPerson} />
                    <PerspectiveCamera makeDefault position={[10, 10, 20]} />
                    <CameraControls />
                    <color attach="background" args={["#ececec"]} />
                    <LightsTutorial />
                    <Perf />
                    <WorldTwo />
                    
                </Physics>
                <TextFloat position={[-1.2, -1, -2]} text={"texto de prueba"} />
            </Canvas>
        </>
    )
}
