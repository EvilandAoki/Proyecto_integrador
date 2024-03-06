import { Box, Circle, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { BoxGeometry, CylinderGeometry, Mesh, MeshDistanceMaterial, MeshLambertMaterial, MeshMatcapMaterial, SphereGeometry } from "three";

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
            <RigidBody type="fixed" position={[-45, 9, 0]}>
                <mesh ref={boxRef}>
                    <boxGeometry args={[5, 5, 5]} />
                    <meshStandardMaterial color={"purple"} />
                </mesh>
            </RigidBody>
            <RigidBody type="fixed" position={[-35, 9, 0]}>
                <mesh ref={boxRef2}>
                    <sphereGeometry attach="geometry" args={[3, 8, 4, 32]} />
                    <meshNormalMaterial color={"purple"} />
                </mesh>
            </RigidBody>
            <RigidBody type="fixed" position={[-25, 9, 0]}>
                <mesh ref={boxRef3} rotation={[Math.PI / 3, 90.3, 0]}>
                    <tetrahedronGeometry args={[5, 0]} />
                    <meshLambertMaterial color={"yellow"} />
                </mesh>
            </RigidBody>
            <RigidBody type="fixed" position={[-15, 9, 0]}>
                <mesh ref={boxRef4}>
                    <sphereGeometry args={[3, 32, 32]} /> {/* Radio=1, 32 segmentos horizontales y 32 segmentos verticales para suavizado */}
                    <meshMatcapMaterial color={"red"} />
                </mesh>
            </RigidBody>
            <RigidBody type="fixed" position={[-5, 9, 0]}>
                <mesh ref={boxRef5}>
                    <coneGeometry args={[3, 6, 32]} /> {/* Radio=1, Altura=3, 32 segmentos */}
                    <meshPhongMaterial color={"blue"} />
                </mesh>
            </RigidBody>
            <RigidBody type="fixed" position={[5, 9, 0]}>
                <mesh ref={boxRef6}>
                    <torusGeometry args={[2.5, 0.5, 16, 100]} /> {/* Radio del tubo=0.5, Radio del toro=1.5, 16 segmentos en el tubo, 100 segmentos en el toro */}
                    <meshPhysicalMaterial color={"red"} />
                </mesh>
            </RigidBody>
            <RigidBody type="fixed" position={[15, 9, 0]}>
                <mesh ref={boxRef7} rotation={[9.5, 0, 0]}>
                    <coneGeometry args={[5, 5, 32]} />
                    <meshMatcapMaterial color={"gray"} />
                </mesh>
            </RigidBody>
            <RigidBody type="fixed" position={[25, 9, 0]}>
                <mesh ref={boxRef8} rotation={[1.5, Math.PI / 1, 0]}>
                    <torusGeometry args={[2, 1, 16, 100]} />
                    <meshLambertMaterial color={"cyan"} />
                </mesh>
            </RigidBody>
            <RigidBody type="fixed" position={[35, 9, 0]}>
                <mesh ref={boxRef9} rotation={[Math.PI / 6, Math.PI / 4, 0]}>
                    <icosahedronGeometry args={[3, 0]} />
                    <meshMatcapMaterial color={"skyblue"} />
                </mesh>
            </RigidBody>
            <RigidBody type="fixed" position={[45, 9, 0]}>
                <mesh ref={boxRef10} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
                    <coneGeometry args={[3, 6, 32]} /> {/* Radio=1, Altura=3, 32 segmentos */}
                    <meshMatcapMaterial color={"pink"} />
                </mesh>
            </RigidBody>
            <RigidBody type="fixed" >
                <Box position={[0, 0, 0]} args={[100, 2, 10]}>
                    <meshMatcapMaterial color="springgreen" />
                </Box>
            </RigidBody>
        </>
    );
};