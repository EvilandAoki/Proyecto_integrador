import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react";
import bounceSound from '../effects/sounds/basketball-bounce.mp3';

const amplitude = 6
const gravity = 0.005;

function Tire({ pos }) {
    const tireRef = useRef();
    const tireBodyRef = useRef();
    const upwardVelocity = useRef(0);

   // const audio = new Audio(bounceSound);
    useFrame(({clock}) => {
    // Aplicar la gravedad
    upwardVelocity.current -= gravity;
    // Hacer que la llanta rebote
    if (tireRef.current.position.y <= 0) {
      upwardVelocity.current = Math.abs(upwardVelocity.current) * 0.98; // Factor de rebote
      //audio.play();
    }
    tireRef.current.position.y += upwardVelocity.current;
    tireRef.current.rotation.y += 0.01;
    const moveX = Math.cos(clock.getElapsedTime()) * amplitude + pos[0];

    tireBodyRef.current?.setTranslation({
            x:  tireBodyRef.current?.translation().x,
            y:   tireBodyRef.current?.translation().y,
            z:  moveX
        }, true)
    });

    return (
        <RigidBody ref={tireBodyRef} type="fixed" position={pos}>
            <group ref={tireRef}>
                {/* Llanta exterior */}
                <mesh>
                <torusGeometry args={[1, 0.5, 16, 100]} />
                <meshStandardMaterial color="#2B2A29" />
                </mesh>
                {/* Llanta interior */}
                <mesh position={[0, 0, -0.25]}>
                <torusGeometry args={[0.5, 0.25, 16, 100]} />
                <meshStandardMaterial color="gray" />
                </mesh>
            </group>
        </RigidBody>
    );
}

export default Tire;