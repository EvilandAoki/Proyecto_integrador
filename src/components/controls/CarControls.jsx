import { useEffect } from "react"
import { useKeyboardControls, KeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useCarContext } from "../../context"


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
        const torque = {x: 0, y: 0, z: 0}

        const impulseStrength = 1 * delta;
        const toqueStrength = 1 * delta;

        if(forward){
            
            impulse.z -= impulseStrength
            torque.x -= toqueStrength
            console.log('forward', impulse)
        }
        if(backward){
            
            impulse.z += impulseStrength
            torque.x += toqueStrength
            console.log('backward', impulse)
        }
        if(rightward){
           
            impulse.x += impulseStrength
            torque.z -= toqueStrength
            console.log('rightward', impulse)
        }
        if(leftward){
           
            impulse.x -= impulseStrength
            torque.z += toqueStrength
            console.log('leftward', impulse)
        }

        body?.applyImpulse(impulse, true);
        //body?.applyTorqueImpulse(torque, true)
    })
}

export const CarKeyboardControls = ({children}) => <KeyboardControls map={actionInputMap}>{children}</KeyboardControls>

export default CarControls;