import React from 'react'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const ItemDetail = ({ id, nombre, autor, precio, img, idCat, stock }) => {

//Estado local con la cantidad de productos agregados

const [agregarCantidad, setAgregarCantidad] = useState(0)

//Función manejadora de la cantidad

const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    console.log("Productos agregados:" + cantidad)
}

    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre}</h2>
            <h4>Autor: {autor}</h4>
            <h4>Precio: {precio}</h4>
            <h5>ID: {id}</h5>
            <img src={img} alt={nombre} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque,
            magni nemo assumenda aut voluptas sequi cupiditate, harum deserunt perspiciatis repellendus,
            quibusdam odio iure laudantium optio quia quod explicabo architecto!</p>
            <i>Categoría: {idCat}</i>

            {/*Lógica de montaje y desmontaje del contador*/}

            {
                agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock}
                    funcionAgregar={manejadorCantidad} />)
            }

        </div>
    )
}
