import { useState } from 'react';
import axios from 'axios';

export default function Media() {
    const [data, setData] = useState({
        nota1: 0,
        nota2: 0,
        nota3: 0
    })

    const [soma, setSoma] = useState(0);

    async function handleSoma(){
        let resp = await axios.post(`http://localhost:5000/media`, data);
        setSoma(resp.data.x);
    }

  return (
    <div>
        <div> DIGITE OS NUMEROS QUE DESEJA SOMAR </div>
        <input style={{display: "block"}} type="number" value={data.nota1} onChange={(e) => setData({...data, nota1: e.target.value})} />
        <input style={{display: "block"}} type="number" value={data.nota2} onChange={(e) => setData({...data, nota2: e.target.value})} />
        <input style={{display: "block"}} type="number" value={data.nota3} onChange={(e) => setData({...data, nota3: e.target.value})} />
        <button onClick={handleSoma}> CALCULAR </button>
        <div> { soma } </div>
    </div>
  )
}
