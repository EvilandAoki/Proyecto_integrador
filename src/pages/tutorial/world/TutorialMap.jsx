import React from 'react'
import { useGLTF } from '@react-three/drei'


export const TutorialMap = (props) => {
    const { nodes, materials } = useGLTF('/assets/models/maps/tutorial/MapaTutorial.glb')
    return (
            <group {...props} dispose={null}>
                <mesh
                    receiveShadow={true}
                    geometry={nodes.ROAD.geometry}
                    material={materials['Material.003']}
                />
                <mesh
                    geometry={nodes.walls.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    receiveShadow={true}
                    geometry={nodes.floor.geometry}
                    material={materials['Material.002']}
                />
            </group>
    )
}
