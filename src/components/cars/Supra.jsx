import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

export const Supra = (props) => {
  const { nodes, materials } = useGLTF('/assets/models/cars/supra_blender.glb')

  console.log(nodes, "nodes")
  console.log(materials, "materiales")

  return (
    <RigidBody colliders="hull" position={[2, 0, 2]}>
      <group {...props} dispose={null}>
        <group>
          <group>
            <mesh geometry={nodes.car_1.geometry} material={materials.main_color} />
            <mesh geometry={nodes.car_2.geometry} material={materials.dark_plastic} />
            <mesh geometry={nodes.car_3.geometry} material={materials.back_ligths} />

            <group>
              <mesh geometry={nodes.wheel_FL_1.geometry} material={materials.tire} />
              <mesh geometry={nodes.wheel_FL_2.geometry} material={materials.rims} />
            </group>

            <group>
              <mesh geometry={nodes.wheel_FR_1.geometry} material={materials.tire} />
              <mesh geometry={nodes.wheel_FR_2.geometry} material={materials.rims} />
            </group>

            <group>
              <mesh geometry={nodes.wheel_RL_1.geometry} material={materials.tire} />
              <mesh geometry={nodes.wheel_RL_2.geometry} material={materials.rims} />
            </group>

            <group>
              <mesh geometry={nodes.wheel_RR_1.geometry} material={materials.tire} />
              <mesh geometry={nodes.wheel_RR_2.geometry} material={materials.rims} />
            </group>

          </group>
        </group>
      </group>
    </RigidBody>

  )

}
