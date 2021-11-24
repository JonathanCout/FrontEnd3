import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Brasilapi from '../pages/Brasilapi';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Viacep from '../pages/Viacep';

const RoutesList = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/viacep" element = {<Viacep/>} />
            <Route path="/brasilapi" element = {<Brasilapi/>} />
            <Route path="*" element = {<NotFound/>}/>
        </Routes>
    </BrowserRouter>
)

export default RoutesList