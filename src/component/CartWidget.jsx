import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="fondoCart btn btn-light position-relative">
        <img src={"IMG/basket.svg"} alt={"carrito"} width={32} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1+</span>
        </button>
    )
}
export default CartWidget;