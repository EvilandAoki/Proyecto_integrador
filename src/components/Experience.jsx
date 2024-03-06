import { Box, Circle, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { BoxGeometry, CylinderGeometry, Mesh, MeshDistanceMaterial, MeshLambertMaterial, MeshMatcapMaterial, SphereGeometry } from "three";

export const Experience = () => {

    const time = useRef(0);
    const boxRef = useRef(null);

    useFrame((state, delta) => {
        boxRef.current.rotation.x += 1 * delta;
    })

    return (
        <>

            <ambientLight intensity={0.5} />
            <directionalLight position={[9, 10, 0]} intensity={0.4} />
            <OrbitControls />
            <RigidBody type="fixed" position={[1, 9, 0]}>
                <mesh ref={boxRef}>
                <boxGeometry args={[5, 5, 5]} />
                <meshStandardMaterial color={"purple"} />
                </mesh>
            </RigidBody>
            <RigidBody type="fixed" >
                <Box position={[0, 0, 0]} args={[100, 5, 10]}>
                    <meshStandardMaterial color="springgreen" />
                </Box>
            </RigidBody>
        </>
    );
};