import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  

  return (
    <nav className="nav">
        <ul className="nav-menu">
            <li className="nav-item">
              <NavLink to="/" activeClassName="active" className="nav-link">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/productos" activeClassName="active" className="nav-link">Productos</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pantalones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Camperas</a>
            </li>
        </ul>
    </nav>
  )
}
