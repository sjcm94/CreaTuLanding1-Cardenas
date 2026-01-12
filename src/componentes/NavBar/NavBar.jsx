import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
        <h1>Tienda de Libros</h1>

        <nav>
            <ul>
                <li>Terror</li>
                <li>Ciencia Ficción</li>
                <li>Fantasía</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar