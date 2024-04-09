import { Box, Circle, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { BoxGeometry, CylinderGeometry, Mesh, MeshDistanceMaterial, MeshLambertMaterial, MeshMatcapMaterial, SphereGeometry } from "three";
import World from "../../src/components/world/world.jsx"

export const Experience = () => {

    const time = useRef(0);
    const boxRef = useRef(null);
    const boxRef2 = useRef(null);
    const boxRef3 = useRef(null);
    const boxRef4 = useRef(null);
    const boxRef5 = useRef(null);
    const boxRef6 = useRef(null);
    const boxRef7 = useRef(null);
    const boxRef8 = useRef(null);
    const boxRef9 = useRef(null);
    const boxRef10 = useRef(null);


    useFrame(() => {
        time.current += 0.1;
        const sinValue = Math.sin(time.current);
        const cosValue = Math.cos(time.current);

        // Verifica que los objetos existan antes de acceder a sus propiedades
        if (boxRef.current) {
            boxRef.current.position.y = sinValue * 2;
        }
        if (boxRef2.current) {
            boxRef2.current.position.y = cosValue * 3;
        }        
        if (boxRef3.current) {
            boxRef3.current.position.y = sinValue * 4;
        }        
        if (boxRef4.current) {
            boxRef4.current.position.y = cosValue * 5;
        }        
        if (boxRef5.current) {
            boxRef5.current.position.y = sinValue * 6;
        }        
        if (boxRef6.current) {
            boxRef6.current.position.x = cosValue * 1;
        }        
        if (boxRef7.current) {
            boxRef7.current.position.x = sinValue * 2;
        }        
        if (boxRef8.current) {
            boxRef8.current.position.x = cosValue * 3;
        }        
        if (boxRef9.current) {
            boxRef9.current.position.x = sinValue * 4;
        }        
        if (boxRef10.current) {
            boxRef10.current.position.x = cosValue * 5;
        }        
    });

    return (
        <>

            <ambientLight intensity={0.5} />
            <directionalLight position={[9, 10, 0]} intensity={0.4} />
            <OrbitControls />
            <World />
        </>
    );
};