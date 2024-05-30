import { useState } from "react";
import { ItemListContainer } from "./components/ItemListContainer"
import { Header } from "./components/header/Header"
import "./css/main.css"
import Pokemon from "./components/Pokemon";
import PokemonList from "./components/PokemonList";
import Counter from "./components/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";

function App() {

  const clickear = () => {
      console.log("Hola, gente!");
  }

  const [numerito, setNumerito] = useState(1);

  return (
    <BrowserRouter>
      <Header numerito={numerito} setNumerito={setNumerito} />
      <Routes>
        <Route path="/" element={<><PokemonList /></>}/>
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/pokemon/:pokemonId" element={<Pokemon />}/>
        <Route path="/nosotros" element={<Nosotros clickear={clickear} />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App