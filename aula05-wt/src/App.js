import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  const empresa = {
    nome:"Minha Empresa",
    cnpj:"1234564891231"
  }

  return (
    <div className="App">
      <Header></Header>
      <Banner><h2>Texto doido</h2><button>Botão doido</button> </Banner>
      <Footer empresa={empresa}></Footer>
    </div>
  );
}

export default App;
