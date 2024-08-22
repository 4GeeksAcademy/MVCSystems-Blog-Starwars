import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import imagencard from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

export const CardPlanets = ({ name, id }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/detallePlanets/${id}`);
  };

  return (
    <>
      <div className="container bg-gradient p-4 rounded">
        <div className="row align-items-start">
          <div className="card shadow-lg border-0">
            <img
              src={imagencard}
              className="card-img-top rounded-top"
              alt="..."
              style={{ marginBottom: "0" }}
            />
            <div className="card-body p-3">
              {" "}
              <h5 className="card-title text-primary">{name}</h5>
              <div className="card-text mb-2 mt-2 d-flex justify-content-between mt-4 gap-4">
                <button
                  type="button"
                  className="btn btn-border-primary btn-outline-danger"
                  onClick={handleLearnMore}
                >
                  <Link to={`/viewplanets/${id}`} className="text-white">
                    ver mas..
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-border-warning btn-outline-warning ms-2"
                  // onClick={handleAnotherAction}
                >
                  <i className="bi bi-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
