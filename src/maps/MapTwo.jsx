import { useGLTF, useTexture } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"


export const MapTwo = (props) => {

    const { nodes, materials } = useGLTF('/assets/models/maps/mapTwo/LevelTwo.glb')
    return (
        <group {...props} dispose={null}>
          <group name="Scene">
            <mesh
              name="Walls"
              castShadow
              receiveShadow
              geometry={nodes.Walls.geometry}
              material={materials['Material.003']}
            />
            <mesh
              name="Floor"
              castShadow
              receiveShadow
              geometry={nodes.Floor.geometry}
              material={materials.Material}
            />
            <mesh
              name="road"
              castShadow
              receiveShadow
              geometry={nodes.road.geometry}
              material={materials['Material.004']}
            />
          </group>
        </group>
      )
}
