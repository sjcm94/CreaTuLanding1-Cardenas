import React, { useContext } from 'react'
import { useState } from 'react'
import {CarritoContext} from "../../context/CarritoContext"
import { db } from '../../services/config'
import {collection, addDoc} from "firebase/firestore"

export const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm,] = useState();
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const {carrito, vaciarCarrito, total} = useContext(CarritoContext)


  return (
    <div>
        <h2>Checkout</h2>
        <form>
            {carrito.map(producto =>(
                <div key={producto.item.id}>
                    
                </div>
            ))}
        </form>
    </div>
  )
}


