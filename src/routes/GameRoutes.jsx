import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LevelOne } from '../pages/levelOne/LevelOne'
import { LevelTwo } from '../pages/levelTwo/LevelTwo'
import { LevelThree } from '../pages/levelThree/LevelThree'
import { Login } from '../pages/login/Login'
import { TutorialLevel } from '../pages/tutorial/Tutorial'
import { PruebasSite } from '../pages/pruebasSite/PruebasSite'

export const GameRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/levelOne" element={<LevelOne />} />
                {/* <Route path="/levelTwo" element={<LevelTwo />} /> */}
                {/* <Route path="/levelThree" element={<LevelThree />} /> */}
                <Route path="/tutorial" element={<TutorialLevel />} />
                {/* <Route path="/pruebas" element={<PruebasSite />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
