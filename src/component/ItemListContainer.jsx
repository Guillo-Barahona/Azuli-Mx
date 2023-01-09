import { collection , getDocs, getFirestore, query, where} from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./itemList";
//import arrayProductos from "./json/arrayProductos.json";


const ItemListContainer = () => {



    const [items, setItems] = useState([]);
    const {id} = useParams();



    //consultar un Json con el Array de objetos
/*     useEffect(() => {
        const promesa = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id): arrayProductos); //filtra por categoria
            },2000);
        });

        promesa.then((data) => {
            setItems(data);
            //console.log(data);
        })
    }, [id]); */




    //insertar productos del JSON a Firestore -- Se hace una vez
/*     useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection(db, "items"); 
        //console.log(arrayProductos)
        
        arrayProductos.forEach((item)=>{
            addDoc(itemsCollection, item)
        })
    },[]); */


// Consultar la coleccion de productos
    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        //const q = query(itemsCollection, where("precio","<",1000));//Filtra del Documento con una condicion
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection //se aplica filtro por categoria, o te devuelve el array completo 
        
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
        })
        

    },[id]);


    return (
        <div className="container py-5">
                <ItemList items={items}/>
        </div>
        

    )
}

export default ItemListContainer;