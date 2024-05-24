import React from 'react'
import { NavBar } from './NavBar'
import { Carrito } from './Carrito'

export const Header = (props) => {

  return (
    <header className="header">
        <h1>CarpiShop</h1>
        <NavBar />
        <Carrito numerito={props.numerito} />
        <p>{props.children}</p>
    </header>
  )
}
