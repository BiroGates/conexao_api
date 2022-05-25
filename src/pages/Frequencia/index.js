import { useState } from 'react';
import axios from 'axios';


export default function index() {
    const[texto, setTexto] = useState = ('');
    const[caractere, setCaractere] = useState = ('');
    const[resposta, setResposta] = useState = ('');
    
    async function VerificarFreq() {
       const resp= await axios.get(`http://localhost:5000/dia2/frequencia/${texto}/${caractere}`)
       setResposta(resp.data.freq);
    }
    
    return (
        <main>
            <h1> Frequencia </h1>
            <div>
                Texto: <input type = "text" value = {texto} onChanges={e => setTexto(e.target.value)}/> 
            </div>
            <div>
                Caractere: <input type = "text" value = {caractere} onChanges={e => setCaractere(e.target.value)}/>
            </div>
            <div>
                <button onClick={VerificarFreq}> Verificar Frequencia </button>
            </div>
            <div>
                Frequencia: {resposta}
            </div>
        </main>
    )
}