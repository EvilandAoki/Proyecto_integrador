/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from 'react'
import { useBox } from "@react-three/cannon";
import Bullet from "../Bullet";
import { socket } from '../../socket/socket-manager';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const Player2 = ({ pos, rot }) => {

    const scale = 0.08

    let result = useLoader(
        GLTFLoader,
        "/assets/models/cars/enemy.glb"
    ).scene;

    useEffect(() => {
        if (!result) return;
        let mesh = result;
        mesh.scale.set(scale, scale, scale);

        mesh.children[0].position.set(0, -0.5, -1.5);
    }, [result]);

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
        socket.on("player-moving", syncPlayer)
        return () => {
            socket.off("player-moving", syncPlayer)
        }
    }, [])

    return (
        <group ref={player2}>
            <primitive object={result} rotation-y={Math.PI} position={[0, -0.01, 0]} />
            <boxGeometry args={chassisBodyArgs} />
        </group>
    )
}

export default Player2