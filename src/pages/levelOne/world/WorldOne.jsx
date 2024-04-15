import { useGLTF } from '@react-three/drei'

export const WorldOne = (props) => {
    const { nodes, materials } = useGLTF('/assets/models/maps/basemapa.glb')
    return (
        <group {...props} dispose={null}>
            <group>
                <mesh geometry={nodes.walls.geometry} material={materials.Material} />
                <mesh geometry={nodes.floor.geometry} material={materials.Material} />
            </group>
        </group>
    )
}
