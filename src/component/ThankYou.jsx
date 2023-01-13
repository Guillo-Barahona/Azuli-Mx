import React from "react";
import { useParams, Link } from "react-router-dom";



const ThankYou = () => {
    const {id} = useParams();

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-success" role="alert">
                        <h1>Gracias por tu Compra!!!</h1>
                        <p>Su Número de Compra es:  <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn fondoCart">Volver a la Página Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default ThankYou;