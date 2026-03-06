import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext} from '../../context/CarritoContext'
import { useContext } from 'react'
import { toast } from "react-toastify"

export const ItemDetail = ({ id, nombre, autor, precio, img, idCat, stock, desc }) => {

//Estado local con la cantidad de productos agregados

const [agregarCantidad, setAgregarCantidad] = useState(0)

const {agregarAlCarrito} = useContext(CarritoContext)

//Función manejadora de la cantidad

const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)

    //Se crea objeto con el item y la cantidad
    const item= {id, nombre, precio}
    agregarAlCarrito(item, cantidad) 
    toast.success("Su compra fue enviada al carrito", {
       autoClose:1000, theme: "dark" , position: "top-center"
    })
}


    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre}</h2>
            <h4>Autor: {autor}</h4>
            <h4>Precio: {precio}</h4>
            <h5>ID: {id}</h5>
            <img src={img} alt={nombre} />
            <p>{desc}</p>
            <i>Categoría: {idCat}</i>

            {/*Lógica de montaje y desmontaje del contador*/}

            {
                agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock}
                    funcionAgregar={manejadorCantidad} />)
            }

        </div>
    )
}
