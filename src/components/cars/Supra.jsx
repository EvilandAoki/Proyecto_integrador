import { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { RigidBody, quat } from "@react-three/rapier"
import { useCarContext } from "../../context"
import { useBox, useRaycastVehicle } from "@react-three/cannon"
import { useWheels } from "../../hooks/useWheels"


const Supra = (props) => {
  const { nodes, materials } = useGLTF('/assets/models/cars/supra_blender.glb')
  const { setCar } = useCarContext()

  const supraBodyRef = useRef()
  const supraRef = useRef()

  const position = [-3, 0.5, 10];
  const width = 2;
  const height = 0.7;
  const front = 4;
  const wheelRadius = 0.5;

  const chassisBodyArgs = [width, height, front];

  const [chassisBody, chassisApi] = useBox(
    () => ({ args: chassisBodyArgs, mass: 150, position }),
    useRef(null)
  )


  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
    }),
    useRef(null)
  )


  return (<>
    <group ref={chassisBody}>

      <group  {...props} type="fixed" dispose={null} >
        <group >
          <group>
            <mesh castShadow={true} geometry={nodes.car_1.geometry} material={materials.main_color} />
            <mesh castShadow={true} geometry={nodes.car_2.geometry} material={materials.dark_plastic} />
            <mesh castShadow={true} geometry={nodes.car_3.geometry} material={materials.back_ligths} />
            <group ref={wheels[0]}>
              <mesh castShadow={true} geometry={nodes.wheel_FL_1.geometry} material={materials.tire} />
              <mesh castShadow={true} geometry={nodes.wheel_FL_2.geometry} material={materials.rims} />
            </group>
            <group ref={wheels[1]}>
              <mesh castShadow={true} geometry={nodes.wheel_FR_1.geometry} material={materials.tire} />
              <mesh castShadow={true} geometry={nodes.wheel_FR_2.geometry} material={materials.rims} />
            </group>
            <group ref={wheels[2]} >
              <mesh castShadow={true} geometry={nodes.wheel_RL_1.geometry} material={materials.tire} />
              <mesh castShadow={true} geometry={nodes.wheel_RL_2.geometry} material={materials.rims} />
            </group>
            <group ref={wheels[3]} >
              <mesh castShadow={true} geometry={nodes.wheel_RR_1.geometry} material={materials.tire} />
              <mesh castShadow={true} geometry={nodes.wheel_RR_2.geometry} material={materials.rims} />
            </group>
          </group>
        </group>
      </group>
    </group>
  </>
  )
}

export default Supra
