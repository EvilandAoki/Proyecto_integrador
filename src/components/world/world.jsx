import { useGLTF , useTexture } from "@react-three/drei";

export default function World(props) {
    const {nodes , materials} = useGLTF("/assets/models/world/WordSquidglb.glb")
    const PATH = "/assets/textures/"
    const propsTexture = useTexture({
        map: PATH + "coast_sand_01_diff_1k.jpg",
        normalMap: PATH + "coast_sand_01_disp_1k.png",
        roughnessMap: PATH + "coast_sand_01_rough_1k.jpg",
        displacementMap: PATH + "coast_sand_01_nor_gl_1k.jpg",
    })
    return (
        <group {...props} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Walls.geometry}
            material={materials.Material}
          />
          <mesh geometry={nodes.Floor.geometry}>
            <meshStandardMaterial {...propsTexture} />
          </mesh>
            
        </group>
      );
}

