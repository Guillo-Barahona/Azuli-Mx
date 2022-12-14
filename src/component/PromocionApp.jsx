import React from "react";

const PromocionApp = () => {
    return (

    <div className="container-fluid fondoPromo">
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-6 text-center">
                    <img src={"/IMG/tel_banner.png"} alt={"Burguer king app"} width={320}/>
                </div>

                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h3 className="fs-1">Las mejores marcas en tratamiento de agua</h3>
                        <p><a href="https://play.google.com/store/apps/details?id=ar.burgerking" target={"_blank"} rel={"noreferrer"}><img src={"IMG/google_play.png"} alt={"Android"} width={135} height={45}/></a><a href="https://apps.apple.com/us/app/id1528704320" target={"_blank"} rel={"noreferrer"}><img src={"IMG/app__store.png"} alt={"IOS"} width={135} height={45}/></a></p>

                        <p>Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU. Y otros países. App Store es una marca de servicio de Apple Inc. Google Play es una marca comercial de Google Inc. Se aplican términos.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
        
    )
}

export default PromocionApp;