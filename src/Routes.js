import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'

// Davi
import CorPrimaria from './pages/CorPrimaria'
import Frequencia from './pages/Frequencia'


// Biro
import Dobro from './pages/Dobro'
import SomarQuery from './pages/SomarQuery'
import Media from './pages/Media'
import IngressoCinema from './pages/IngressoCinema'
import MedirTemperatura from './pages/MedirTemperatura'
import Tabuada from './pages/Tabuada'

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
            <Route exact path='/Frequencia' element={<Frequencia/>}></Route>
            <Route exact path='/medirTemperatura' element={<MedirTemperatura/>}></Route>
            <Route exact path='/tabuada' element={<Tabuada/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
