import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LevelOne } from '../pages/levelOne/LevelOne'
import { Login } from '../pages/login/Login'
import { TutorialLevel } from '../pages/tutorial/Tutorial'

export const GameRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/levelOne" element={<LevelOne />} />
                <Route path="/tutorial" element={<TutorialLevel />} />
            </Routes>
        </BrowserRouter>
    )
}
