import './App.css';
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Component/ItemDetailContainer/ItemDetailContainer';
function App() {

  return (
    <div className="App">
    
      <BrowserRouter>
      <NavBar />
        <Routes>          
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
