import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../data/productos.json";
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);
  
    let error = false;

    useEffect(() => {
        setTimeout(() => {
          setProducto(data.find((prod) => prod.id === parseInt(itemId)));
        }, 1000);
    }, [itemId]);

    if (producto) {
      return <ItemDetail producto={producto} />
    } else if (error) {
      return <div>Hubo un error</div>
    } else {
      return <div>Cargando...</div>
    }
}

export default ItemDetailContainer