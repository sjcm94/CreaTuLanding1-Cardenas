import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'

function App() {
  
  const mensaje = "Este lugar estará lleno de libros misteriosos... 😱";

  return (
    <>
      <NavBar/>
      <ItemListContainer aviso={mensaje}/>
    </>
  )

}

export default App
