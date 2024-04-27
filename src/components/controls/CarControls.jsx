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
    {name: 'brake', keys: [ 'Space'] }
]

const getDegree = (value) => {
    return (2 * Math.acos(value) * 180) / Math.PI
}


export const CarControls = () => {

    const {car} = useCarContext()
    const [subcribeKeys, getKeys] = useKeyboardControls()

    useFrame((state, delta) => {
        const { brake, forward, backward, leftward, rightward } = getKeys();
        const {ref, body} = car;

        let impulse = {x: 0, y: 0, z: 0};
        const impulseStrength = 5;
        const rotationalSpeed = 0.1;
        const quaternion = quat(body.rotation())

        const currDirection  = getDegree(body.rotation().y);

        if(forward){
            impulse = drive(currDirection, impulse, impulseStrength)
        }
        if(backward){
            impulse = drive(currDirection, impulse, impulseStrength, true)
        }
        if(rightward){
            if(359.5 < currDirection){
                quaternion.y = 1
            } else if (345 < currDirection || 15 > currDirection) {
                console.log(-1*rotationalSpeed)
                quaternion.y -= rotationalSpeed
            } else {
                quaternion.y -= rotationalSpeed / 10
                console.log(-1*rotationalSpeed/10)
            }
            body.setRotation(quaternion, true)
        }
        if(leftward){
            if(0.5 >  currDirection){
                quaternion.y = -1
            } else if (345 < currDirection || 15 > currDirection) {
                quaternion.y += rotationalSpeed
                console.log( rotationalSpeed)
            } else {
                quaternion.y += rotationalSpeed / 10
                console.log(rotationalSpeed / 10)
            }
            body.setRotation(quaternion, true)
        }
        if(brake){
            impulse.z = 0
        }
        //console.log(currDirection)
        body?.applyImpulse(impulse, true);
    })

    const drive = (currDirection, currImpulse, impulseStrength, reverse = false) => {
        const newImpulse = { ...currImpulse }
        let aux = 0;
        let z = 0;
        let x = 0;
        if(currDirection >= 0 && currDirection < 90){
            console.log('1')
            z =  ((90-currDirection)/90) * impulseStrength
            x = (currDirection/90) * impulseStrength
            if(!reverse){
                newImpulse.z -= z
                newImpulse.x += x
            } else {
                newImpulse.z += z
                newImpulse.x -= x
            }
            
            console.log('Z: ', newImpulse.z)
            console.log('X: ', newImpulse.x )
        }
        if(currDirection >= 90 && currDirection < 180){
            console.log('2')
            aux = currDirection - 90
            z = (aux/90) * impulseStrength;
            x = ((90-aux)/90) * impulseStrength
            if(!reverse){
                newImpulse.z +=  z
                newImpulse.x +=  x
            } else {
                newImpulse.z -=  z
                newImpulse.x -=  x
            }
            
            console.log('Z: ', newImpulse.z)
            console.log('X: ', newImpulse.x )
        }
        if(currDirection >= 180 && currDirection < 270){
            console.log('3')
            aux = currDirection - 180
            z = ((90-aux)/90) * impulseStrength
            x = (aux/90) * impulseStrength
            if(!reverse){
                newImpulse.z += z
                newImpulse.x -= x
            }else {
                newImpulse.z -= z
                newImpulse.x += x
            }
            
            console.log('Z: ', newImpulse.z)
            console.log('X: ', newImpulse.x )
        }
        if(currDirection >= 270 && currDirection <= 360){
            console.log('4')
            aux = currDirection - 270
            z = (aux/90) * impulseStrength;
            x = ((90-aux)/90) * impulseStrength
            if(!reverse){
                newImpulse.z -= z
                newImpulse.x -= x
            } else {
                newImpulse.z += z
                newImpulse.x += x
            }
            console.log('Z: ', newImpulse.z)
            console.log('X: ', newImpulse.x )
        }
        return newImpulse
    }
    
}

export const CarKeyboardControls = ({children}) => <KeyboardControls map={actionInputMap}>{children}</KeyboardControls>

export default CarControls;