import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox, usePlane } from '@react-three/cannon'
import { TextFloat } from '../../../components/text3D/TextFloat';
import { ColliderBox } from '../../../components/colliders/ColliderBox';
import { WallToEnd } from '../../../components/wall/WallToEnd';
import { useLocation } from "react-router-dom";

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

export const TutorialMap = (props) => {

    return (
        <>
            {/* Pista horizontal */}
            <Plane position={[0, -0.81, -30]} rotation={[-Math.PI / 2, 0, 0]} args={[100, 100]} color="grey" />
            <TextFloat position={[-1.2, 0, -2]} text={"Presiona"} color={"white"} />
            <TextFloat position={[-1.2, -0.2, -2]} text={"la tecla T"} color={"white"} />
            <WallToEnd position={[2.3, -0.6, -29]} scale={[2.5, 3, 0.2]} />
            {/* Inicio de mapa recordemos X:horizontal y: vertical z: altura */}
            <ColliderBox position={[-3.4, -0.3, 2.3]} scale={[0.3, 1, 3]} color="blue" />
            <ColliderBox position={[1, -0.3, 2.3]} scale={[0.3, 1, 3]} color="green" />
            <ColliderBox position={[1, -0.3, -2.4]} scale={[0.3, 1, 6]} color="green" />
            <ColliderBox position={[-7.26, -0.3, 0.7]} scale={[8, 1, 0.3]} color="blue" />
            <ColliderBox position={[-4.26, -0.3, -15]} scale={[14, 1, 0.3]} color="blue" />
            <ColliderBox position={[13, -0.3, -15]} scale={[6, 1, 0.3]} color="green" />
            <ColliderBox position={[-1.8, -0.3, -5.6]} scale={[6, 1, 0.3]} color="green" />
            <ColliderBox position={[2.8, -0.3, -16.8]} scale={[0.3, 1, 4]} color="blue" />
            <ColliderBox position={[-1.1, -0.3, -19]} scale={[8, 1, 0.3]} color="blue" />
            <ColliderBox position={[-5.3, -0.3, -21.8]} scale={[0.3, 1, 6]} color="blue" />
            <ColliderBox position={[10, -0.3, -18.8]} scale={[0.3, 1, 8]} color="green" />
            <ColliderBox position={[6.2, -0.3, -23]} scale={[8, 1, 0.3]} color="green" />
            <ColliderBox position={[10.5, -0.3, -5.6]} scale={[11, 1, 0.3]} color="green" />
            <ColliderBox position={[-5, -0.3, -8.4]} scale={[0.3, 1, 6]} color="green" />
            <ColliderBox position={[5, -0.3, -8.4]} scale={[0.3, 1, 6]} color="green" />
            <ColliderBox position={[-2, -0.3, -11.3]} scale={[6, 1, 0.3]} color="green" />
            <ColliderBox position={[9.1, -0.3, -11.3]} scale={[8, 1, 0.3]} color="green" />
            <ColliderBox position={[8.3, -0.3, 0.7]} scale={[15, 1, 0.3]} color="green" />
            <ColliderBox position={[16, -0.3, -14.1]} scale={[0.3, 1, 30]} color="green" />
            <ColliderBox position={[-11.3, -0.3, -14.2]} scale={[0.3, 1, 30]} color="blue" />
            <ColliderBox position={[-5.5, -0.3, -29.4]} scale={[12, 1, 0.3]} color="blue" />
            <ColliderBox position={[10.1, -0.3, -29.3]} scale={[12, 1, 0.3]} color="green" />
        </>
    )
}
