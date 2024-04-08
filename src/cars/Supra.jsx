import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

export const Supra = (props) => {
  const { nodes, materials } = useGLTF('/assets/models/cars/supra.glb')

  console.log(nodes, "nodes")
  console.log(materials, "materiales")

  return (
    <RigidBody type="fixed" colliders="cuboid" position={[1, 1, 1]}>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials.main_color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials.dark_metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials.dark_plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_3.geometry}
          material={materials.windows}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_4.geometry}
          material={materials.chrome}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_5.geometry}
          material={materials.back_ligths}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_6.geometry}
          material={materials.transparent}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_7.geometry}
          material={materials.brake_lights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_8.geometry}
          material={materials.turn_lights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_9.geometry}
          material={materials.headlights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_10.geometry}
          material={materials.silencer}
        />
        <group
          position={[0.641, 0.313, 1.206]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.315, 0.155, 0.315]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials.rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={materials.brake_disk}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_3.geometry}
            material={materials.brake}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_4.geometry}
            material={materials.chrome}
          />
        </group>
        <group
          position={[-0.642, 0.313, 1.206]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={[-0.315, -0.155, -0.315]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009.geometry}
            material={materials.tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_1.geometry}
            material={materials.rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_2.geometry}
            material={materials.brake_disk}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_3.geometry}
            material={materials.brake}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_4.geometry}
            material={materials.chrome}
          />
        </group>
        <group
          position={[0.641, 0.308, -1.183]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.315, 0.155, 0.315]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010.geometry}
            material={materials.tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_1.geometry}
            material={materials.rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_2.geometry}
            material={materials.brake_disk}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_3.geometry}
            material={materials.brake}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_4.geometry}
            material={materials.chrome}
          />
        </group>
        <group
          position={[-0.642, 0.308, -1.183]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={[-0.315, -0.155, -0.315]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011.geometry}
            material={materials.tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011_1.geometry}
            material={materials.rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011_2.geometry}
            material={materials.brake_disk}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011_3.geometry}
            material={materials.brake}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011_4.geometry}
            material={materials.chrome}
          />
        </group>
      </group>
    </RigidBody>
  )
}
