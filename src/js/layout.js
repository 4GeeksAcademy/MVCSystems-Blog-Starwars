import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";
import { Navbar } from "./component/Navbar.jsx";
import { Contenedor } from "./component/Contenedor.jsx";
import { Footer } from "./component/footer";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single.jsx";
import ViewPlanets from "./views/viewPlanets.jsx";

//create your first component
const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Contenedor />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="/viewplanets/:uid" element={<ViewPlanets />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
