import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'

// Davi
import CorPrimaria from './pages/CorPrimaria'

// Biro
import Dobro from './pages/Dobro'
import SomarQuery from './pages/SomarQuery'
import Media from './pages/Media'
import IngressoCinema from './pages/IngressoCinema'

export default function Path() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/corPrimaria' element={<CorPrimaria/>}></Route>
            <Route exact path='/dobro' element={<Dobro/>}></Route>
            <Route exact path='/somarQuery' element={<SomarQuery/>}></Route>
            <Route exact path='/somarBody' element={<SomarQuery/>}></Route>
            <Route exact path='/media' element={<Media/>}></Route>
            <Route exact path='/ingressoCinema' element={<IngressoCinema/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
