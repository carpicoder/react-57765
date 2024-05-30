import React, { useEffect, useState } from 'react'

const Nosotros = ( {clickear} ) => {

    useEffect(() => {
        document.body.addEventListener("click", clickear)

        return () => {
            document.body.removeEventListener("click", clickear)
        }
    }, [])

  return (
    <div>
        <button onClick={clickear}>Consologuear</button>
    </div>
  )
}

export default Nosotros