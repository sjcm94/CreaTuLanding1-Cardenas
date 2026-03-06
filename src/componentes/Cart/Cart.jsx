import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";


export const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidad } = useContext(CarritoContext)

    if (cantidad === 0) {
        return (
            <>
                <h2>Compra, por favor. Vive el terror.</h2>
                <Link to="/">Ver Productos</Link>
            </>
        )
    }


    return (
        <div>
            {
                carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
            }
            <h3>Total: ${total} </h3>
            <h3>Cantidad total: {cantidad} </h3>
            <button onClick={()=>vaciarCarrito()}>Vaciar carrito</button>
            <Link to="/checkout" >Finalizar compra</Link>
        </div>
    )
}

export default Cart 