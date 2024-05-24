import React from 'react'

const Grilla = () => {

   const productos = [
    "Silla", "Mesa", "Puerta", "Ventana", "Escritorio", "Lámpara", "Lámpara"
   ];
   let cantidadColumnas = productos.lenght > 4 ? 4 : productos.length;

  return (
    <div className="grid" style={{gridTemplateColumns: `repeat(${cantidadColumnas}, 1fr)`}}>
        {productos.map((producto) => <p key={producto}>{producto}</p>)}
    </div>
  )
}

export default Grilla