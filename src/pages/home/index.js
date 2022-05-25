import { Link } from "react-router-dom";

export default function index() {
    return (
        <main>
            <h1>Pagina Home</h1>
            <h2>Ir para:</h2>
            <ul>
                <li> <Link to = '/CorPrimaria'>teste da CorPrimaria </Link> </li>
                <li> <Link to = '/IngressoCinema'>Calculo do Ingresso Cinema</Link></li>
            </ul>
        </main>
    )
}