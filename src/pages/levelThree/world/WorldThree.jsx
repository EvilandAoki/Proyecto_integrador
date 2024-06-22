import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { usePlane } from '@react-three/cannon';
import { GoalWall } from '../../../components/wall/GoalWall'
import { ColliderBox } from '../../../components/colliders/ColliderBox';
//import { Ball } from '../../../components/ball/Ball';

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
            <Plane position={[0, -0.81, -0]} rotation={[-Math.PI / 2, 0, 0]} args={[22, 35]} color="green" />
            {/* Componente de esfera */}
            {/* <Ball /> */}
            {/* Cancha */}
            <ColliderBox position={[-10, -0.3, 0]} scale={[0.3, 1, 30]} color="black" />
            <ColliderBox position={[10, -0.3, 0]} scale={[0.3, 1, 30]} color="black" />
            <ColliderBox position={[-6.15, -0.3, -15.15]} scale={[8, 1, 0.3]} color="black" />
            <ColliderBox position={[6.15, -0.3, -15.15]} scale={[8, 1, 0.3]} color="black" />
            <ColliderBox position={[-6.15, -0.3, 15.15]} scale={[8, 1, 0.3]} color="black" />
            <ColliderBox position={[6.15, -0.3, 15.15]} scale={[8, 1, 0.3]} color="black" />
            {/* Lineas */}
            <ColliderBox position={[0, -0.80, 0]} scale={[20, 0, 0.1]} color="white" />
            <ColliderBox position={[0, -0.80, -9]} scale={[10, 0, 0.1]} color="white" />
            <ColliderBox position={[0, -0.80, 9]} scale={[10, 0, 0.1]} color="white" />
            <ColliderBox position={[-5, -0.80, -12]} scale={[0.1, 0, 6.1]} color="white" />
            <ColliderBox position={[5, -0.80, -12]} scale={[0.1, 0, 6.1]} color="white" />
            <ColliderBox position={[-5, -0.80, 12]} scale={[0.1, 0, 6.1]} color="white" />
            <ColliderBox position={[5, -0.80, 12]} scale={[0.1, 0, 6.1]} color="white" />
            {/* Arco 1 */}
            <ColliderBox position={[2, -0.3, -16]} scale={[0.3, 1, 2]} color="blue" />
            <ColliderBox position={[-2, -0.3, -16]} scale={[0.3, 1, 2]} color="blue" />
            <ColliderBox position={[0, -0.3, -16.85]} scale={[3.7, 1, 0.3]} color="blue" />
            {/* Arco 2 */}
            <ColliderBox position={[2, -0.3, 16]} scale={[0.3, 1, 2]} color="blue" />
            <ColliderBox position={[-2, -0.3, 16]} scale={[0.3, 1, 2]} color="blue" />
            <ColliderBox position={[0, -0.3, 16.85]} scale={[3.7, 1, 0.3]} color="blue" />
            
        </>
    )
}

/* <GoalWall side={1} position={[4,0.001,2]} />
            <GoalWall side={2} position={[4,0.001,-2]} /> */
