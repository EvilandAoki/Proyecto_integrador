import { useGLTF, useTexture } from "@react-three/drei"


export const MapOne = (props) => {

    const { nodes, materials } = useGLTF('/src/assets/models/maps/basemapa.glb')

    const propsTextures = useTexture({
        
    })

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.walls.geometry}
                material={materials.Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.floor.geometry}
                material={materials.Material}
            />
        </group>
    )
}
