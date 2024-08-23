import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/Navbar.jsx";

const DetallePlanets = () => {
  const { store, actions } = useContext(Context);
  const { uid } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await actions.getPlanetDetails(uid);
      setLoading(false);
    };
    fetchData();
  }, [uid, actions]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  const planet = store.planetDetails;

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="card shadow-lg border-0">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                className="img-fluid rounded-start"
                alt={planet.name}
                style={{ objectFit: "cover", height: "100%" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h1 className="card-title display-4">{planet.name}</h1>
                <p className="card-text">
                  <strong>Climate:</strong> {planet.climate}
                </p>
                <p className="card-text">
                  <strong>Terrain:</strong> {planet.terrain}
                </p>
                <p className="card-text">
                  <strong>Population:</strong> {planet.population}
                </p>
                <p className="card-text">
                  <strong>Diameter:</strong> {planet.diameter}
                </p>
                <p className="card-text">
                  <strong>Rotation Period:</strong> {planet.rotation_period}
                </p>
                <p className="card-text">
                  <strong>Orbital Period:</strong> {planet.orbital_period}
                </p>
                <p className="card-text">
                  <strong>Gravity:</strong> {planet.gravity}
                </p>
                <p className="card-text">
                  <strong>Surface Water:</strong> {planet.surface_water}
                </p>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => navigate(-1)}
                >
                  Volver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetallePlanets;
