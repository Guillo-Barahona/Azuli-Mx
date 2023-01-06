import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
//import arrayProductos from "./json/arrayProductos.json";
import {doc, getDoc, getFirestore} from "firebase/firestore";


const ItemDetailContainer = () => {

    const [item, setItem] = useState ({});
    const{id} = useParams();


    // promise que accede a un JSON con un Array de onbjetos
/*     useEffect(()=>{
        const promesa = new Promise ((resolve) =>{
            console.log(id);
            setTimeout(()=>{
                resolve (arrayProductos.find(item=> item.id === parseInt(id)));
            },2000);

        });

        promesa.then((data) => {
            setItem(data);
        })
    },[id]); */


    //Para trabajar con firebase / consulta a firebase cnon un ID
    useEffect(()=>{
        const db = getFirestore(); //conexion a base de datos
        const documento = doc(db, "items", id); //devuelve un objeto con referencia al documento
        
        //promise para consulta del producto
        getDoc(documento).then((snapShot)=>{
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                //console.log(snapShot.data());
            } else {
                console.log("error!! no se encontro el documento!!")
            }
            
        });
    },[]);








    return(
        <div className="container">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer ;