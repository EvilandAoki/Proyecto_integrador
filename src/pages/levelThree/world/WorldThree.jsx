import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export const WorldThree = (props) => {
    const { nodes, materials } = useGLTF('/assets/models/maps/mapThree/LevelThree.glb')
    return (
        <RigidBody colliders="trimesh" type='fixed'>
            <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Walls.geometry}
                material={materials['Material.003']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Floor.geometry}
                material={materials['Material.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={materials['Material.002']}
            />
            </group>
        </RigidBody>
    )
    
}
