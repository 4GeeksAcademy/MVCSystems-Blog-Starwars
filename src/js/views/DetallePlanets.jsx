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
      <div className="container bg-gradient p-4 rounded mt-4">
        <div className="card shadow-lg border-0">
          <div className="row g-0 mt-5">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                className="img-fluid rounded"
                style={{ maxWidth: "85%", height: "90%" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h1 className="card-title display-4 text-primary">
                  {planet.name}
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus nesciunt fugit iure accusamus voluptatem ad
                  aliquid ipsa commodi perferendis necessitatibus, tempora
                  eveniet fuga pariatur! Quae excepturi deserunt ad. Beatae
                  voluptas, eveniet quae enim obcaecati mollitia vitae nulla
                  suscipit voluptatem laboriosam quis possimus laborum
                  molestiae, facilis, facere culpa officia soluta deserunt!
                </p>
                <div className="row">
                  <div className="col-md-6">
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
                  </div>
                  <div className="col-md-6">
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
                  </div>
                </div>
                <button
                  className="btn btn-primary mt-3 d-flex align-items-center"
                  onClick={() => navigate(-1)}
                >
                  <i className="bi bi-arrow-left me-2"></i> Volver
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
