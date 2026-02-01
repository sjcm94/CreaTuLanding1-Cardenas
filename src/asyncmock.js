const misProductos = [
    {id: "1", nombre: "La Llamada de Cthulhu", autor: "H.P. Lovecraft", precio: 350, img: "../public/img/react_img_1.jpg", idCat:"terror", stock: 21},
    {id: "2", nombre: "El Corazón Delator", autor: "E.A. Poe", precio: 130, img: "../public/img/react_img_2.jpg", idCat:"terror", stock: 5},
    {id: "3", nombre: "El Sol Desnudo", autor: "I. Asimov", precio: 280, img: "../public/img/react_img_3.jpg", idCat:"ciencia", stock: 3},
    {id: "4", nombre: "El Seor de los Anillos", autor: "J.R.R. Tolkien", precio: 720, img: "../public/img/react_img_4.jpg", idCat:"fantasia", stock: 11},
]

export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve=>{
        setTimeout(()=>{
            const producto = misProductos.find(Item =>Item.id === id)
            resolve(producto)
        }, 100)
    })
}

// Función que retorna una categoría

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        }, 100)
    })
}