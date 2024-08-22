import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const DetallePlanets = ({ uid }) => {
  // Recibe el parámetro 'id'
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPlanetDetails(uid);
  }, [uid, actions]);

  const planet = store.planetDetails;

  if (!planet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{planet.name}</h1>
        <p className="lead">Climate: {planet.climate}</p>
        <p className="lead">Terrain: {planet.terrain}</p>
        <p className="lead">Population: {planet.population}</p>
        <p className="lead">Diameter: {planet.diameter}</p>
        <p className="lead">Rotation Period: {planet.rotation_period}</p>
        <p className="lead">Orbital Period: {planet.orbital_period}</p>
        <p className="lead">Gravity: {planet.gravity}</p>
        <p className="lead">Surface Water: {planet.surface_water}</p>
        <hr className="my-4" />
        <Link to="/">
          <span className="btn btn-primary btn-lg" role="button">
            Back home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DetallePlanets;
