import logo from './logo.svg';
import './components/Header';
import './components/Footer';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuInterface from './components/MenuInterface';

function App() {
  return (
      <div className="App">
          <Header></Header>

          <MenuInterface>
          </MenuInterface>



          <Footer></Footer>
    </div>
  );
}

export default App;
