import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

export const Porsche = (props) => {
  const { nodes, materials } = useGLTF('/assets/models/cars/porche_blender.glb')

  console.log(nodes, "nodes")
  console.log(materials, "materiales")

  return (
    <RigidBody colliders="hull" position={[5, 0, 5]} scale={1.5}>
      <group {...props} dispose={null}>
        <group>
          <group>
            <mesh geometry={nodes.Circle001.geometry} material={materials.car} />
            <mesh geometry={nodes.Circle001_1.geometry} material={materials.dark_metal} />
            <mesh geometry={nodes.Circle001_2.geometry} material={materials.car_headlights} />
            <group>
              <mesh geometry={nodes.wheel_FL_1.geometry} material={materials.rubber} />
              <mesh geometry={nodes.wheel_FL_2.geometry} material={materials.rims} />
            </group>
            <group>
              <mesh geometry={nodes.wheel_FR_1.geometry} material={materials.rubber} />
              <mesh geometry={nodes.wheel_FR_2.geometry} material={materials.rims} />
            </group>
            <group>
              <mesh geometry={nodes.wheel_RL_1.geometry} material={materials.rubber} />
              <mesh geometry={nodes.wheel_RL_2.geometry} material={materials.rims} />
            </group>
            <group>
              <mesh geometry={nodes.wheel_RR_1.geometry} material={materials.rubber} />
              <mesh geometry={nodes.wheel_RR_2.geometry} material={materials.rims} />
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  )


}
