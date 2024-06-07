/* eslint-disable react/no-unknown-property */
import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { useWheels } from "../../hooks/useWheels";
import { WheelDebug } from "./WheelDebug";
import { useControls } from "../../hooks/useControls";
import { useFrame, useLoader } from "@react-three/fiber";
import { Quaternion, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useCarContext } from "../../context/CarControlsContext";
import Bullet from "../Bullet";


export const CubeCar = ({ thirdPerson }) => {

    const { setCarValue, bullets } = useCarContext()

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

    const chassisBodyArgs = [width, height, front * 2];

    const [chassisBody, chassisApi] = useBox(
        () => ({
            args: chassisBodyArgs,
            mass: 150,
            position,
        })
    )

    // console.log(chassisApi, "chassisApi")

    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

    const [vehicle, vehicleApi] = useRaycastVehicle(
        () => ({
            chassisBody,
            wheelInfos,
            wheels,
        })
    )


    useControls(vehicleApi, chassisApi)

    useFrame((state) => {

        if (!thirdPerson) return;

        let position = new Vector3(0, 0, 0);
        position.setFromMatrixPosition(chassisBody.current.matrixWorld);

        setCarValue('currentPosition', position)

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
        <>
            <group ref={vehicle} name="PLAYER">
                {/* <mesh ref={chassisBody}>
                    <meshBasicMaterial transparent={true} opacity={0.4} />
                    <boxGeometry args={chassisBodyArgs} />
                </mesh> */}
                <group ref={chassisBody} name="PLAYER">
                    <primitive object={result} rotation-y={Math.PI} position={[0, -0.01, 0]} />
                </group>
                <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
            </group>
            {bullets.map((bullet) => {
                return (
                <Bullet
                    key={bullet.id}
                    velocity={bullet.forward}
                    position={bullet.position}
                />
                );
            })}
        </>
    )
}
