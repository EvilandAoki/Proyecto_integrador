

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
                castShadow={true}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <ambientLight intensity={3} />
        </>
    )
}
