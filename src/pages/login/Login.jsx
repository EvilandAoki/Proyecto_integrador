import { useState, useEffect } from "react";
import "../../layouts/HomeScreen/styles.css";
import LOGO_UNIVALLE from "/public/logo-univalle.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export const Login = (props) => {
    const { children } = props;
    const navigate = useNavigate();

    const { loginWithGoogle, logout, userData } = useAuth();

    const [currentScreen, setCurrentScreen] = useState(0);

    const handleScreen = (screenKey) => () => {
        setCurrentScreen(screenKey);
    };

    const onHandleGoogle = (e) => {
        e.preventDefault();
        loginWithGoogle();
    };

    return (
        <div className="homeScreenBackground p-2 p-md-4 justify-content-between">
            <div className="d-flex justify-content-between flex-wrap">
                <img src={LOGO_UNIVALLE} height={100} />
                {userData && 
                    <div className="bg-white d-flex align-items-center flex-wrap bg-opacity-50 shadow-lg rounded p-2 mt-md-0 mt-4">
                        <div>
                            {userData?.photoURL && 
                                <img src={userData?.photoURL} alt="profile-image" className="rounded-circle" width={60} height={60} />
                            }
                        </div>
                        <div className="d-flex ms-2 flex-column">
                            <span className="font-weight-bold">{userData?.displayName}</span>
                            <span>{userData?.email}</span>
                        </div>
                    </div>}
            </div>
            <div className="d-flex justify-content-center align-items-center h-50">
                <div className="d-flex flex-column justify-content-around h-100 bg-login bg-opacity-50 rounded shadow-lg  py-2 px-4">
                    <h1 className="title-game text-center text-monospace">Drift Dynasty</h1>
                    {userData ? (
                        <div className="d-flex flex-column justify-content-center">
                            <button
                                className="btn btn-dark mb-4"
                                onClick={() => navigate("/levelOne")}
                            >
                                Continuar juego
                            </button>
                            <button className="btn btn-secondary mb-4" onClick={logout}>
                                Cerrar sesión
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={onHandleGoogle}
                            className="d-flex flex-column justify-content-center"
                        >
                            <button className="btn btn-secondary mb-4">
                                Iniciar sesión con Google
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <div className="text-white">
                Developed by Sebastian Rey, Alejandro Villamil and Cristian
                Medina
            </div>
        </div>
    );
};
/*<div className="d-flex flex-column justify-content-center"> 
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
    Iniciar sesion
</button>
 </div> */
/* <div className="vh-100">
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
    
</div> */
