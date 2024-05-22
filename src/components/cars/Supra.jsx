import { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { RigidBody, quat } from "@react-three/rapier"
import { useCarContext } from "../../context"
import { useBox, useRaycastVehicle } from "@react-three/cannon"
import { useWheels } from "../../hooks/useWheels"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/Addons.js"


const Supra = ({ thirdPerson }) => {

  const position = [-2, 0.3, 6];
  const width = 0.15;
  const height = 0.07;
  const front = 0.15;
  const wheelRadius = 0.05;

  const chassisBodyArgs = [width, height, front * 2];

  let result = useLoader(
    GLTFLoader,
    "/assets/models/cars/car.glb"
  ).scene

  useEffect(() => {
    if (!result) return;

    let mesh = result;
    mesh.scale.set(0.0020, 0.0020, 0.0020);

    mesh.children[0].position.set(-400, -30, -40);
  }, [result]);

  const [chassisBody, chassisApi] = useBox(
    () => ({ args: chassisBodyArgs, mass: 150, position }),
    useRef(null)
  )
  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

}

export default Supra
