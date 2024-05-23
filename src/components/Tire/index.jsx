import { useFrame } from "@react-three/fiber";
//import { RigidBody } from "@react-three/rapier"
import { useRef } from "react";
import bounceSound from "../effects/sounds/basketball-bounce.mp3";
import { useCylinder } from "@react-three/cannon";


const Tire = ({ x, z, rot=[0, Math.PI, Math.PI / 2], axisXmov=false }) => {
    const tireRef = useRef();
    const upwardVelocity = useRef()

    // Crear un cuerpo físico con forma de cilindro para la llanta
    const [cylinderBody, cylinderApi] = useCylinder(() => ({
        mass: 1, // Masa del objeto
        position: [x, 0.2, z], // Posición inicial del objeto
        args: [1, 1, 0.5, 20], // Radio superior, radio inferior, altura del cilindro
        rotation: rot, // Rotación inicial del cilindro
        linearDamping: 0.1, // Amortiguación lineal para simular rebote
        type: 'Kinematic',
        allowSleep: true,
        onCollide: handleCollide
    }));

    useFrame(({ clock }) => {
        const t = clock.elapsedTime; // Obtener el tiempo transcurrido
        const amplitude = 2; // Amplitud de la oscilación
        const frequency = 1; // Frecuencia de la oscilación
        const offset = Math.sin(frequency * t) * amplitude; // Calcular la posición en el eje Y
        if(axisXmov){
            cylinderApi.velocity.set(offset, 0,0)
        }else {
            cylinderApi.velocity.set(0, 0,offset);// Aplicar la posición al cilindro
        }
    })

    const handleCollide = (e) => {
        console.log("-1 hp")
    };

    return (
        <group ref={cylinderBody} >
            <group ref={tireRef} rotation={[Math.PI / 2, 0, 0]}>
                {/* Llanta exterior */}
                <mesh>
                    <torusGeometry args={[0.7, 0.35, 16, 100]} />
                    <meshStandardMaterial color="#2B2A29" />
                </mesh>
                {/* Llanta interior */}
                <mesh position={[0, 0, -0.25]}>
                    <torusGeometry args={[0.4, 0.1525, 16, 100]} />
                    <meshStandardMaterial color="gray" />
                </mesh>
            </group>
        </group>
    );
};

export default Tire;