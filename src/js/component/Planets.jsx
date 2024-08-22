import React, { useContext, useEffect } from "react";
import { CardPlanets } from "./CardPlanets.jsx";
import { Context } from "../store/appContext";

export const Planets = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <div className="container bg-gradient p-4 rounded">
      <h2 className="mb-3 text-danger">Planets</h2>
      <div className="row flex-nowrap overflow-auto">
        {store.planets &&
          store.planets.length > 0 &&
          store.planets.map((planets, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <CardPlanets
                key={planets.id}
                name={planets.name}
                population={planets.population}
                terrain={planets.terrain}
                id={planets.id}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
