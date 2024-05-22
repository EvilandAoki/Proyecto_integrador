import { Environment, KeyboardControls, OrbitControls, PerspectiveCamera, useKeyboardControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Perf } from 'r3f-perf'
import React, { Suspense, useState } from 'react'
import { WorldOne } from './world/WorldOne'
import { LightsOne } from './lights/LightsOne'
import Supra from '../../components/cars/Supra'
import { Debug, Physics } from '@react-three/cannon'
import { Wheel } from '../../components/cars/porsche/Wheel'
import { Chassis } from '../../components/cars/porsche/Chassis'
import { Vehicle } from '../../components/cars/porsche/Vehicle'
import { CubeCar } from '../../components/cars/CubeCar'

const URLENVIRONMENT = 'public/assets/textures/envmap.hdr'
const URLENVIRONMENT2 = 'public/assets/textures/dikhololo_night_1k.hdr'

export const LevelOne = () => {
    const [thirdPerson, setThirdPerson] = useState(false);
    const [cameraPosition, setCameraPosition] = useState([-20, 3.9, 6.21]);

    return (
        <Canvas
            shadows={true}
        >
            <Environment files={URLENVIRONMENT} background={"both"} />
            <color attach="background" args={["#ececec"]} />
            <LightsOne />
            <PerspectiveCamera makeDefault position={cameraPosition} fov={80} />
            {!thirdPerson && (
                <OrbitControls target={[10.64, -10.71, 0.03]} />
            )}
            <Physics
                broadphase="SAP"
                gravity={[0, -2.6, 0]}
                // frictionGravity={[0, 1, 0]}
                // defaultContactMaterial={{ restitution: 0.3 }}
            >
                <Debug color="green">
                    <Suspense>
                        <WorldOne />
                        <CubeCar thirdPerson={thirdPerson} />
                    </Suspense>
                </Debug>
            </Physics>
            <Perf />
        </Canvas>

    )
}
