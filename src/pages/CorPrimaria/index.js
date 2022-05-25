import axios from "axios"

import { useState } from "react";

export default function CorPrimaria() {
    const[cor, setCor] = useState('');
    const[resposta, setResposta] = useState('');

    async function verificacaoCorPrimaria() {
        const resp = await axios.get('http://localhost:5000/dia2/corprimaria' + cor);

        if(resp.data.primaria === true) {
            setResposta('Sim, é uma cor Primaria');
        }
        else{
            setResposta('Não, não é uma cor nesse carai');
        }

    }
    return (
        <div>
            Aloha
        </div>
    )

}
