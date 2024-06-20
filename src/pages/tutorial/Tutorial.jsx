
import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera, } from "@react-three/drei"
import { Perf } from "r3f-perf"
import { TutorialMap } from "./world/TutorialMap"
import { LightsTutorial } from "./lights/lightsTutorial"
import AceleracionVelocimetro from "./../../components/controls/Speedometer"
import LivesDisplay from "./../../components/controls/Lifes"
import { Debug, Physics } from "@react-three/cannon"
import { CubeCar } from "../../components/cars/CubeCar"
import EnemyCar from "../../components/cars/EnemyCar"
import Tire from "../../components/Tire"
import TurboItem from "../../components/TurboItem"
import { useCarContext } from "../../context"
import { SiTurbo } from "react-icons/si";
import WelcomeText from "./../../components/views/ModalViews";
import { ModalTutorial } from "../../components/ui/ModalTutorial"

const URLENVIRONMENT = '/assets/textures/envmap.hdr'

export const TutorialLevel = () => {
    const [thirdPerson, setThirdPerson] = useState(true);
    const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);
    const [aceleracion, setAceleracion] = useState(0);
    const { car, velocity, lives } = useCarContext()

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
                <Environment files={URLENVIRONMENT} background={"both"} />
                <Physics
                    broadphase="SAP"
                    gravity={[0, -9.8, 0]}
                    frictionGravity={[0, 1, 0]}
                    defaultContactMaterial={{ restitution: 0.3 }}
                >
                    <color attach="background" args={["#ececec"]} />
                    <LightsTutorial />
                    <Suspense>
                        <TutorialMap />
                        <CubeCar thirdPerson={thirdPerson} />
                        {/* <EnemyCar position={[-1.2, 0.5, 3]} /> */}
                        <Tire key={'tire3'}  x={4} z={-15} />
                        <TurboItem key={'turbo1'} x={3} z={-5} />
                        <TurboItem key={'turbo1'} x={-8} z={-5} />
                        {/*                             
                            <TurboItem key={'turbo2'} x={0} z={30} />
                            <TurboItem key={'turbo3'} x={70} z={10} />
                            <TurboItem key={'turbo4'} x={-70} z={10} />
                            <TurboItem key={'turbo5'} x={0} z={-90} />
                            <Tire key={'tire1'}  x={-20} z={27} />
                            <Tire key={'tire2'}  x={-20} z={60} />
                            <Tire key={'tire4'}  x={-92} z={-60} rot={[Math.PI / 2,Math.PI / 2, 0]} axisXmov/>
                            <Tire key={'tire5'}  x={60} z={-55}/> */}
                    </Suspense>
                </Physics>
                <Perf />
            </Canvas>
            <AceleracionVelocimetro aceleracion={velocity} />
            <LivesDisplay lives={lives} />
            <div style={{ position: "absolute", top: 1, rigth: 2 }} className="boder pt-4 ps-4">
                {car.turbo &&
                    <div className="border border-info rounded shadow-lg p-2">
                        <SiTurbo size={50} className="text-info" />
                    </div>}
            </div>
            <WelcomeText Level={0} />
            <ModalTutorial />
        </>
    )
}
