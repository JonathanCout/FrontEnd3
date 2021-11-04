import './App.css';
import Greeting from './components/Greeting'
import Video from './components/Video';

function App() {
  const user = {
    firstName: "Turma",
    lastName:"XX"
  }
  return (
    <>
    <div className="App">
      <Greeting user={user} />
      <Video url="https://www.youtube.com/embed/l04_GGlr3BI">
        Parabains
      </Video>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Excepturi tempora, maiores eum delectus molestias saepe modi vero esse! 
        Vel beatae iusto maiores saepe provident necessitatibus a blanditiis corporis 
        aliquid? Perspiciatis.
      </p>
    </div>
    </>
  );
}

export default App;
