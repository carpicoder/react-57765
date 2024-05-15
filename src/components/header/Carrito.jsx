import React from 'react'
import { CartCheck } from 'react-bootstrap-icons'

export const Carrito = (props) => {



  return (
    <div className="carrito">
        <CartCheck color="red" /> {props.numerito}
    </div>
  )
}