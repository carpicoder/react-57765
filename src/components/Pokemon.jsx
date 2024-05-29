import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Pokemon = () => {

    const { pokemonId } = useParams();

    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(res => res.json())
            .then(data => setPokemon(data));

    }, [])
    

  return (
    <div>{pokemon ? 
        <div>
            <img src={pokemon.sprites.front_default} />
            <h5>{pokemon.name}</h5>
            <Link to="/">Volver a Inicio</Link>
        </div> 
        : "Cargando..."}</div>
  )
}

export default Pokemon