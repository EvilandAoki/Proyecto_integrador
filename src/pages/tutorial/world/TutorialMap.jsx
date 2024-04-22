import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export const TutorialMap = (props) => {
    const { nodes, materials } = useGLTF('/assets/models/maps/tutorial/MapaTutorial.glb')
    return (
        <RigidBody colliders="trimesh" type='fixed'>
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.ROAD.geometry}
                    material={materials['Material.003']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.walls.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.floor.geometry}
                    material={materials['Material.002']}
                />
            </group>
        </RigidBody>
    )
}
