import React, { useState } from 'react'

import axios from 'axios';

export default function Tabuada() {
    const [value, setValue] = useState(0);
    const [result, setResult] = useState([]);

    async function handleTabuada (){
        let resp = await axios.get(`http://localhost:5000/frequencia/q?numero`);            
        setResult(resp.data.x);
    }

    return (
        <div>
            <div> Programa da tabuada: </div>
            <input style={{display: "block"}} type="number" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleTabuada} > CALCULAR </button>
            <div> {result.map((item)=>{
                return(
                    <div> { item } </div>
                )
            })} 
            </div>
        </div>
    )
}
