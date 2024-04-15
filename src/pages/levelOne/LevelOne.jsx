import { KeyboardControls, OrbitControls, useKeyboardControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import React, { Suspense } from 'react'
import { WorldOne } from './world/WorldOne'
import { LightsOne } from './lights/LightsOne'
import { Supra } from '../../components/cars/Supra'
import { Porsche } from '../../components/cars/Porsche'

export const LevelOne = () => {

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
            <LightsOne />
            <OrbitControls makeDefault />
            <Physics debug={true}>
                <Suspense>
                    <WorldOne />
                    <Supra />
                    <Porsche />
                </Suspense>
            </Physics>
            <Perf />
        </Canvas>

    )
}
