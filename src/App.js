import React from "react";
import Footer from "./component/Footer";
import ItemListContainer from "./component/ItemListContainer";
import NavBar from "./component/NavBar";
import PromocionApp from "./component/PromocionApp";

function App() {
  return (

    <div>
      <NavBar />
      <ItemListContainer greeting={"no se encontraron productos!!"} />
      <h1>App!!</h1>
      <PromocionApp />
      <Footer />
    </div>

  );
}

export default App;
