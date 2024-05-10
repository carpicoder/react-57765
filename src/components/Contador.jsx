import { useState } from "react";
import ContadorNumero from "./ContadorNumero";


export const Contador = () => {

  let [numero, setNumero] = useState(1);

  function aumentarNumero() {
    if (numero < 10) {
      setNumero(numero + 1);
    }
  }
  
  function disminuirNumero() {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  }

  return (
    <>
      <ContadorNumero numero={numero} />
      <button onClick={disminuirNumero}>-</button>
      <button onClick={aumentarNumero}>+</button>
    </>
  )
}