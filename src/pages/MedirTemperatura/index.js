import axios from 'axios';
import React from 'react'

import { useState } from 'react'

export default function MedirTemperatura() {
    const [value, setValue] = useState('');
    const [result, setResult] = useState();

    async function handleFebre(){
        let resp = await axios.get(`http://localhost:5000/medirtemperatura/q?t=${value}`); 
        resp.data.x ? setResult('Você esta com febre!') : setResult('Você não esta com febre!');
    }

    return (
    <div>
        <div> PROGRAMA DETERMINAR ESTADO FEBRIL: </div>
        <input style={{display: "block"}} type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
        <button style={{display: "block"}} onClick={handleFebre} > VERIFICAR </button>
        <div style={{display: "block"}} > { result } </div>
    </div>
  )
}
