/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from 'react'
import { useBox } from "@react-three/cannon";
import Bullet from "../Bullet";
import { socket } from '../../socket/socket-manager';
import * as THREE from 'three';

const Player2 = ({ pos, rot }) => {
    const position = [-1.5, 0.5, 3];
    const width = 0.15;
    const height = 0.07;
    const front = 0.15;

    const chassisBodyArgs = [width, height, front * 2];

    const [player2, player2Api] = useBox(
        () => ({
            args: chassisBodyArgs,
            mass: 150,
            position,
        })
    )

    const syncPlayer = (transform) => {
        const { position, rotation } = player2Api
        // let currentValues = {
        //     position: player2.current.position,
        //     rotation: player2.current.rotation
        // }
        // let newValues = {
        //     position: new THREE.Vector3(...transform.position),
        //     rotation: new THREE.Euler(...transform.rotation)
        // }

        
        // //Valores actuales
        // position.subscribe(value => currentValues.position = value) 
        // rotation.subscribe(value => currentValues.rotation = value)
        // console.log('curr', newValues)
        // newValues.position.lerp(newValues.position, 0.1); // Ajusta el 0.1 para cambiar la suavidad
        // newValues.rotation.x = THREE.MathUtils.lerp(currentValues.rotation[0], newValues.rotation.x, 0.1);
        // newValues.rotation.y = THREE.MathUtils.lerp(currentValues.rotation[1], newValues.rotation.y, 0.1);
        // newValues.rotation.z = THREE.MathUtils.lerp(currentValues.rotation[2], newValues.rotation.z, 0.1);

        // console.log('new', newValues)

        //Set values
        position.set(...transform.position)
        rotation.set(...transform.rotation)
    }

    useEffect(() => {
        socket.on("player-moving",syncPlayer)
        return () => {
            socket.off("player-moving", syncPlayer)
        }
    },[])

    return (
        <mesh ref={player2}>
            <meshStandardMaterial color="red" />
            <boxGeometry args={chassisBodyArgs} />
        </mesh>
    )
}

export default Player2