import { useCompoundBody } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { forwardRef, useRef } from "react";
import { useCarContext } from "../../../context";

export const Wheel = forwardRef(({ leftSide, ...props }, ref) => {
  
  console.log(leftSide, "leftSide")
  console.log(ref, "ref")

  const { nodes, materials } = useGLTF('public/assets/models/cars/wheel-draco.glb')
  const radius = 0.38
  const scale = radius / 0.34;


  useCompoundBody(
    () => ({
      mass: 50,
      type: 'Kinematic',
      material: 'wheel',
      collisionFilterGroup: 0,
      shapes: [{ args: [radius, radius, 0.5, 16], rotation: [0, 0, -Math.PI / 2], type: 'Cylinder' }],
      ...props,
    }),
    ref,
    [radius],
  )

  return (
    <group ref={ref} dispose={null} >
      <group scale={scale} >
        <group scale={leftSide ? -1 : 1}>
          <group>
            <mesh castShadow geometry={nodes.Mesh_14.geometry} material={materials['Material.002']} />
            <mesh castShadow geometry={nodes.Mesh_14_1.geometry} material={materials['Material.009']} />
          </group>
        </group>
      </group>
    </group>
  )
})

