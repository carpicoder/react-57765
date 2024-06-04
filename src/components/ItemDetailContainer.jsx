import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../data/productos.json";
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);

    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId])
    

  return (
    <div>{producto ? <ItemDetail producto={producto} /> : "Cargando..."}</div>
  )
}

export default ItemDetailContainer