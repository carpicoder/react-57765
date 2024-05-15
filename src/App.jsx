import { useState } from "react";
import { ItemListContainer } from "./components/ItemListContainer"
import { Header } from "./components/header/Header"
import "./css/main.css"

function App() {

  const saludo = "Hola, mundo!";
  const numerito = 1;

  const [modoColor, setModoColor] = useState("claro");

  return (
    <>
      <Header numerito={numerito} modoColor={modoColor}/>
      <ItemListContainer saludo={saludo} setModoColor={setModoColor}>
        <p>Hola!</p>
      </ItemListContainer>
    </>
  )
}

export default App