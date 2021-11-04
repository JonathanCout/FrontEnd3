import './App.css';
import Banner from './components/Banner';
import Ednaldo from './components/Ednaldo';
import Header from './components/Header';
import Videos from './components/Galeria';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Banner />
        <Ednaldo />
        <Videos />
      </main>
      <Footer />
    </div>
  );
}

export default App;
