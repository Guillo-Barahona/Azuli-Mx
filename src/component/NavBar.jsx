import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><img src="IMG/logo_azuli_slogan_2-1.png" alt={"Burguer King logo"} width={180}/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/hambuerguesas">Inicio</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/pollo">Productos</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/papas-fritas">Nosotros</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/postres">Contacto</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end">
                <CartWidget/>
            </div>
            </div>
        </div>
        

    )
}

export default NavBar;