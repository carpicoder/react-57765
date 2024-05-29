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

function App() {

  const numerito = 1;

  return (
    <BrowserRouter>
      <Header numerito={numerito} />
      <Routes>
        <Route path="/" element={<><PokemonList /></>}/>
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/pokemon/:pokemonId" element={<Pokemon />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App