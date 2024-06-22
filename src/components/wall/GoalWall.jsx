import { useBox } from '@react-three/cannon';
import React, { useCallback, useEffect, useRef } from 'react'
import { useLocation } from "react-router-dom";
import { useAuth, useCarContext } from '../../context';

const scale = [3.7, 1, 0.3]
const color = "red"
const collideCoolDown = 1000;
export const GoalWall = ({ position, side }) => {

    const location = useLocation();
    const { setMarker } = useAuth()

    const state = useRef({
        timeToCollibe: 0,
    })

    const handleCollide = useCallback((e) => {
        const collidedWith = e.body.parent.name
        const now = Date.now();
        if(collidedWith == 'BALL' && now >= state.current.timeToCollibe){
            state.current.timeToCollibe = now + collideCoolDown;
            //if side is 1, plus one point to local
            if(side == 1){
                setMarker(curr => [curr[0] + 1, curr[1]])
                //todo
            }
            //if side is 2, plus one point to visitor and reset ball postion and cars postion
            if(side == 2){
                setMarker(curr => [curr[0], curr[1] + 1])
                //todo
            }
        }        
    }, []);

    const [goalBody, api] = useBox(() => ({
        args: scale,
        position: position,
        type: "Static",
        onCollide: handleCollide
    }));

    return (
        <group position={position} ref={goalBody} name={'WALL'+ side} >
            <mesh  >
                <boxGeometry args={scale} />
                <meshBasicMaterial color={color} opacity={1} transparent={true} />
            </mesh>
        </group>
    );
}