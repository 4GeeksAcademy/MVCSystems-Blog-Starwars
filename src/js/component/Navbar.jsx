import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <i class="fa-brands fa-instagram"></i>
          Instagram
        </a>
        <div class="d-flex align-items-center">
          <button
            type="button"
            class="btn btn-success ms-3 me-3"
            data-bs-toggle="modal"
            data-bs-target="#ModalPublish"
          >
            Create new post
          </button>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-cog"></i>
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a class="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Accesibility
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Privacy and Data
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" style="color: red">
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

export default Navbar;
