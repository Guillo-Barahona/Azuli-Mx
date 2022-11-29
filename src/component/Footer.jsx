import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid fondoFooter">
            <div className="container py-5">
                <hr/>
                <div className="row">
                    <div className="col-md-6">
                        <img src={"IMG/logo_azuli_slogan_2-1.png"} alt={"Burguer King Footer"} width={192} />
                    </div>
                    <div className="col-md-6 text-end">
                        <p>
                            <a href={"https://www.facebook.com/BurgerKingArgentina"} target={"_blank"} rel={"noreferrer"} className="me-3"><img src={"IMG/SM-RRSS-04.png"} alt="Facebook" width={32}/></a>
                            <a href={"https://www.instagram.com/burgerkingarg/"} target={"_blank"} rel={"noreferrer"} className="me-3"><img src={"IMG/SM-RRSS-03.png"} alt="Instagram" width={32}/></a>
                            <a href={"https://www.youtube.com/user/BurgerKingArg"} target={"_blank"} rel={"noreferrer"} className="me-3"><img src={"IMG/SM-RRSS-02.png"} alt="Youtube" width={32}/></a>
                            <a href={"https://twitter.com/BurgerKingArg"} target={"_blank"} rel={"noreferrer"} className="me-3"><img src={"IMG/SM-RRSS-01.png"} alt="Twitter" width={32}/></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

                        
    )
}

export default Footer;