import './App.css'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './componentes/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )

}

export default App
