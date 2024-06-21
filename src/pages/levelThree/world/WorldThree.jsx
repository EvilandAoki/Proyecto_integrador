import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { usePlane } from '@react-three/cannon';
import { GoalWall } from '../../../components/wall/GoalWall'

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
            <GoalWall side={1} position={[4,0.001,2]} />
            <GoalWall side={2} position={[4,0.001,-2]} />
            {/* Componente de esfera */}
        </>
    )
}


