/* eslint-disable react/no-unknown-property */
import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { useWheels } from "../../hooks/useWheels";
import { WheelDebug } from "./WheelDebug";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const scale = 0.08

const EnemyCar = (props) => {
    let result = useLoader(
        GLTFLoader,
        "/assets/models/cars/enemy.glb"
    ).scene;

    useEffect(() => {
        if (!result) return;

        console.log(result)
        let mesh = result;
        mesh.scale.set(scale, scale, scale);

        mesh.children[0].position.set(0, -0.5, -1.5);
    }, [result]);



    const position = [-1.2, 0.5, 3];
    const width = 0.15;
    const height = 0.07;
    const front = 0.15;
    const wheelRadius = 0.05;

    const chassisBodyArgs = [width, height, front * 2];

    const [chassisBody, chassisApi] = useBox(
        () => ({
            args: chassisBodyArgs,
            mass: 1,
            position,
            onCollide: handleCollide
        })
    )

    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

    const [vehicle, vehicleApi] = useRaycastVehicle(
        () => ({
            chassisBody,
            wheelInfos,
            wheels,
        })
    )

    const handleCollide = (e) => {
        console.log("destroy car")
    };

    return (
        <group ref={vehicle} name="vehicle">
            <group ref={chassisBody} name="chassisBody">
                <primitive object={result} rotation-y={Math.PI} position={[0, -0.01, 0]} />
            </group>
        </group>
    )
}

export default EnemyCar