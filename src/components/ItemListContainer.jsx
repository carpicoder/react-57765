import React, { useEffect, useRef, useState } from 'react'

export const ItemListContainer = (props) => {

  const parrafo = useRef();

  let [numero, setNumero] = useState(1);

  const cambiarParrafo = () => {
    parrafo.current.innerHTML = "hola";
    parrafo.current.classList.add("hola");
    props.setModoColor("oscuro");
    setNumero(numero + 1);
  }

  let [pikachu, setPikachu] = useState(undefined);

  useEffect(() => {

    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then(res => res.json())
      .then(data => {
        setPikachu(data);
        console.log(pikachu);
      });
      
  }, [])
  

  return (
    <div className="products-container">
      {props.saludo}
      {props.children}

      <p ref={parrafo}>Párrafo de referencia</p>
      <button onClick={cambiarParrafo}>Cambiar párrafo</button>
      <p>{numero}</p>

      <p>{pikachu ? pikachu.name : "todavía no llegó"}</p>
    </div>
  )
}