import { useBox, usePlane } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei'
import { ColliderBox } from '../../../components/colliders/ColliderBox';

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

export const WorldOne = (props) => {
    return (
        <>
            {/* Pista horizontal */}
            <Plane position={[0, -0.81, -30]} rotation={[-Math.PI / 2, 0, 0]} args={[100, 100]} color="grey" />

            <ColliderBox position={[-3.4, -0.3, 2.3]} scale={[0.3, 1, 3]} color="orange" />
            <ColliderBox position={[-3.4, -0.3, -1.1]} scale={[0.3, 1, 3]} color="orange" />
            <ColliderBox position={[-11, -0.3, -1.1]} scale={[0.3, 1, 3]} color="orange" />
            <ColliderBox position={[1.65, -0.3, -4.5]} scale={[0.3, 1, 3]} color="orange" />

            <ColliderBox position={[4.9, -0.3, -4.2]} scale={[0.3, 1, 9.2]} color="blue" />

            <ColliderBox position={[-0.2, -0.3, 2.3]} scale={[0.3, 1, 3]} color="blue" />
            <ColliderBox position={[-23.35, -0.3, -29.2]} scale={[0.3, 1, 60]} color="orange" />
            <ColliderBox position={[29.8, -0.3, -29.2]} scale={[0.3, 1, 60]} color="blue" />

            <ColliderBox position={[-13.2, -0.3, 0.6]} scale={[20, 1, 0.3]} color="blue" />
            <ColliderBox position={[14.6, -0.3, 0.6]} scale={[30, 1, 0.3]} color="blue" />

            <ColliderBox position={[-3.2, -0.3, -2.8]} scale={[10, 1, 0.3]} color="blue" />
            <ColliderBox position={[9, -0.3, -8.9]} scale={[35, 1, 0.3]} color="red" />
            <ColliderBox position={[4.96, -0.3, -59.35]} scale={[50, 1, 0.3]} color="blue" />
            {
                //este
            }
            <ColliderBox position={[28, -0.3, -8.86]} scale={[2.9, 1, 0.3]} color="green" />
            {
                //este
            }

            <ColliderBox position={[1.65, -0.3, -10.5]} scale={[0.3, 1, 3]} color="green" />
            {
                //este
            }
        </>
    )
}
