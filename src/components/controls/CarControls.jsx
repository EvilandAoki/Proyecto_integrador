import { useEffect } from "react"
import { useKeyboardControls, KeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useCarContext } from "../../context"
import { quat } from "@react-three/rapier"


const actionInputMap = [  
    {name: 'forward', keys: [ 'ArrowUp', 'KeyW' ]},
    {name: 'backward', keys: [ 'ArrowDown', 'KeyS']},
    {name: 'leftward', keys: [ 'ArrowLeft', 'KeyA']},
    {name: 'rightward', keys: [ 'ArrowRight', 'KeyD']},
    {name: 'boost', keys: [ 'Space'] }
]

export const CarControls = () => {

    const {car} = useCarContext()
    const [subcribeKeys, getKeys] = useKeyboardControls()

    useFrame((state, delta) => {
        const { forward, backward, leftward, rightward } = getKeys();
        const {ref, body} = car;

        const impulse = {x: 0, y: 0, z: 0};

        const impulseStrength = 2;

        if(forward){
            impulse.z -= impulseStrength
        }
        if(backward){
            impulse.z += impulseStrength
        }
        if(rightward){
            const quaternion = quat(body.rotation())
            quaternion.y = Math.PI / 0.25
            body.setRotation(quaternion, true)
        }
        if(leftward){
            impulse.x -= impulseStrength
        }

        body?.applyImpulse(impulse, true);
    })
}

export const CarKeyboardControls = ({children}) => <KeyboardControls map={actionInputMap}>{children}</KeyboardControls>

export default CarControls;