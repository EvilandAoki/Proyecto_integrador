import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox, usePlane } from '@react-three/cannon'


export const TutorialMap = (props) => {
    const { nodes, materials } = useGLTF('/assets/models/maps/tutorial/MapaTutorial.glb')
    const floor = useRef();
    // Aplicar físicas de plano al piso
    const [floorPlane] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.81, 0], // Posición del piso
        type: 'trimesh',
        args: [100, 100]
    }));

    return (
        <group {...props} dispose={null}>
            <mesh
                name='road'
                receiveShadow={true}
                geometry={nodes.ROAD.geometry}
                material={materials['Material.003']}
            />
            <mesh
                name='walls'
                geometry={nodes.walls.geometry}
                material={materials['Material.001']}
            />
            <mesh
                ref={floorPlane}
                rotation-x={-Math.PI * 0.5}
                receiveShadow={true}
                name='floor'
                geometry={nodes.floor.geometry}
                material={materials['Material.002']}
            >
                <planeGeometry args={[200, 200]} />
            </mesh>
        </group>
    );
}
