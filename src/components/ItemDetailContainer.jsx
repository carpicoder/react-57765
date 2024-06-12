import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);
  
    let error = false;

    useEffect(() => {

      const docRef = doc(db, "productos", itemId);
      getDoc(docRef)
        .then(res => {
          setProducto( { ...res.data(), id: res.id } );
        })
      
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