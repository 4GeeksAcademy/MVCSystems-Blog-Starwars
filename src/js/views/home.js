import React from "react";
import "../../styles/home.css";
import { Navbar } from "../component/Navbar.jsx";
import { Contenedor } from "../component/Contenedor.jsx";

export const Home = () => (
  <div className="text-start mt-5">
    <Navbar />
    <Contenedor />
  </div>
);
