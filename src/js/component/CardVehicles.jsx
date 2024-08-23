import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardVehicles = ({ name, id }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  if (!id) {
    console.error("ID o UID no definido");
    return (
      <div className="alert alert-danger" role="alert">
        Error: ID o UID no definido.
      </div>
    );
  }

  const imagencard = `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;

  return (
    <div className="container bg-gradient p-4 rounded">
      <div className="row align-items-start">
        <div className="card shadow-lg border-0">
          <img src={imagencard} className="card-img-top rounded-top mt-2" />
          <div className="card-body p-3">
            <h5 className="card-text text-primary">{name}</h5>
            <div className="card-text mb-2 mt-2 d-flex justify-content-between mt-4 gap-2">
              <Link
                to={`/detallevehicle/${id}`}
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
