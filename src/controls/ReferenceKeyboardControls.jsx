import { KeyboardControls, useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo } from 'react'

const controlsKeyboard = {
    forward: 'forward',
    back: 'back',
    left: 'left',
    right: 'right',
    jump: 'jump',
};


export const ReferenceKeyboardControls = ({ children }) => {

    const controls = useKeyboardControls(); // Usar solo useKeyboardControls()

    const map = useMemo(() => [
        { name: controlsKeyboard.forward, keys: ['ArrowUp', 'KeyW'] },
        { name: controlsKeyboard.back, keys: ['ArrowDown', 'KeyS'] },
        { name: controlsKeyboard.left, keys: ['ArrowLeft', 'KeyA'] },
        { name: controlsKeyboard.right, keys: ['ArrowRight', 'KeyD'] },
        { name: controlsKeyboard.jump, keys: ['Space'] },
    ], []);

    console.log(map, "imprimio el map??");

    useEffect(() => {
        // Este efecto se ejecuta una vez al montar el componente
        if (controls) { // Verificar si controls no es null
            return controls.subscribe((state) => state.forward, (pressed) => {
                console.log('forward', pressed); // Muestra en la consola si la tecla "forward" está presionada o no
            });
        }
    }, [controls]); // Ahora este efecto se ejecuta cuando controls cambia

    useFrame(() => {
        // Este hook se ejecuta en cada cuadro de animación
        // Aquí podrías realizar alguna acción basada en el estado actual de las teclas presionadas
        if (controls) { // Verificar si controls no es null
            const pressed = controls.get(); // Obtiene el estado actual de todas las teclas presionadas
            console.log('back', pressed.back); // Muestra en la consola si la tecla "back" está presionada o no
        }
    });


    return (
        <KeyboardControls map={map}>
            {children}
        </KeyboardControls>
    );
}



