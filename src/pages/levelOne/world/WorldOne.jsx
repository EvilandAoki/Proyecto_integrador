import { useGLTF } from '@react-three/drei'
import { RigidBody } from "@react-three/rapier"

export const WorldOne = (props) => {
    const { nodes, materials } = useGLTF('/assets/models/maps/basemapa.glb')
    return (
        <group {...props} dispose={null}>
            <RigidBody type="fixed" coliders="trimesh">
                <group name="Scene">
                    <mesh name="walls" geometry={nodes.walls.geometry} material={materials.Material} />
                    <mesh name="floor" geometry={nodes.floor.geometry} material={materials.Material} />
                </group>
            </RigidBody>
        </group>
    )
}
