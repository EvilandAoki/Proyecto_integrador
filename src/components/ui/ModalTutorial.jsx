import { Button, Modal } from 'antd'
import React from 'react'
import { useAuth } from '../../context';

export const ModalTutorial = () => {

    const { openModalTutorial, showModalTutorial, cancelModalTutorial } = useAuth();

    return (
        <Modal
            title="Este es el tutorial"
            open={openModalTutorial}
            onCancel={cancelModalTutorial}
            footer={[
                <Button key="back" onClick={cancelModalTutorial}>
                    Cerrar
                </Button>
            ]}
        >
            <p>Usa las teclas <b>W A S D</b> para moverte por el mapa</p>
            <p>Vas a contar con diferentes poderes dentro del videojuego</p>
            <p>Puedes disparar con la tecla <b>E</b> para disparar un proyectil y derribar a los enemigos</p>
            <p>Los cubos <b style={{ color: 'blue' }}>azules</b> te permiten aumentar la velocidad con la tecla <b>Shift</b></p>
            <p>Los cubos <b style={{ color: 'red' }}>rojos</b> te mostraran un pequeño mapa en pantalla</p>
            <p>Consejo: Usa las rampas para mejorar tu tiempo en el reloj, recuerda mientras menos tiempo tengas, mejor  </p>
        </Modal>
    )
}
