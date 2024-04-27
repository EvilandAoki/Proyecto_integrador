import { useEffect, useRef } from "react"
import { useKeyboardControls, KeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useCarContext } from "../../context"
import { quat } from "@react-three/rapier"
import { Vector3 } from "three"


const actionInputMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'boost', keys: ['Space'] }
]

export const CarControls = () => {

    const { car } = useCarContext()
    const [subcribeKeys, getKeys] = useKeyboardControls()
    const controlsRef = useRef()
    const velocity = 10;
    const desiredDistance = 4;

    useFrame((state, delta) => {
        const { forward, backward, leftward, rightward, boost } = getKeys();
        const { ref, body } = car;

        const impulse = { x: 0, y: 0, z: 0 };

        const impulseStrength = 2;

        if (forward) {
            body.applyImpulse(new Vector3(0, 0, velocity), true)
        } else if (backward) {
            body.applyImpulse(new Vector3(0, 0, -velocity), true)
        }
        if (rightward) {
            body.setRotation(quat(new Vector3(0, Math.PI, 0)))
        } else if (leftward) {
            body.setRotation(quat(new Vector3(0, -Math.PI, 0)))
        } else if (boost && forward) {
            body.applyImpulse(new Vector3(0, 0, velocity * 2), true)
        }

        body?.applyImpulse(impulse, true);
    })
}

export const CarKeyboardControls = ({ children }) => <KeyboardControls map={actionInputMap}>{children}</KeyboardControls>

export default CarControls;