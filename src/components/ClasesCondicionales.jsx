import React from 'react'

export const ClasesCondicionales = ({condicion, claseProp}) => {
  return (
    <div className={`${condicion ? "verde" : "rojo"} ${claseProp ? "bg-blanco" : ""}`}>ClasesCondicionales</div>
  )
}