import { Box, Circle, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { BoxGeometry, CylinderGeometry, Mesh, MeshDistanceMaterial, MeshLambertMaterial, MeshMatcapMaterial, SphereGeometry } from "three";
import { Car } from "../cars/Car";
import { MapOne } from "../maps/MapOne";

export const Experience = () => {

    return (
        <>
            <ambientLight />
            <directionalLight position={[10, 10, 5]} />
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <Physics debug={true}>
                <Car />
                <RigidBody>
                    <mesh castShadow position={[2, 2, 0]}>
                        <boxGeometry />
                        <meshStandardMaterial color={"orange"} />
                    </mesh>
                </RigidBody>

                <MapOne />

            </Physics>
        </>
    );
};