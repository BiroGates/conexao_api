import { Link } from "react-router-dom";

export default function index() {
    return (
        <main>
            <h1>Pagina Home</h1>
            <h2>Ir para:</h2>
            <ul>
                <li> <Link to = '/corPrimaria'>teste da CorPrimaria </Link> </li>
                <li> <Link to = '/dobro'>Calculo do dobro de um numero</Link></li>
                <li> <Link to = '/somarQuery'>Soma de dois numeros</Link></li>
                <li> <Link to = '/somarBody'>Soma de dois numeros</Link></li>
                <li> <Link to = '/media'>Calculo da media de 3 notas</Link></li>
                <li> <Link to = '/IngressoCinema'>Calculo do Ingresso Cinema</Link></li>
                <li> <Link to = '/Frequencia'>Frequencia em que um caracter aparece</Link></li>
                <li> <Link to = '/medirTemperatura'>Calculo de estado febril</Link></li>
            </ul>
        </main>
    )
}