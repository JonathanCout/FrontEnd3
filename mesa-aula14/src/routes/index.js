import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Brasilapi from '../pages/Brasilapi';
import Home from '../pages/Home';
import Viacep from '../pages/Viacep';

const RoutesList = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/viacep" element = {<Viacep/>} />
            <Route path="/brasilapi" element = {<Brasilapi/>} />
        </Routes>
    </BrowserRouter>
)

export default RoutesList