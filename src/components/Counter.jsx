import React, { useState } from 'react'
import { useCount } from '../hooks/useCount'

const Counter = () => {

    let [ count, handleRestar, handleSumar, handleReset ] = useCount(1, 1, 10);

    // function devolverUsuario(nombreIngresado) {
    //     return { nombre: nombreIngresado, edad: 28 }
    // }

    // let {nombre, edad} = devolverUsuario();

    // console.log(nombre)

  return (
    <div className="container">
        <p>{count}</p>
        <button onClick={handleRestar}>restar</button>
        <button onClick={handleSumar}>sumar</button>
        <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default Counter