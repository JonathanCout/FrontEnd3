import { Link } from "react-router-dom";
import '../../styles/home.scss'
const Home = () => (
    <>
        <main>
            <h1>Pesquisa de CEP</h1>
            <div>
            <Link to = '/viacep'>Viacep</Link>
            <Link to = '/brasilapi'>BrasilAPI</Link>
            </div>
        </main>
    </>
)
export default Home;