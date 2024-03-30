import { Box, Circle, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { BoxGeometry, CylinderGeometry, Mesh, MeshDistanceMaterial, MeshLambertMaterial, MeshMatcapMaterial, SphereGeometry } from "three";
import { Car } from "../cars/Car";
import { MapOne } from "../maps/MapOne";

export const Experience = () => {

    return (
        <>

            <ambientLight  />
            <directionalLight position={[10, 10, 5]} />
            <OrbitControls makeDefault />
            <MapOne />
            <Car/>

        </>
    );
};