import axios from "axios";
import {useState} from "react"



export default function index(){
    const[numeros, senumeros] = useState([]);
    const[numero, setNumero] = useState(0);
    const[resposta,setResposta] = useState('');

    function adcionar() {
        setNumero([...numeros])
        setNumero('')
    }

    function verificarMaior() {
        const resp = await axios.post('http://localhost:5000/dia2/maiornumero', numeros)
        setResposta(resp.data.maior)
    }

    return (
        <main>
            <h1> Maior Numero </h1>
    
            <div>
                Número: <input type ='text' value={numero} onChange ={e => setNumero(Numeber(e.target.value))} />
                <button onClick={adcionar}> Adcionar Número</button>
            </div>

            <div>
                {numeros.map(item =>
                        <div> {item} </div>
                    )}
            </div>

            <div>
                <button> Verificar </button> o Maior Número é {resposta}
            </div>
        </main>
    )
}