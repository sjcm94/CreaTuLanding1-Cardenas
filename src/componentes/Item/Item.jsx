import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

export const Item = ({id, nombre, autor, precio, img, stock}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <h4>Autor: {autor}</h4>
        <p>Precio: {precio}</p>
        <p>ID: {id}</p>
        <p>Stock: {stock}</p>
        <Link to={`/item/${id}`}>
         <button> Ver detalles </button>
        </Link>
        
    </div>
  )
}


