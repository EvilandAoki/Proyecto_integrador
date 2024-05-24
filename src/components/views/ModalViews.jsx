import React from 'react';
import { useCarContext } from '../../context';

const WelcomeView = (props) => {

    const { modalActive } = useCarContext();
    const onHandleButtonStart = () => {
        console.log("Iniciar Juego");
    }
    console.log(modalActive)
    return modalActive && ( 
        <div className="container-modal">    
            <div class="contenido-modal d-flex flex-column justify-content-around h-100 bg-modal bg-opacity-50 rounded shadow-lg  py-2 px-4">            
                <div className="title-modal">
                    <h2>¡Felicidades!</h2>
                    <h3>Completaste el nivel {props.Level}</h3>
                </div>
                <div className="buttons-modal">
                    <button onClick={onHandleButtonStart} className="button-start">Volver al Menu</button>
                    <button onClick={onHandleButtonStart} className="button-start">Siguiente nivel</button>
                </div>
            </div>        
        </div>
    );
}

export default WelcomeView;
