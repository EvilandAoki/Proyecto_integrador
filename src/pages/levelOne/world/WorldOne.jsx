import { useBox, usePlane } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei'
import { ColliderBox } from '../../../components/colliders/ColliderBox';
import { Wall } from '../../../components/wall/Wall';

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
            <Wall/>
            {
                //Base
            }
            <ColliderBox position={[-3.4, -0.3, 2.3]} scale={[0.3, 1, 3]} color="blue" />
            <ColliderBox position={[-3.4, -0.3, -1.1]} scale={[0.3, 1, 3]} color="blue" />
            <ColliderBox position={[1.65, -0.3, -4.5]} scale={[0.3, 1, 3]} color="blue" />
            <ColliderBox position={[4.9, -0.3, -4.2]} scale={[0.3, 1, 9.2]} color="blue" />
            <ColliderBox position={[-0.2, -0.3, 2.3]} scale={[0.3, 1, 3]} color="blue" />
            <ColliderBox position={[-23.35, -0.3, -13.7]} scale={[0.3, 1, 28.9]} color="blue" />
            <ColliderBox position={[29.8, -0.3, -13.7]} scale={[0.3, 1, 28.9]} color="blue" />
            <ColliderBox position={[-13.2, -0.3, 0.6]} scale={[20, 1, 0.3]} color="blue" />
            <ColliderBox position={[14.6, -0.3, 0.6]} scale={[30, 1, 0.3]} color="blue" />
            <ColliderBox position={[-3.2, -0.3, -2.8]} scale={[10, 1, 0.3]} color="blue" />
            <ColliderBox position={[9, -0.3, -8.9]} scale={[35, 1, 0.3]} color="blue" />        
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
            <ColliderBox position={[-20.5, -0.3, -11.4]} scale={[5.3, 1, 0.3]} color="blue" />
            <ColliderBox position={[-14.1, -0.3, -2.4]} scale={[3.5, 1, 0.3]} color="blue" />
            <ColliderBox position={[-16, -0.3, -6.75]} scale={[0.3, 1, 9]} color="blue" />
            <ColliderBox position={[-18, -0.3, -6.75]} scale={[0.3, 1, 9]} color="blue" />
            <ColliderBox position={[-20.5   , -0.3, -4]} scale={[0.3, 1, 9]} color="blue" />
            <ColliderBox position={[-18.15, -0.3, -18.2]} scale={[10, 1, 0.3]} color="blue" />
            <ColliderBox position={[-16.15, -0.3, -21.5]} scale={[10, 1, 0.3]} color="blue" />
            <ColliderBox position={[-18.15, -0.3, -25.1]} scale={[10, 1, 0.3]} color="blue" />
            {
                //Arriba Izquierda
            }
            <ColliderBox position={[-10.15, -0.3, -28]} scale={[26, 1, 0.3]} color="blue" />
            <ColliderBox position={[-8.35, -0.3, -18.8]} scale={[0.3, 1, 13.9]} color="blue" />
            <ColliderBox position={[3, -0.3, -20]} scale={[0.3, 1, 16.3]} color="blue" />
            <ColliderBox position={[-8.35, -0.3, -18.8]} scale={[0.3, 1, 13.9]} color="blue" />
            <ColliderBox position={[-3.7, -0.3, -25.6]} scale={[9, 1, 0.3]} color="blue" />
            <ColliderBox position={[0.95, -0.3, -20.25]} scale={[0.3, 1, 11]} color="blue" />
            <ColliderBox position={[-2.7, -0.3, -14.85]} scale={[7, 1, 0.3]} color="blue" />
            <ColliderBox position={[-6.1, -0.3, -19.5]} scale={[0.3, 1, 9]} color="blue" />
            <ColliderBox position={[-3.7, -0.3, -23.86]} scale={[4.5, 1, 0.3]} color="blue" />
            <ColliderBox position={[-1.6, -0.3, -20.45]} scale={[0.3, 1, 6.5]} color="blue" />            
            {
                //Arriba Derecha
            }
            <ColliderBox position={[17.65, -0.3, -28]} scale={[24, 1, 0.3]} color="blue" />
            <ColliderBox position={[26.3, -0.3, -20.25]} scale={[0.3, 1, 11]} color="blue" />
            <ColliderBox position={[23.3, -0.3, -21.35]} scale={[0.3, 1, 13]} color="blue" />
            <ColliderBox position={[25, -0.3, -25.9]} scale={[3, 1, 0.3]} color="blue" />
            <ColliderBox position={[21.65, -0.3, -15]} scale={[3, 1, 0.3]} color="blue" />
            <ColliderBox position={[20, -0.3, -20.35]} scale={[0.3, 1, 11]} color="blue" />
            <ColliderBox position={[11.3, -0.3, -15]} scale={[12, 1, 0.3]} color="blue" />
            <ColliderBox position={[5.45, -0.3, -18]} scale={[0.3, 1, 5.69]} color="blue" />
            <ColliderBox position={[10.16, -0.3, -21]} scale={[14, 1, 0.3]} color="blue" />
            <ColliderBox position={[13.3, -0.3, -18.15]} scale={[8, 1, 0.3]} color="blue" />
            <ColliderBox position={[17.15, -0.3, -16.5]} scale={[0.3, 1, 3]} color="blue" />
            <ColliderBox position={[5.8, -0.3, -26.35]} scale={[0.3, 1, 3]} color="blue" />
            <ColliderBox position={[13.3, -0.3, -25]} scale={[8, 1, 0.3]} color="blue" />
            <ColliderBox position={[17.15, -0.3, -23]} scale={[0.3, 1, 4]} color="blue" />         
        </>
    )
}
