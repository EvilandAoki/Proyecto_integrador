import {useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useCarContext } from "../../context"

const Supra = (props) => {
  const { nodes, materials } = useGLTF('/assets/models/cars/supra_blender.glb')
  const {setCar} = useCarContext()

  const supraBodyRef = useRef()
  const supraRef = useRef()

  useEffect(() => {
    setCar({
      ref: supraRef.current,
      body: supraBodyRef.current
    })
  }, [supraBodyRef?.current, supraRef?.current])

  console.log(nodes, "nodes")
  console.log(materials, "materiales")

  return (<>
    <group {...props} dispose={null}>
      <RigidBody ref={supraBodyRef} type="dynamic" colliders="hull"  restitution={0.2} friction={1}  position={[0, 0, 5]}>
        <group ref={supraRef}>
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
      </RigidBody>
    </group>
    </>
  )
}

export default Supra
