import { useBox, usePlane } from '@react-three/cannon';
import React, { useState } from 'react'

export const Wall = () => {

    const [colision, setcolision] = useState(0)

    const position = [-1.8, -0.7, 3]
    const scale = [2.8, 0.1, 0.2]
    const color = "red"


    const handleCollide = (e) => {
        console.log("choco?",e)
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
