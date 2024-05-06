import { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { RigidBody, quat } from "@react-three/rapier"
import { useCarContext } from "../../context"
import { useBox } from "@react-three/cannon"


const Supra = (props) => {
  const { nodes, materials } = useGLTF('/assets/models/cars/supra_blender.glb')
  const { setCar } = useCarContext()

  const supraBodyRef = useRef()
  const supraRef = useRef()

  const position = [-1.5, 0.5, 20];
  const width = 0.15;
  const height = 0.07;
  const front = 0.15;
  const wheelRadius = 0.5;

  const chassisBodyArgs = [width, height, front * 2];

  const [chassisBody, chassisApi] = useBox(
    () => ({ args: chassisBodyArgs, mass: 150, position }),
    useRef(null)
  )


  // useEffect(() => {
  //   setCar({
  //     ref: supraRef.current,
  //     body: supraBodyRef.current
  //   })
  // }, [supraBodyRef?.current, supraRef?.current])

  // console.log(nodes, "nodes")
  // console.log(materials, "materiales")


  return (<>
    <group  {...props} ref={chassisBody} type="fixed"  dispose={null} >

      <group >
        <group>
          <mesh castShadow={true} geometry={nodes.car_1.geometry} material={materials.main_color} />
          <mesh castShadow={true} geometry={nodes.car_2.geometry} material={materials.dark_plastic} />
          <mesh castShadow={true} geometry={nodes.car_3.geometry} material={materials.back_ligths} />

          <group>
            <mesh castShadow={true} geometry={nodes.wheel_FL_1.geometry} material={materials.tire} />
            <mesh castShadow={true} geometry={nodes.wheel_FL_2.geometry} material={materials.rims} />
          </group>

          <group>
            <mesh castShadow={true} geometry={nodes.wheel_FR_1.geometry} material={materials.tire} />
            <mesh castShadow={true} geometry={nodes.wheel_FR_2.geometry} material={materials.rims} />
          </group>

          <group>
            <mesh castShadow={true} geometry={nodes.wheel_RL_1.geometry} material={materials.tire} />
            <mesh castShadow={true} geometry={nodes.wheel_RL_2.geometry} material={materials.rims} />
          </group>

          <group>
            <mesh castShadow={true} geometry={nodes.wheel_RR_1.geometry} material={materials.tire} />
            <mesh castShadow={true} geometry={nodes.wheel_RR_2.geometry} material={materials.rims} />
          </group>

        </group>
      </group>

    </group>
  </>
  )
}

export default Supra
