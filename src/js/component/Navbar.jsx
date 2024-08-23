import React, { useContext } from "react";
import StarwarsIco from "../../img/starwars.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={StarwarsIco} alt="Star Wars" />
        </Link>
        <div className="d-flex align-items-center">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
              <span className="badge text-bg-secondary">
                {store.favorites.length}
              </span>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton1"
            >
              {store.favorites.length === 0 ? (
                <li className="dropdown-item">No favorites added</li>
              ) : (
                store.favorites.map((fav, index) => (
                  <li
                    className="dropdown-item text-primary d-flex justify-content-between align-items-center"
                    key={index}
                  >
                    <small>{fav}</small>
                    <button
                      className="bg-transparent border-0"
                      onClick={() => actions.deleteFavorite(fav)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
