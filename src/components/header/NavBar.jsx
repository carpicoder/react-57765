import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  

  return (
    <nav className="nav">
        <ul className="nav-menu">
            <li className="nav-item">
              <NavLink to="/" activeclassname="active" className="nav-link">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/productos" activeclassname="active" className="nav-link">Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nosotros" activeclassname="active" className="nav-link">Nosotros</NavLink>
            </li>
        </ul>
    </nav>
  )
}
