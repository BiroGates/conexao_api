import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'

// Davi
import CorPrimaria from './pages/CorPrimaria'

// Biro
import Dobro from './pages/Dobro'
import SomarQuery from './pages/SomarQuery'



export default function Path() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/dobro' element={<Dobro/>}></Route>
            <Route exact path='/somarQuery' element={<SomarQuery/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}