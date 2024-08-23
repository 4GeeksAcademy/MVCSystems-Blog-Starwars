import React from "react";
import { Character } from "./Character.jsx";
import { Planets } from "./Planets.jsx";
import { Vehicles } from "./Vehicles.jsx";
import Search from "./Search.jsx";

export const Contenedor = () => {
  return (
    <>
      <div className="container" style={{ paddingTop: "120px" }}>
        <Search />
        <Character />
        <Planets />
        <Vehicles />
      </div>
    </>
  );
};
