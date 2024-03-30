import { useGLTF } from "@react-three/drei"

export const Car = (props) => {
    const { nodes, materials } = useGLTF('/assets/models/cars/porche_ruedas.glb')

    console.log(nodes, "nodes")
    console.log(materials,"materiales")

    return (
        <group {...props} dispose={null}>
          <mesh castShadow receiveShadow geometry={nodes.Circle001.geometry} material={materials.car} />
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
            material={materials.plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_3.geometry}
            material={materials.chrome}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_4.geometry}
            material={materials.windows}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_5.geometry}
            material={materials.silencer}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_6.geometry}
            material={materials.car_headlights}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_7.geometry}
            material={materials.turn_signals}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_8.geometry}
            material={materials.stop_signals}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_9.geometry}
            material={materials.reverse}
          />
          <group
            position={[0.36, 0.175, 0.67]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.193, 0.069, 0.193]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder.geometry}
              material={materials.rubber}
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
              material={materials.dark_rims}
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
              material={materials.brake_disk}
            />
          </group>
          <group
            position={[-0.358, 0.175, 0.649]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.193, 0.069, 0.193]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002.geometry}
              material={materials.rubber}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002_1.geometry}
              material={materials.rims}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002_2.geometry}
              material={materials.dark_rims}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002_3.geometry}
              material={materials.brake}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002_4.geometry}
              material={materials.brake_disk}
            />
          </group>
          <group
            position={[0.36, 0.175, -0.606]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.188, 0.069, 0.188]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001.geometry}
              material={materials.rubber}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_1.geometry}
              material={materials.rims}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_2.geometry}
              material={materials.dark_rims}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_3.geometry}
              material={materials.brake}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_4.geometry}
              material={materials.brake_disk}
            />
          </group>
          <group
            position={[-0.343, 0.164, -0.641]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.188, 0.069, 0.188]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003.geometry}
              material={materials.rubber}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_1.geometry}
              material={materials.rims}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_2.geometry}
              material={materials.dark_rims}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_3.geometry}
              material={materials.brake}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_4.geometry}
              material={materials.brake_disk}
            />
          </group>
        </group>
      )
}
