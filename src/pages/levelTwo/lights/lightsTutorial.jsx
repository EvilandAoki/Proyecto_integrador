

import { Color } from "three";

const lightPosition = [10, 5, 10];
const lightIntensity = 0.3;
const shadowMapSize = 1024;


export const LightsTutorial = () => {
    return (
        <>
            {/* Luces */}
            <directionalLight
                position={lightPosition}
                intensity={lightIntensity}
                shadow-mapSize-width={shadowMapSize}
                shadow-mapSize-height={shadowMapSize}
                castShadow
            />
            <ambientLight intensity={3} />
        </>
    )
}
