import React from "react";
import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./Context/CartContext";

const ItemDetail = ({item}) => {
    const {addItem, cart} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
        console.log(cart);
    }



    return(
        
        <div className="row my-5">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.nombre}/>
                <h1>{item.nombre}</h1>
                <p className=" fs-5">{item.descripcion}</p>
                <p><b>${item.precio}</b></p>

            </div>
                <ItemCount stock={item.stock} onAdd ={onAdd}/>
        </div>
    )
}

export default ItemDetail;