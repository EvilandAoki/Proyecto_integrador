import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { usePlane } from '@react-three/cannon';
import { Ball } from '../../../components/ball/Ball';

const Plane = ({ position, rotation, args, color }) => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: position, // Posición del piso
        type: 'trimesh',
        args: args
    }));

    return (
        <mesh ref={ref} position={position} rotation={rotation} receiveShadow>
            <planeGeometry args={args} />
            <meshBasicMaterial color={color} />
        </mesh>
    );
};

export const WorldThree = (props) => {
    return (
        <>
            <Plane position={[0, -0.81, -30]} rotation={[-Math.PI / 2, 0, 0]} args={[100, 100]} color="grey" />
            {/* Componente de esfera */}
            <Ball />
        </>
    )
}


