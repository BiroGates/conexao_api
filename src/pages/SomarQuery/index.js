import { useState } from 'react';
import axios from 'axios';

export default function SomarQuery() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);

    const [soma, setSoma] = useState(0);

    async function handleSoma(){
        let resp = await axios.get(`http://localhost:5000/somar/q?a=${n1}&b=${n2}`);
        setSoma(resp.data.x);
    }

  return (
    <div>
        <div> DIGITE OS NUMEROS QUE DESEJA SOMAR </div>
        <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} />
        <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} />
        <button onClick={handleSoma}> DOBRAR </button>
        <div> { soma } </div>
    </div>
  )
}
