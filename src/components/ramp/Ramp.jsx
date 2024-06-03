import { useBox } from "@react-three/cannon"
import { useRef } from "react"


export const Ramp = ({ position, rotation, args }) => {

    // datos del box
    //  <Ramp args={[30, 6, 8]} position={[2, -1, 168.55]} rotation={[0, 0.49, Math.PI / 15]} />
    // const args = [4, 2, 2] 

    const [rampBody, api] = useBox(() => ({
        args: args,
        position: position,
        rotation: rotation,
        type: "Static",
    }));

    return (
        <mesh castShadow receiveShadow ref={rampBody}>
            <boxGeometry args={args} />
            <meshStandardMaterial color="indianred" />
        </mesh>
    )
}
