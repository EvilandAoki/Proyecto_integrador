import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useRef } from "react";
import { useWheels } from "../../hooks/useWheels";
import { WheelDebug } from "./WheelDebug";
import { useControls } from "../../hooks/useControls";


export const CubeCar = () => {


    const position = [-1.5, 0.5, 20];
    const width = 3;
    const height = 0.5;
    const front = 2;
    const wheelRadius = 0.7;

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
