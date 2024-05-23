import { useBox } from '@react-three/cannon';
import React from 'react'
import { useCarContext } from '../../context/CarControlsContext';

export const WallToEnd = () => {

    const { setStartToEnd, startToEnd } = useCarContext();
    // const position = [4.3, -0.6, -28]
    const position = [3.3, -0.1, -6]
    const scale = [2.5, 3, 0.2]
    const color = "red"

    const handleCollide = (e) => {
        console.log(e, "mi target")
        // api.sleep();
        // api.position.set(0, -100, 0);
        setStartToEnd(false)
    };

    const [wallBody, api] = useBox(() => ({
        args: scale,
        position: position,
        type: "Static",
        onCollide: handleCollide
    }));

    return (
        <mesh position={position} >
            <boxGeometry args={scale} />
            <meshBasicMaterial color={color} />
        </mesh>
    );
}
