import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useRef } from "react";
import { useWheels } from "../../hooks/useWheels";
import { WheelDebug } from "./WheelDebug";
import { useControls } from "../../hooks/useControls";
import { useFrame } from "@react-three/fiber";
import { Quaternion, Vector3 } from "three";


export const CubeCar = ({ thirdPerson }) => {


    const position = [-1.5, 0.5, 3];
    const width = 0.15;
    const height = 0.07;
    const front = 0.15;
    const wheelRadius = 0.05;

    const chassisBodyArgs = [width, height, front * 2];

    const [chassisBody, chassisApi] = useBox(
        () => ({ args: chassisBodyArgs, mass: 150, position }),
        useRef(null)
    )

    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

    const [vehicle, vehicleApi] = useRaycastVehicle(
        () => ({
            chassisBody,
            wheelInfos,
            wheels,
        }),
        useRef(null)
    )

    useControls(vehicleApi, chassisApi)
    
    useFrame((state) => {
        if (!thirdPerson) return;

        let position = new Vector3(0, 0, 0);
        position.setFromMatrixPosition(chassisBody.current.matrixWorld);

        let quaternion = new Quaternion(0, 0, 0, 0);
        quaternion.setFromRotationMatrix(chassisBody.current.matrixWorld);

        let wDir = new Vector3(0, 0, 1);
        wDir.applyQuaternion(quaternion);
        wDir.normalize();

        let cameraPosition = position.clone().add(wDir.clone().multiplyScalar(1).add(new Vector3(0, 0.3, 0)));

        wDir.add(new Vector3(0, 0.2, 0));
        state.camera.position.copy(cameraPosition);
        state.camera.lookAt(position);
    });

    return (
        <group ref={vehicle} name="vehicle">
            <mesh ref={chassisBody}>
                <meshBasicMaterial transparent={true} opacity={0.4} />
                <boxGeometry args={chassisBodyArgs} />
            </mesh>
            <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
            <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
            <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
            <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
        </group>
    )
}
