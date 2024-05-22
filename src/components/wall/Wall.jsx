import { useBox, usePlane } from '@react-three/cannon';
import React, { useState } from 'react'
import { useCarContext } from '../../context/CarControlsContext';

export const Wall = () => {

    const { setStartToEnd, startToEnd } = useCarContext();

    const position = [-1.8, -0.7, 3]
    const scale = [2.8, 0.1, 0.2]
    const color = "red"

    const handleCollide = (e) => {
        console.log(e, "mi target")
        api.sleep();
        api.position.set(0, -100, 0);
        setStartToEnd(true)
    };

    const [wallBody, api] = useBox(() => ({
        args: scale,
        position: position,
        type: "Static",
        onCollide: handleCollide
    }));

    // return (
    //     <mesh position={position} >
    //         <boxGeometry args={scale} />
    //         <meshBasicMaterial color={color} />
    //     </mesh>
    // );
}
