import { useBox } from '@react-three/cannon';
import React, { useCallback, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { useAuth, useCarContext } from '../../context';

export const WallToEnd = ({ position, scale }) => {

    const { setStartToEnd, startToEnd, timeLevel, setModalActive } = useCarContext();
    const { levelComplete } = useAuth();
    const location = useLocation();

    console.log(location.pathname, "my location")

    const color = "red"

    useEffect(() => {
        if (startToEnd == false) {
            levelComplete({ TimeLevelOne: timeLevel });
        }
    }, [startToEnd])

    const handleCollide = useCallback((e) => {
        console.log("prueba")
        if (location.pathname == "/tutorial") {
            setModalActive(true)
        }
        setStartToEnd(false)
        setModalActive(true)
    }, [timeLevel]);

    const [wallBody, api] = useBox(() => ({
        args: scale,
        position: position,
        type: "Static",
        onCollide: handleCollide
    }));

    return (
        <mesh position={position} >
            <boxGeometry args={scale} />
            <meshBasicMaterial color={color} />
        </mesh>
    );
}
