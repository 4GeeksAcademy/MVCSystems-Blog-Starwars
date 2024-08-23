import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";
import { Footer } from "./component/footer.jsx";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single.js";
import DetallePlanets from "./views/DetallePlanets.jsx";
import DetalleCharacter from "./views/DetalleCharacter.jsx";
import DetalleVehicle from "./views/DetalleVehicle.jsx";

//create your first component
const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="/detalleplanets/:uid" element={<DetallePlanets />} />
            <Route
              path="/detallecharacter/:uid"
              element={<DetalleCharacter />}
            />
            <Route path="/detallevehicle/:uid" element={<DetalleVehicle />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
