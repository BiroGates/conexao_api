import { useState } from 'react';
import axios from 'axios';

export default function SomarBody() {
    const [data, setData] = useState({
        n1: 0,
        n2: 0
    })

    const [soma, setSoma] = useState(0);

    async function handleSoma(){
        let resp = await axios.get(`http://localhost:5000/somar`, data);
        setSoma(resp.data.x);
    }

  return (
    <div>
        <div> DIGITE OS NUMEROS QUE DESEJA SOMAR </div>
        <input type="number" value={n1} onChange={(e) => setData({...data, n1: e.target.value})} />
        <input type="number" value={n2} onChange={(e) => setData({...data, n2: e.target.value})} />
        <button onClick={handleSoma}> DOBRAR </button>
        <div> { soma } </div>
    </div>
  )
}
