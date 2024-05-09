import { useFrame } from "@react-three/fiber";
//import { RigidBody } from "@react-three/rapier"
import { useRef } from "react";
import bounceSound from "../effects/sounds/basketball-bounce.mp3";
import { useCylinder } from "@react-three/cannon";

const amplitude = 6;
const gravity = 0.005;

const Tire = ({ pos }) => {
    const tireRef = useRef();
    const upwardVelocity = useRef()

    // Crear un cuerpo físico con forma de cilindro para la llanta
    const [cylinderBody, cylinderApi] = useCylinder(() => ({
        mass: 1, // Masa del objeto
        position: pos, // Posición inicial del objeto
        args: [1, 1, 0.5], // Radio superior, radio inferior, altura del cilindro
        rotation: [Math.PI / 2, Math.PI / 2, 0], // Rotación inicial del cilindro
        linearDamping: 0.1, // Amortiguación lineal para simular rebote
        //type: "Dynamic"
        allowSleep: true
    }));
    console.log("cylinderApi", cylinderApi);
    console.log("cylinderBody", cylinderBody);
    // Hacer que la llanta rebote constantemente

    useFrame(({clock}) => {
        upwardVelocity.current -= gravity;
        // Hacer que la llanta rebote
        /* if (tireRef.current.position.y <= 0) {
          upwardVelocity.current = Math.abs(upwardVelocity.current) * 0.98; // Factor de rebote;
        } */
        //console.log(cylinderBody.current)
    
        /* tireBodyRef.current?.setTranslation({
                x:  tireBodyRef.current?.translation().x,
                y:   tireBodyRef.current?.translation().y,
                z:  moveX
            }, true)
        }); */
    });

    useFrame(({clock}) => {
        //console.log(clock)
        
        //cylinderApi.applyImpulse([0, 0.09, 0], [0, 0, 0])
    })

    return (
        <group ref={cylinderBody} position={pos}>
            <group ref={tireRef} rotation={[Math.PI / 2, 0, 0]}>
                {/* Llanta exterior */}
                <mesh>
                    <torusGeometry args={[0.7, 0.35, 16, 100]} />
                    <meshStandardMaterial color="#2B2A29" />
                </mesh>
                {/* Llanta interior */}
                <mesh position={[0, 0, -0.25]}>
                    <torusGeometry args={[0.35, 0.1525, 16, 100]} />
                    <meshStandardMaterial color="gray" />
                </mesh>
            </group>
        </group>
    );
};

export default Tire;