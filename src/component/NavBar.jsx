import React from "react";
import {Link, NavLink} from "react-router-dom"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}><img src="/IMG/logo_azuli_slogan_2-1.png" alt={"Azuli logo"} width={180} /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/"}>Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/category/bombas"}>Bombeo</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/piscinas"}>Piscinas</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to={"category/tratamiento"}>Tratamiento</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/presion"}>Presion</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/purificacion"}>Purificacion</NavLink>
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