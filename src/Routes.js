import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'

import CorPrimaria from './pages/CorPrimaria'
import Dobro from './pages/Dobro'

export default function Path() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/dobro' element={<Dobro/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
