import { Canvas } from "@react-three/fiber"
import { LightsOne } from "../levelOne/lights/LightsOne"
import { CameraControls, Environment, PerspectiveCamera } from "@react-three/drei"
import React, { Suspense, useState } from 'react'
import { Perf } from "r3f-perf"
import { WorldTwo } from "./world/WorldTwo"
import { LightsTutorial } from "./lights/lightsTutorial"
import { Debug, Physics } from '@react-three/cannon'
import { CubeCar } from '../../components/cars/CubeCar'
import { useCarContext } from '../../context'
import { Ramp } from "../../components/ramp/Ramp"
import { TextFloat } from "../../components/text3D/TextFloat"
import WelcomeText from "./../../components/views/ModalViews";
import Stopwatch from "../../components/controls/Stopwatch"
import Tire from "../../components/Tire"
import TurboItem from "../../components/TurboItem"

const URLENVIRONMENT2 = '/assets/textures/dikhololo_night_1k.hdr'

export const LevelTwo = () => {
    const [thirdPerson, setThirdPerson] = useState(false);
    const [cameraPosition, setCameraPosition] = useState([20, 53.9, 126.21]);

    const { car } = useCarContext()
    return (
        <>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.7,
                    far: 300,
                    position: [20, 54, 50]
                }}
            >
                <Environment files={URLENVIRONMENT2} background={"both"} />
                <Physics
                    broadphase="SAP"
                    gravity={[0, -2.6, 0]}
                    color={'red'}
                >
                    <CubeCar thirdPerson={thirdPerson} />
                    <PerspectiveCamera makeDefault position={[10, 10, 20]} />
                    <CameraControls />
                    <color attach="background" args={["#ececec"]} />
                    <LightsTutorial />
                    <Perf />
                    <WorldTwo />
                    <Tire key={'tire1'} x={-9} z={-12} />
                    <Tire key={'tire3'} x={-19} z={-1.8} rot={[Math.PI / 2, Math.PI / 2, 0]} axisXmov />
                    <Tire key={'tire4'} x={16} z={-2} rot={[Math.PI / 2, Math.PI / 2, 0]} axisXmov />
                    <Tire key={'tire5'} x={25} z={-11} rot={[Math.PI / 2, Math.PI / 2, 0]} axisXmov />
                    <TurboItem key={'turbo1'} x={4} z={-10.5} />
                    <TurboItem key={'turbo2'} x={20} z={-13} />
                    <TurboItem key={'turbo3'} x={18} z={-26} />
                    <TurboItem key={'turbo4'} x={8} z={-13} />
                    <TurboItem key={'turbo5'} x={16} z={-7} />
                    <TurboItem key={'turbo6'} x={28} z={-24} />
                    <TurboItem key={'turbo7'} x={-2} z={-13} />
                    <TurboItem key={'turbo8'} x={-17} z={-13} />
                </Physics>
                <TextFloat position={[-1.2, -0.9, -2]} text={"sigue el color"} color={"red"} />
                <TextFloat position={[-1.2, -1.1, -2]} text={"dispara con la E"} color={"red"} />
                <TextFloat position={[-14, -1, -6]} text={"salta hacia delante"} color={"red"} />
                <TextFloat position={[-4, -1, -20]} text={"encuentra la rampa"} color={"white"} />
            </Canvas>
            <Stopwatch />
            <WelcomeText Level={3} />
            <div style={{ position: "absolute", top: 1, rigth: 2 }} className="boder pt-4 ps-4">
                {car.turbo &&
                    <div className="border border-info rounded shadow-lg p-2">
                        <SiTurbo size={50} className="text-info" />
                    </div>}
            </div>
        </>
    )
}
