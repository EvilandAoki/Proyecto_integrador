/* eslint-disable react/no-unknown-property */
import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { useWheels } from "../../hooks/useWheels";
import { WheelDebug } from "./WheelDebug";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useCarContext } from "../../context/CarControlsContext"
import { Vector3 } from "three";

const scale = 0.08
const followDistance = 2;
const frontAngleThreshold = Math.PI / 4; 
const EnemyCar = (props) => {
    let result = useLoader(
        GLTFLoader,
        "/assets/models/cars/enemy.glb"
    ).scene;

    const { car } = useCarContext()

    useEffect(() => {
        if (!result) return;
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
            mass: 10,
            position,
            onCollide: handleCollide
        })
    )

    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

    useFrame(() => {
        const [cx, cy, cz] = car.currentPosition;
        const [ex, ey, ez] = chassisBody.current.position;
    
        const distance = Math.sqrt((cx - ex) ** 2 + (cz - ez) ** 2);
    
        if (distance < followDistance) {
            // Calculate direction to move towards the car
            const directionX = cx - ex;
            const directionZ = cz - ez;
            const angleToCar = Math.atan2(directionZ, directionX);
           // Calculate enemy car's forward directionw
            const enemyForwardVector = new Vector3(0, 0, -1);
            enemyForwardVector.applyQuaternion(chassisBody.current.quaternion);
            const enemyForwardAngle = Math.atan2(enemyForwardVector.z, enemyForwardVector.x);

            // Calculate the angle difference
            const angleDifference = Math.abs(angleToCar - enemyForwardAngle);

            if (angleDifference < frontAngleThreshold) {
                vehicleApi.applyEngineForce(5, 1); // Apply force to back left wheel
                vehicleApi.applyEngineForce(5, 0); // Apply force to back right wheel
            } else {
                // Stop the car when it's not approaching from the front
                vehicleApi.applyEngineForce(0, 1);
                vehicleApi.applyEngineForce(0, 0);
            }
        } else {
            // Stop the car when it's outside the follow distance
            vehicleApi.applyEngineForce(0, 0);
            vehicleApi.applyEngineForce(0, 1);
        }
    });

    const [vehicle, vehicleApi] = useRaycastVehicle(
        () => ({
            chassisBody,
            wheelInfos,
            wheels,
        })
    )

    const handleCollide = (e) => {
        console.log("carro enemigo", e.body.parent.name)
        const collidedWith = e.body.parent.name
        if(collidedWith == 'BULLET'){
            setTimeout(() => {
                chassisApi.sleep();
                chassisApi.position.set(0, -100, 0);
            }, 2000);
        }
        if(collidedWith == 'PLAYER'){
            console.log('-1hp')
        }
         //e.parent.body.name = ENEMY => -1hp
    };

    return (
        <group ref={vehicle} name="ENEMY">
            <group ref={chassisBody} name="ENEMY">
                <primitive object={result} rotation-y={Math.PI} position={[0, -0.01, 0]} />
            </group>
        </group>
    )
}

export default EnemyCar