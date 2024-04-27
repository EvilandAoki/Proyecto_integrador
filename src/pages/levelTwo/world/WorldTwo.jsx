import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export const WorldTwo = (props) => {
    const { nodes, materials } = useGLTF('/assets/models/maps/mapTwo/LevelTwo.glb')
    return (
        <RigidBody colliders="trimesh" type='fixed'>
            <group {...props} dispose={null}>
                <mesh
                name="Walls"
                castShadow
                receiveShadow
                geometry={nodes.Walls.geometry}
                material={materials['Material.003']}
                />
                <mesh
                name="Floor"
                castShadow
                receiveShadow
                geometry={nodes.Floor.geometry}
                material={materials.Material}
                />
                <mesh
                name="road"
                castShadow
                receiveShadow
                geometry={nodes.road.geometry}
                material={materials['Material.004']}
                />
            </group>
        </RigidBody>
    )
}
