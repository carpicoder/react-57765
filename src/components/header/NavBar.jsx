import React from 'react'

export const NavBar = () => {
  return (
    <nav className="nav">
        <ul className="nav-menu">
            <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Camisetas</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Pantalones</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Camperas</a></li>
        </ul>
    </nav>
  )
}
