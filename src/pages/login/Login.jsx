import { useState } from "react";

import "../../layouts/HomeScreen/styles.css";
import LOGO_UNIVALLE from "/public/logo-univalle.png";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    const { children } = props;

    const navigate = useNavigate()

    const [currentScreen, setCurrentScreen] = useState(0);

    const handleScreen = (screenKey) => () => {
        setCurrentScreen(screenKey);
    };

    switch (currentScreen) {
        case 0:
            return (
                <div className="homeScreenBackground p-4 justify-content-between">
                    <div className="d-flex">
                        <img src={LOGO_UNIVALLE} height={100} />
                    </div>
                    <div className="d-flex justify-content-center align-items-center h-50">
                        <div className="d-flex flex-column justify-content-around h-100 p-2 bg-light bg-opacity-50 rounded shadow-lg px-4">
                            <h1 className="title-game text-center">
                                Super Drift Game
                            </h1>
                            <div className="d-flex flex-column justify-content-center">
                                <button
                                    className="btn btn-dark mb-4"
                                    onClick={() => navigate('/levelOne')}
                                >
                                    CONTINUAR
                                </button>
                                <button className="btn btn-secondary mb-4">
                                    NUEVO JUEGO
                                </button>
                                <button className="btn btn-secondary mb-4">
                                    CONTROLES
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-white">
                        Developed by Sebastian Rey, Alejandro Villamil and
                        Cristian Medina
                    </div>
                </div>
            );
        case 1:
            return (
                <div className="vh-100">
                    {children}
                    <div className="d-flex w-100 justify-content-between px-4 pt-2 top-controls">
                        <div>
                        </div>
                        <div>
                            <button
                                className="btn btn-secondary mb-4"
                                onClick={handleScreen(0)}
                            >
                                Volver
                            </button>
                        </div>
                    </div>
                    
                </div>
            );
        default:
            return <></>;
    }
};

