import React from 'react';
import { useAuth, useCarContext } from '../../context';
import { useNavigate } from "react-router-dom";

const LEVELS_KEYS = {
    1: '/levelOne',
    2: '/levelTwo',
    3: '/levelThree'
}


const WelcomeView = (props) => {

    const { modalActive, setModalActive } = useCarContext();
    const nagivate = useNavigate();
    const { gameInfo, levelComplete } = useAuth();

    const onHandleButtonStart = () => {
        if (!gameInfo) {
            return null
        }
        levelComplete({
            lastLevel: props.Level,
        }).then(() => nagivate("/levelTwo"));
        setModalActive(false)
    }
    const onHandleButtonReturnToMenu = () => {
        if (!gameInfo) {
            return null
        }
        levelComplete({
            lastLevel: props.Level,
        }).then(() => nagivate("/"));
        setModalActive(false)
    }
    return modalActive && (
        <div className="container-modal">
            <div class="contenido-modal d-flex flex-column justify-content-around h-100 bg-modal bg-opacity-50 rounded shadow-lg  py-2 px-4">
                <div className="title-modal">
                    <h2>¡Felicidades!</h2>
                    <h3>Completaste el nivel {props.Level -1}</h3>
                </div>
                <div className="buttons-modal">
                    <button onClick={onHandleButtonReturnToMenu} className="button-start">Volver al Menu</button>
                    <button onClick={onHandleButtonStart} className="button-start">Siguiente nivel</button>
                </div>
            </div>
        </div>
    );
}

export default WelcomeView;
