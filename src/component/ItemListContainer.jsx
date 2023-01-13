import { collection , getDocs, getFirestore, query, where} from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./itemList";
import Loading from "./Loading";


const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    // Consultar la coleccion de productos
    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection //se aplica filtro por categoria, o te devuelve el array completo 
        
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
            setLoading(false);
        })
    },[id]);


    return (
        <div className="container py-5">
                {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;