import { useState } from "react";
import { ItemListContainer } from "./components/ItemListContainer"
import { Header } from "./components/header/Header"
import "./css/main.css"

function App() {

  const numerito = 1;

  return (
    <>
      <Header numerito={numerito}/>
      <ItemListContainer />
    </>
  )
}

export default App