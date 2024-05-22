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

            <ColliderBox position={[-3.4, -0.3, 2.3]} scale={[0.3, 1, 3]} color="blue" />
            <ColliderBox position={[-3.4, -0.3, -1.1]} scale={[0.3, 1, 3]} color="blue" />
            <ColliderBox position={[1.65, -0.3, -4.5]} scale={[0.3, 1, 3]} color="blue" />

            <ColliderBox position={[4.9, -0.3, -4.2]} scale={[0.3, 1, 9.2]} color="blue" />

            <ColliderBox position={[-0.2, -0.3, 2.3]} scale={[0.3, 1, 3]} color="blue" />
            <ColliderBox position={[-23.35, -0.3, -29.2]} scale={[0.3, 1, 60]} color="blue" />
            <ColliderBox position={[29.8, -0.3, -29.2]} scale={[0.3, 1, 60]} color="blue" />

            <ColliderBox position={[-13.2, -0.3, 0.6]} scale={[20, 1, 0.3]} color="blue" />
            <ColliderBox position={[14.6, -0.3, 0.6]} scale={[30, 1, 0.3]} color="blue" />

            <ColliderBox position={[-3.2, -0.3, -2.8]} scale={[10, 1, 0.3]} color="blue" />
            <ColliderBox position={[9, -0.3, -8.9]} scale={[35, 1, 0.3]} color="blue" />
            
            <ColliderBox position={[4.96, -0.3, -59.35]} scale={[50, 1, 0.3]} color="blue" />
            <ColliderBox position={[4.96, -0.3, -59.35]} scale={[50, 1, 0.3]} color="blue" />


            {
                //Abajo Derecha
            }
            <ColliderBox position={[23.6, -0.3, -5.7]} scale={[12, 1, 0.3]} color="blue" />
            <ColliderBox position={[17.75, -0.3, -4]} scale={[0.3, 1, 3.1]} color="blue" />
            <ColliderBox position={[14.5, -0.3, -5.6]} scale={[0.3, 1, 6.3]} color="blue" />
            <ColliderBox position={[11.16, -0.3, -2.6]} scale={[6.38, 1, 0.3]} color="blue" />
            <ColliderBox position={[8.11, -0.3, -4.30]} scale={[0.3, 1, 3.1]} color="blue" />
            <ColliderBox position={[22.36, -0.3, -2.6]} scale={[8.9, 1, 0.3]} color="blue" />
            <ColliderBox position={[-1.5, -0.3, -7.3]} scale={[0.3, 1, 2.9]} color="blue" />
            <ColliderBox position={[-5.15, -0.3, -6]} scale={[7, 1, 0.3]} color="blue" />
            <ColliderBox position={[-11, -0.3, -5.56]} scale={[0.3, 1, 12]} color="blue" />
            <ColliderBox position={[9, -0.3, -11.7]} scale={[35, 1, 0.3]} color="blue" />
            
            {
                //Abajo Izquierda
            }
            <ColliderBox position={[-11, -0.3, -19.9]} scale={[0.3, 1, 10.9]} color="blue" />
            <ColliderBox position={[-16.2, -0.3, -14.6]} scale={[10, 1, 0.3]} color="blue" />
            <ColliderBox position={[-13.65, -0.3, -11.4]} scale={[5, 1, 0.3]} color="blue" />
            <ColliderBox position={[-20.5, -0.3, -11.4]} scale={[5.3, 1, 0.3]} color="green" />
            <ColliderBox position={[-14.1, -0.3, -2.4]} scale={[3.5, 1, 0.3]} color="blue" />
            <ColliderBox position={[-16, -0.3, -6.75]} scale={[0.3, 1, 9]} color="red" />
            <ColliderBox position={[-18, -0.3, -6.75]} scale={[0.3, 1, 9]} color="blue" />
            <ColliderBox position={[-20.5   , -0.3, -4]} scale={[0.3, 1, 9]} color="purple" />
            <ColliderBox position={[-18.15, -0.3, -18.2]} scale={[10, 1, 0.3]} color="green" />
            <ColliderBox position={[-16.15, -0.3, -21.5]} scale={[10, 1, 0.3]} color="green" />
            <ColliderBox position={[-18.15, -0.3, -25.1]} scale={[10, 1, 0.3]} color="green" />
            {
                //este
            }
            {/* Horizontal */}<ColliderBox position={[0.07, -0.3, -11.6]} scale={[2.9, 1, 0.3]} color="green" />
            <ColliderBox position={[-1, -0.3, -13]} scale={[0.3, 1, 2.9]} color="yellow" />
            {/* Vertical */}<ColliderBox position={[-1.5, -0.3, 15.4]} scale={[0.3, 1, 2.9]} color="green" />            
        </>
    )
}
