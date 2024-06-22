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