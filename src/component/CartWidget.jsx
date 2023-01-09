import React from "react";
import { useContext } from "react";
import {CartContext} from "./Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return cartTotal() ? <Link to={"/cart"} className="btn fondoCart position-relative" title="Ir al Carrito">

        <img src={"/IMG/basket.svg"} alt={"carrito"} width={32} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link> : "";


}
export default CartWidget;