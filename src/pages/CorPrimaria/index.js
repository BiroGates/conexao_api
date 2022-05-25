import axios from "axios"

import { useState } from "react";

export default function CorPrimaria() {
    const [cor, setCor] = useState('');
    const [resposta, setResposta] = useState('');

    async function verificacaoCorPrimaria() {
        const resp = await axios.get('http://localhost:5000/dia2/corprimaria/:' + cor);

        if (resp.data.x === true) {
            setResposta('Sim, é uma cor Primaria');
        }
        else {
            setResposta('Não, não é uma cor Primaria');
        }

    }
    return (
        <main>
            <div>
                <h1>Cor Primaria</h1>
            </div>
            <div>
                cor: <input type="text" value={cor} onChange ={ e => setCor(e.target.value)} />
            </div>
            <div>
                <button onClick={verificacaoCorPrimaria}> Verificar </button>
            </div>
            <div>
                é cor Primaria? {resposta}
            </div>
        </main>
    )

}
