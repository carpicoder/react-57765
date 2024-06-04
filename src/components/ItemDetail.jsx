import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

export const ItemDetail = ( { producto } ) => {

    const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div>
        <img src={producto.imagen} />
        <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <p>${producto.precio}</p>
        <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  )
}
