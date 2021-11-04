import './App.css';
import Greeting from './components/Greeting';

function App() {
  const user = {
    firstName: 'Turma',
    lastName: '01'
  }
  const banana = {
    firstName: 'ban',
    lastName: 'ana'
  }
  return (
    <div className="App">
      <header className="App-header">
       <Greeting user={user}/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt necessitatibus
          cupiditate molestias ducimus, quam voluptatum vero quasi molestiae 
          expedita magni nobis est. Consectetur vero architecto, est magni voluptates 
          repellendus? Quod?
        </p>
        <Greeting user={banana}/>
      </header>
    </div>
  );
}

export default App;
