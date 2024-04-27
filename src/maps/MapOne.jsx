import { useGLTF, useTexture } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"


export const MapOne = (props) => {

    const { nodes, materials } = useGLTF('/assets/models/maps/basemapa.glb')
    return (
        <RigidBody colliders="trimesh" type="fixed">
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.walls.geometry}
                    material={materials.Material}
                />
                <mesh
                    castShadow={true}
                    receiveShadow
                    geometry={nodes.floor.geometry}
                    material={materials.Material}
                />
            </group>
        </RigidBody>
    )
}
