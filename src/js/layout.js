import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";
import { Footer } from "./component/footer";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single.jsx";
import DetallePlanets from "./views/DetallePlanets.jsx";

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
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
