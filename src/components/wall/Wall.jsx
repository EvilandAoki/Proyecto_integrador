import { useBox, usePlane } from '@react-three/cannon';
import React, { useState } from 'react'

export const Wall = () => {

    const [colision, setcolision] = useState(0)

    const position = [-1.6, -0.3, 1.2]
    const scale = [3, 1, 0.3]
    const color = "red"


    const handleCollide = (e) => {
        api.sleep();
        api.position.set(0, -100, 0);
        
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
