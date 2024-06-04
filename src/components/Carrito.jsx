import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

  const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);

  return (
    <div>
      {carrito.map((prod) => <h1>{prod.nombre}: ${prod.precio}</h1>)}
      {
        carrito.length > 0 ?
        <>
          <h2>Total: ${calcularTotal()}</h2>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </> :
        <h2>Carrito vacío :/</h2>
      }
    </div>
  )
}

export default Carrito