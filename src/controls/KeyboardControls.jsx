import { useStore } from '@react-three/fiber';
import { useContext, useEffect } from 'react'
import GameContext from '../context/gameContext/GameProvider'




export function KeyboardControls() {

    const { controls, actionInputMap, actions } = useContext(GameContext);

    const isControl = (v) => Object.prototype.hasOwnProperty.call(controls, v);

    useEffect(() => {

        const keyMap = Object.keys(actionInputMap).reduce((out, actionName) => {
            const inputs = actionInputMap[actionName].reduce((inputs, input) => {
                inputs[input] = actionName;
                console.log(inputs, `${actionName} accion llamada`);
                return inputs;
            }, {});
            console.log({ ...out, ...inputs }, "retorno de arreglo de salidas")
            return { ...out, ...inputs };
        }, {});

        const downHandler = ({ key, target }) => {
            const actionName = keyMap[key.toLowerCase()];
            console.log(actionName, "actionName de la funcion:downHandler")
            if (!actionName || target.nodeName === 'INPUT' || !isControl(actionName)) return;
            // TODO: consultar que la funcion actions empiece a elaborar y ejecutar el modelado del vehiculo segun lo que este haciendo
            actions(actionName, true);
        };

        const upHandler = ({ key, target }) => {
            const actionName = keyMap[key.toLowerCase()];
            console.log(actionName, "actionName de la funcion: upHandler")
            if (!actionName || target.nodeName === 'INPUT') return;
            // TODO: consultar que la funcion actions empiece a elaborar y ejecutar el modelado del vehiculo segun lo que este haciendo
            actions(actionName, false);
        };

        window.addEventListener('keydown', downHandler, { passive: true });
        window.addEventListener('keyup', upHandler, { passive: true });

        console.log(controls, "cambian los controles?")

        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };

    }, [actionInputMap]);

    return null;
}

