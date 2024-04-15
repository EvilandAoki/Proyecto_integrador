import React from 'react'
import { Color } from "three";

export const LightsOne = () => {
    return (
        <>
            <directionalLight position={[50, 10, 5]} />
            <ambientLight intensity={0.5} />
        </>
    )
}
