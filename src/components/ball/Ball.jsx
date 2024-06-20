import { useSphere } from '@react-three/cannon';
import React from 'react'

export const Ball = () => {
    // Define el cuerpo físico de la esfera
    const [ref] = useSphere(() => ({
        mass: 1, // Masa de la esfera
        position: [0, 5, 0], // Posición inicial
        args: [1], // Radio de la esfera
    }));

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
}
