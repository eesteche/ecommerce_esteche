import './App.css';
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Component/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './Context/CartContext'
import Cart from './Component/Cart/Cart';
import { NotificationProvider } from './notification/notification';

function App() {

  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
