import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import Loading from "./Loading";


const ItemDetailContainer = () => {

    const [item, setItem] = useState ({});
    const{id} = useParams();
    const [loading, setLoading] = useState(true);

    //Para trabajar con firebase / consulta a firebase cnon un ID
    useEffect(()=>{
        const db = getFirestore(); //conexion a base de datos
        const documento = doc(db, "items", id); //devuelve un objeto con referencia al documento
        
        //promise para consulta del producto
        getDoc(documento).then((snapShot)=>{
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            } else {
                console.log("error!! no se encontro el documento!!")
            }
            
        });
    },[id]);

    return(
        <div className="container">
            {loading ? <Loading/> : <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer ;