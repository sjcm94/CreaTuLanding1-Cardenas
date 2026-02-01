import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
       <h1>Librería Misteriosa</h1>
      </Link>
        

        <nav>
            <ul>
                <li>
                  <Link to="categoria/terror"> Terror </Link>
                </li>
                <li>
                  <Link to="categoria/ciencia"> Ciencia Ficción </Link>
                </li>
                <li>
                  <Link to="categoria/fantasia"> Fantasía </Link>
                </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar