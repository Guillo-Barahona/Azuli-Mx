import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Footer from "./component/Footer";
import ItemListContainer from "./component/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer";
import NavBar from "./component/NavBar";
import PromocionApp from "./component/PromocionApp";
import Error404 from "./component/Error404";
import CartContextProvider from "./component/Context/CartContext";
import Cart from "./component/Cart";

function App() {
  return (

    <CartContextProvider>
      <div>
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path={""} element={<ItemListContainer/>}/>
              <Route path={"/category/:id"} element={<ItemListContainer/>}/>
              <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
              <Route path={"/cart"} element={<Cart />} />
              <Route path={"*"} element={<Error404/>}/>
            </Routes>



          <PromocionApp />
          <Footer />
        </BrowserRouter>

      </div>
    </CartContextProvider>

  );
}

export default App;
