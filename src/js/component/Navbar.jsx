import React from "react";
import StarwarsIco from "../../img/starwars.png";

export const Navbar = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={StarwarsIco} alt="" />
        </a>
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
              <span className="badge text-bg-secondary">4</span>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Accesibility
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Privacy and Data
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" style={{ color: "red" }}>
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
