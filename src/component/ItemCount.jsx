import React from "react";
import {useState} from "react";

const ItemCount = ({stockItems}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems); //para restar el stock agregado al carrito

    //funcion agregar
    const incrementarStock = () => {
        if (counter < stock){ //para que el contador no aumente mas alla del stock
            setCounter(counter + 1); 
        }

    }

    //funcion decrementar
    const decrementarStock = () => {
        if (counter > 1 ) {
            setCounter(counter - 1);
        }
        
    }

    //funcion boton agregar
    const onAdd = () => {
        if ((counter <= stock) && (stock > 0)) {
            console.log("Se agregaron: " + counter + " productos al carrito");
            
            setStock(stock - counter); //Resta del stock, lo que se agrega al carrito
            setCounter (1); // resetea el counter
        }
    }




    return (
        <div className="container text-center">

            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-danger" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-outline-dark">{counter}</button>
                        <button type="button" className="btn btn-outline-success" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={onAdd}>Agregar al carrito</button>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default ItemCount;