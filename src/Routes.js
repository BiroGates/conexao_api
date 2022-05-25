import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'

import CorPrimaria from './pages/CorPrimaria'

export default function Path() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/corPrimaria' element={<CorPrimaria/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
