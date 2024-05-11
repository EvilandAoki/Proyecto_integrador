import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { useWheels } from "../../hooks/useWheels";
import { WheelDebug } from "./WheelDebug";
import { useControls } from "../../hooks/useControls";
import { useFrame, useLoader } from "@react-three/fiber";
import { Quaternion, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";


export const CubeCar = ({ thirdPerson }) => {


    let result = useLoader(
        GLTFLoader,
        "/assets/models/cars/car.glb"
    ).scene;

    useEffect(() => {
        if (!result) return;

        let mesh = result;
        mesh.scale.set(0.0012, 0.0012, 0.0012);

        mesh.children[0].position.set(-365, -18, -67);
    }, [result]);



    const position = [-1.5, 0.5, 3];
    const width = 0.15;
    const height = 0.07;
    const front = 0.15;
    const wheelRadius = 0.05;
    const velocity = new Vector3(0, 0, 0)

    const chassisBodyArgs = [width, height, front * 2, velocity];

    const [chassisBody, chassisApi] = useBox(
        () => ({
            args: chassisBodyArgs,
            // velocity: [0, 0, 0],
            // angularVelocity: new Vector3(0, 0, 0),
            mass: 150,
            position
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

    console.log("vehicle", vehicle)
    // console.log("chassisApi del vehiculo", chassisApi.velocity.set(0, 0, 0))
    // console.log("chassisApi del vehiculo", chassisApi.velocity.copy(new Vector3(1, 0, 0)))
    console.log("chassisApi.velocity", chassisApi.velocity)
    console.log("chassisBody del vehiculo", chassisBody)
    console.log("vehicleApi del vehiculo", vehicleApi)

    // TODO setear la velocidad 

    // Función para establecer la velocidad del vehículo
    const setVehicleVelocity = () => {
        // Asegúrate de que vehicleApi y chassisApi estén definidos
        if (vehicleApi && chassisApi.velocity) {
            console.log(chassisApi?.velocity.xs, "chassisApi?.velocity")
        }
    };

    // Ejemplo de uso: Establecer la velocidad del vehículo a [1, 0, 0]

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
            {/* <mesh ref={chassisBody}>
                <meshBasicMaterial transparent={true} opacity={0.4} />
                <boxGeometry args={chassisBodyArgs} />
            </mesh> */}
            <group ref={chassisBody} name="chassisBody">
                <primitive object={result} rotation-y={Math.PI} position={[0, -0.09, 0]} />
            </group>
            <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
            <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
            <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
            <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
        </group>
    )
}
