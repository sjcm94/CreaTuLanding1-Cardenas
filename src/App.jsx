import './App.css'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <>
     <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
        <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
      </Routes>

     </BrowserRouter>
    </>
  )

}

export default App
