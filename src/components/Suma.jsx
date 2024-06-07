import React, { useMemo, useState } from 'react'

export const Suma = () => {

    const array = new Array(10000000).fill(0);
    array[array.length - 1] = 10;

    const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);
    const [numeros2, setNumeros2] = useState(array);

    const suma = useMemo(() => {
        console.log("Calculando...");
        return numeros.reduce((acc, num) => acc + num, 0);
    }, [numeros])

    const mostrarNumerosIniciales = useMemo(() => {
        console.log("Calculando2");
        console.log(numeros2.find(num => num === 10))
        return numeros2;
    }, [numeros2]);
    

  return (
    <div>
        Suma: {suma}<br/>
        <button onClick={() => { setNumeros([...numeros, numeros.length + 1]) }}>Agregar un número a la suma</button>
    </div>
  )
}
