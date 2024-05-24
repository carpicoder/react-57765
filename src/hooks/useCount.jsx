import { useState } from "react";

export const useCount = (initial, min, max) => {
    

    let [count, setCount] = useState(initial);

    const handleRestar = () => {
        count > min && setCount((prev) => prev - 1);
    }

    const handleSumar = () => {
        count < max && setCount((prev) => prev + 1);
    }

    const handleReset = () => {
        setCount(initial);
    }


  return [ count, handleRestar, handleSumar, handleReset ]
}

