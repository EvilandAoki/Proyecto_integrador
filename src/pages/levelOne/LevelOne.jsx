import { KeyboardControls, OrbitControls, useKeyboardControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import React, { Suspense } from 'react'
import { WorldOne } from './world/WorldOne'
import { LightsOne } from './lights/LightsOne'

export const LevelOne = () => {

    return (
        <Canvas
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [0, 1, 0]
            }}
        >
            <color attach="background" args={["#ececec"]} />
            <LightsOne />
            <OrbitControls makeDefault />
            <Physics debug={true}>
                <Suspense>
                    <WorldOne />
                </Suspense>
            </Physics>
            <Perf />
        </Canvas>

    )
}
