
import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, } from "@react-three/drei"
import { Perf } from "r3f-perf"
import { TutorialMap } from "./world/TutorialMap"
import { LightsTutorial } from "./lights/lightsTutorial"
import AceleracionVelocimetro from "./../../components/controls/Speedometer"
import LivesDisplay from "./../../components/controls/Lifes"
import Supra from "../../components/cars/Supra"
import { Vector3 } from "three";

import { Debug, Physics } from "@react-three/cannon"
import { CubeCar } from "../../components/cars/CubeCar"
import Tire from "../../components/Tire"
import TurboItem from "../../components/TurboItem"
import { useCarContext } from "../../context"
import { SiTurbo } from "react-icons/si";


export const TutorialLevel = () => {
    const [thirdPerson, setThirdPerson] = useState(true);
    const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);
    const [aceleracion, setAceleracion] = useState(0);

    const handleFrame = (newAceleracion) => {
        setAceleracion(newAceleracion);
    };

    const { car } = useCarContext()

    return (
        <>
            <Canvas
                shadows={true}
            >
                <PerspectiveCamera makeDefault position={cameraPosition} fov={80} />
                {!thirdPerson && (
                    <OrbitControls target={[-2.64, -0.71, 0.03]} />
                )}
                <LightsTutorial />
            
                <Physics
                    broadphase="SAP"
                    gravity={[0, -9.8, 0]}
                    frictionGravity={[0, 1, 0]}
                    defaultContactMaterial={{ restitution: 0.3 }}
                >
                    <Debug color="red">

                        <color attach="background" args={["#ececec"]} />
                        <LightsTutorial />
                        <Suspense>
                            <TutorialMap />
                            <CubeCar thirdPerson={thirdPerson} />
                            {/* <Supra /> */}
                            <TurboItem key={'turbo1'} x={0} z={10} />
                            <TurboItem key={'turbo2'} x={0} z={30} />
                            <TurboItem key={'turbo3'} x={70} z={10} />
                            <TurboItem key={'turbo4'} x={-70} z={10} />
                            <TurboItem key={'turbo5'} x={0} z={-90} />
                            <Tire key={'tire1'}  x={-20} z={27} />
                            <Tire key={'tire2'}  x={-20} z={60} />
                             <Tire key={'tire3'}  x={-88} z={60} rot={[Math.PI / 2,Math.PI / 2, 0]} axisXmov/>
                             <Tire key={'tire4'}  x={-92} z={-60} rot={[Math.PI / 2,Math.PI / 2, 0]} axisXmov/>
                             <Tire key={'tire5'}  x={60} z={-55}/>
                        </Suspense>
                    </Debug>
                </Physics>
            
                <Perf />
            
            </Canvas>
        <AceleracionVelocimetro aceleracion={aceleracion} />
        <LivesDisplay lives={2} />
            <div style={{position: "absolute", top: 1, rigth: 2}} className="boder pt-4 ps-4">
                {car.turbo && 
                    <div className="border border-info rounded shadow-lg p-2"> 
                        <SiTurbo size={50} className="text-info" />
                    </div>}
            </div>
        </>
    )
}
