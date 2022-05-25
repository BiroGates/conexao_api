import { useState } from "react"

import axios from "axios"

export default function IngressoCinema() {
    const [result, setResult] = useState();
    const [data, setData] = useState({
        dia: '',
        nacionalidade: '',
        qtdinteiras: 0,
        qtdmeias: 0
    });

    async function handleIngresso() {
        let resp = await axios.post(`http://localhost:5000/dia2/ingressocinema`, data);
        console.log(data);
        setResult(resp.data.x);
    
    }

    return(
        <div>
            
            <div> Informe o dia: </div>
            <input style={{display: "block"}} type="text" value={data.dia} onChange={(e)=>setData({...data, dia: e.target.value})} />
            
            <div> Informe a nacionalidade: </div>
            <input style={{display: "block"}} type="text" value={data.nacionalidade} onChange={(e)=>setData({...data, nacionalidade: e.target.value})} />
            
            <div> Informe a quantidade de inteiras: </div>
            <input style={{display: "block"}} type="number" value={data.qtdinteiras} onChange={(e)=>setData({...data, qtdinteiras: e.target.value})} />
            
            <div> Informe a quantidade de meias: </div>
            <input style={{display: "block"}} type="number" value={data.qtdmeias} onChange={(e)=>setData({...data, qtdmeias: e.target.value})} />
            
            <div> RESULTADO : { result } </div>
            <button style={{display: "block"}} onClick={handleIngresso}> CALCULAR </button>

        </div>
    );
}