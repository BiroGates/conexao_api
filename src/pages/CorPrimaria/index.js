import axios from "axios"

import { useState } from "react";

export default function CorPrimaria() {
    const[cor, setCor] = useState('');
    const[resposta, setResposta] = useState('');

    async function verificacaoCorPrimaria() {
        const resp = await axios.get('http://localhost:5000/dia2/corprimaria/' + cor);

        if(resp.data.x === true) {
            setResposta('Sim, é uma cor Primaria');
        }
        else{
            setResposta('Não, não é uma cor nesse carai');
        }

    }

    console.log(resposta);
    return (
        <div>
            <div> Digite uma cor: </div>
            <input type="text" value={cor} onChange={(e) => setCor(e.target.value)}/>
            <button style={{display: "block"}} onClick={verificacaoCorPrimaria}> Verificar </button>
            { resposta }
        </div>
    )

}
