import React, { Children } from 'react'
import { useState, createContext } from 'react'

// Contexto:
export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidad: 0
})

export const CarritoProvider = ({ children }) => {

    //Estado carrito, total y cantidad

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)

    //Funciones auxiliares

    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id)

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }])
            setCantidad(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio * cantidad))
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad }
                } else {
                    return prod
                }

            })
            setCarrito(carritoActualizado)            
            setCantidad(prev => prev + cantidad)
            setCantidad(prev => prev +(item.precio * cantidad))

        }
    }

    //Eliminar producto:

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id)
        const carritoActualizado = carrito.filter(prod => prod.item.id != id)

        setCarrito(carritoActualizado)
        setCantidad(prev => prev - productoEliminado.cantidad)
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad))
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidad(0);
        setTotal(0)

    }
    

    return (

        <CarritoContext.Provider value={{carrito, total, cantidad, agregarAlCarrito, eliminarProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}


