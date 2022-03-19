import NavBar from './Component/NavBar/NavBar'
import './App.css';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo="¡Bienvenido!"/>
    </div>
  );
}

export default App;