import React from 'react'

import { useState } from 'react';
import axios from 'axios';

export default function Dobro() {
    const [inputNumber, setInputNumber] = useState(0);
    const [dobro, setDobro] = useState(0);

    async function handleDobro(){
        let resp = await axios.get(`http://localhost:5000/dobro/${inputNumber}`);
        setDobro(resp.data.x);
    }

  return (
    <div>
        <div> DIGITE O NUMERO QUE DESEJA DOBRAR </div>
        <input type="number" value={inputNumber} onChange={(e) => setInputNumber(e.target.value)} />
        <button onClick={handleDobro}> DOBRAR </button>
        <div> { dobro } </div>
    </div>
  )
}
