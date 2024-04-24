import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

//contexto de toda la aplicacion
const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState({});
    const [gameInfo, setGameInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const saveUserData = (data) => {
        //validaciones y otros
        setUserData(data);
        localStorage.setItem('userData', data)
    }

    const saveGameInfo= (data) => {
        //validaciones y otros
        setGameInfo(data);
        localStorage.setItem('gameInfo', data)
    }

    const loadInfo = async () => {
        const _gameInfo = localStorage.getItem('userData');
        const _userData = localStorage.getItem('gameInfo');

        saveGameInfo(_gameInfo);
        saveUserData(_userData);
    }

    const handleLoading = () => {
        setLoading(!loading)
    }

    useEffect(() => {
        loadInfo();
    }, [])

    return (
        <AuthContext.Provider
            value={{
                userData,
                saveUserData,
                gameInfo,
                saveGameInfo,
                loading,
                handleLoading,
                loadInfo
            }}
        >
            {children}
        </AuthContext.Provider>

    )
}

export {
    AuthProvider
}

export default AuthContext;