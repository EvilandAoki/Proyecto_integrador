import { Canvas } from "@react-three/fiber"
import { LightsOne } from "../levelOne/lights/LightsOne"
import { CameraControls, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useState } from "react"
import { Perf } from "r3f-perf"
import { WorldThree } from "./world/WorldThree"
import { LightsTutorial } from "./lights/lightsTutorial"
import CarControls, { CarKeyboardControls } from "../../components/controls/CarControls"
import { Physics } from "@react-three/cannon"
import { CubeCar } from "../../components/cars/CubeCar"
import Player2 from "../../components/Player2"
import Scoreboard from "../../components/controls/ScoreBoard"
import Ball from "../../components/ball/index"
import { useAuth, useCarContext } from "../../context"
import { useEffect } from "react"
import { SiTurbo } from "react-icons/si";
import TurboItem from "../../components/TurboItem"

const URLENVIRONMENT = '/assets/textures/envmap.hdr'
const URLENVIRONMENT2 = '/assets/textures/dikhololo_night_1k.hdr'

export const LevelThree = () => {
    const [thirdPerson, setThirdPerson] = useState(true);
    const [cameraPosition, setCameraPosition] = useState([-20, 3.9, 6.21]);
    const { scoreBoard } = useAuth()
    const { car } = useCarContext()
    return (
        <>
            <Canvas
                // camera={{
                //     fov: 45,
                //     near: 0.7,
                //     far: 300,
                //     position: [5, 4, 5]
                // }}
                shadows={true}
            >
                <Environment files={URLENVIRONMENT} background={"both"} />
                <PerspectiveCamera makeDefault position={cameraPosition} fov={80} />
                {!thirdPerson && (
                    <OrbitControls target={[10.64, -10.71, 0.03]} />
                )}
                <color attach="background" args={["#ececec"]} />
                <LightsTutorial />
                <Physics
                    broadphase="SAP"
                    gravity={[0, -2.6, 0]}
                >
                    <Suspense>
                        <WorldThree />
                        <CubeCar thirdPerson={thirdPerson} isSharing={true} />
                        <Player2 />
                        <Ball position={[0, 1, 0]} />
                        <TurboItem key={'turbo1'} x={6} z={-8} />
                        <TurboItem key={'turbo2'} x={-6} z={-8} />
                        < TurboItem key={'turbo3'} x={3} z={-2} />
                        <TurboItem key={'turbo4'} x={-3} z={-2} />

                        <TurboItem key={'turbo5'} x={6} z={8} />
                        <TurboItem key={'turbo6'} x={-6} z={8} />
                        <TurboItem key={'turbo7'} x={3} z={2} />
                        <TurboItem key={'turbo8'} x={-3} z={2} />
                    </Suspense>
                </Physics>
                {/* <Perf /> */}
            </Canvas>
            <Scoreboard scoreOne={scoreBoard[0]} scoreTwo={scoreBoard[1]}/>            
            <div style={{ position: "absolute", top: 1, rigth: 2 }} className="boder pt-4 ps-4">
                {car.turbo &&
                    <div className="border border-info rounded shadow-lg p-2">
                        <SiTurbo size={50} className="text-info" />
                    </div>}
            </div>
        </>
    )
}
