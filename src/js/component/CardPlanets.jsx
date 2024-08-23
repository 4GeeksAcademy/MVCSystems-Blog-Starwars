import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import imagendefault from "../../img/imagedefault.png";

export const CardPlanets = ({ name, id }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  if (!id) {
    console.error("ID o UID no definido");
    return (
      <div className="alert alert-danger" role="alert">
        <p>Error: ID o UID no definido.</p>
        <img src={imagendefault} className="img-fluid rounded" />
      </div>
    );
  }

  const imagencard = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
  return (
    <div className="container bg-gradient p-4 rounded">
      <div className="row align-items-start">
        <div className="card shadow-lg border-0">
          <img src={imagencard} className="card-img-top rounded-top mt-2" />
          <div className="card-body p-3">
            <h5 className="card-title text-primary mt-2">{name}</h5>
            <div className="card-text mb-2 mt-2 d-flex justify-content-between mt-4 gap-2">
              <Link
                to={"/detalleplanets/" + id}
                className="btn btn-outline-danger d-flex align-items-center"
              >
                Ver más
              </Link>
              <button
                type="button"
                className="btn btn-border-warning btn-outline-warning ms-2"
                onClick={() => actions.addFavorite(name)}
              >
                <i className="bi bi-heart-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
