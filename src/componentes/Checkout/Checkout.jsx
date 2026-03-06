import { useContext } from 'react'
import { useState } from 'react'
import { CarritoContext } from "../../context/CarritoContext"
import { db } from '../../services/config'
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"

export const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm,] = useState();
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext)

    //Funciones y validaciones

    const manejadorFormulario = (event) => {
        event.preventDefault();

        //Verificamos que los campos estén completos
        if (!nombre || !apellido || !telefono || !email || !emailConfirm) {
            setError("Completa todos los datos o tendrás problemas.")
            return
        }

        //Validamos que los campos del email coincidan con el email confirmación
        if (email !== emailConfirm) {
            setError("Los campos del email no coinciden, te estamos observando.")
            return
        }

        //1) Creamos un objeto con todos los datos de la OC

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        /////////////////

        //Vamos a modificar el código para que ejecute varias promesas en paralelo, por un lado que actualice el stock de productos y por el otro lado que genere una orden de compra
        //Vamos a usar para lograr esto: Promise.all

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "libreria", productoOrden.id)
                //Por cada producto en la colección "libreria" obtengo una referencia, y a partir de esa referencia obtengo un DOC.
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                // Data es un método que me permite acceder a la información del documento

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
                //Modifico el stock y subo la info actualizada
            })
        )
            .then(() => {
                //2) Guardar la OC en la DB
                addDoc(collection(db, "ordenes"), orden)
                    .then(docRef => {
                        setOrdenId(docRef.id)
                        vaciarCarrito()
                            .catch(error => {
                                console.log(error)
                                setError("Se produjo un error al crear la orden, la vamos a pasar mal.")
                            })
                    })

            })


    }


    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={manejadorFormulario}>
                {carrito.map(producto => (
                    <div key={producto.item.id} >
                        <p> {producto.item.nombre} x {producto.cantidad} </p>
                        <p> {producto.item.precio} </p>
                        <hr />
                    </div>
                ))
                }
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Telefono</label>
                    <input type="text" onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Correo electrónico</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Confirmación del correo electrónico</label>
                    <input type="email" onChange={(e) => setEmailConfirm(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button type='submit' >Confirmar compra</button>

                {
                    ordenId && (
                        <strong>Gracias por tu compra. Tu número de orden es:{ordenId}</strong>
                    )
                }

            </form>
        </div>
    )
}

export default Checkout