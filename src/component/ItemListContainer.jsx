import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./itemList";
import arrayProductos from "./json/arrayProductos.json";

const ItemListContainer = () => {


    //carga el array de datos, de la carpeta json
    const [items, setItems] = useState([]);

    const {id} = useParams();

    useEffect(() => {

        const promesa = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id): arrayProductos); //filtra por categoria
            },2000);
        });

        promesa.then((data) => {
            setItems(data);
            //console.log(data);
        })
    }, [id]);





    return (
        <div className="container py-5">
                <ItemList items={items}/>
        </div>
        

    )
}

export default ItemListContainer;