import { useKeyboardControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import React, { Suspense } from 'react'
import { Experience } from '../components/Experience.jsx'
import { Perf } from 'r3f-perf'

export const CanvasLevel = () => {

    // const [sub, get] = useKeyboardControls();

    // console.log(sub, "que me genera el sub?")
    // console.log(get, "que me genera el get?")

    return (
        <Canvas shadows camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [2.5, 4, 6]
        }}>
            <color attach="background" args={["#ececec"]} />
            <Suspense>
                <Physics>
                    {/* <Experience /> */}
                </Physics>
            </Suspense>
            <Perf />
        </Canvas>
    )
}
