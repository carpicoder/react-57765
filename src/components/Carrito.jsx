import React, { Fragment, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

  const { carrito, calcularTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);

  return (
    <div>
      {carrito.map((prod) => {
        return (
          <Fragment key={prod.id}>
            <h1>{prod.nombre}: ${prod.precio}</h1>
            <button onClick={() => { eliminarProducto(prod)}}>❌</button>
          </Fragment>
        )
        
        })}
      {
        carrito.length > 0 ?
        <>
          <h2>Total: ${calcularTotal()}</h2>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
          <Link to="/finalizar-compra">Finalizar compra</Link>
        </> :
        <h2>Carrito vacío :/</h2>
      }
    </div>
  )
}

export default Carrito