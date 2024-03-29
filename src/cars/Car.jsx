import { useGLTF } from "@react-three/drei"

export const Car = (props) => {
    const { nodes, materials } = useGLTF('/src/assets/models/cars/porche.glb')

    console.log(nodes, "nodes")
    console.log(materials,"materiales")

    return (
        <group {...props} dispose={null}>
            <group>
                <group>
                    <mesh geometry={nodes.Circle001.geometry} material={materials.car} />
                    <mesh geometry={nodes.Circle001_1.geometry} material={materials.dark_metal} />
                    <mesh geometry={nodes.Circle001_2.geometry} material={materials.plastic} />
                    <mesh geometry={nodes.Circle001_3.geometry} material={materials.chrome} />
                    <mesh geometry={nodes.Circle001_4.geometry} material={materials.windows} />
                    <mesh geometry={nodes.Circle001_5.geometry} material={materials.silencer} />
                    <mesh geometry={nodes.Circle001_6.geometry} material={materials.car_headlights} />
                    <mesh geometry={nodes.Circle001_7.geometry} material={materials.turn_signals} />
                    <mesh geometry={nodes.Circle001_8.geometry} material={materials.stop_signals} />
                    <mesh geometry={nodes.Circle001_9.geometry} material={materials.reverse} />
                </group>
            </group>
        </group>
    )
}
