import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);
    let [loading, setLoading] = useState(true);

    useEffect(() => {

      const docRef = doc(db, "productos", itemId);
      getDoc(docRef)
        .then(res => {
          if (res.data()) {
            setProducto( { ...res.data(), id: res.id } );
          }
          setLoading(false);
        })
      
    }, [itemId]);

    if (loading) {
      return <div>Cargando...</div>
    } else if (producto) {
      return <ItemDetail producto={producto} />
    } else {
      return <div>Producto no encontrado</div>
    }
}

export default ItemDetailContainer