
import React from 'react'
import { Color, HemisphereLight } from "three";

// posiciones en luces en los ejes:  position={[100, 10, 5]}
// posiciones en luces en los ejes:  position={[100, 10, 5]}

export const LightsTutorial = () => {
    return (
        <>
            <directionalLight position={[100, 100, 100]} />
            <ambientLight />
        </>
    )
}
