import "./CartWidget.css"
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

  const { cantidad } = useContext(CarritoContext)

  return (
    <div>
      <Link to="/cart">
        <p><span alt="Carrito de compras">🛒</span></p>
        {
          cantidad > 0 && <strong> {cantidad} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget