import { useState } from "react";
import { ItemListContainer } from "./components/ItemListContainer"
import { Header } from "./components/header/Header"
import "./css/main.css"
import Pokemon from "./components/Pokemon";
import PokemonList from "./components/PokemonList";
import Counter from "./components/Counter";
import Grilla from "./components/Grilla";

function App() {

  const numerito = 1;

  return (
    <>
      <Header numerito={numerito}>
        <p>Hola</p>
      </Header>
      {/*<ItemListContainer />*/}
      {/* <PokemonList /> */}
      {/* <Counter /> */}
      <Grilla />
    </>
  )
}

export default App