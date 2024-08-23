import React from "react";
import imagen from "../../img/starwars.png";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <p>
      Hecho con <i className="fa fa-heart text-danger" /> por {"Carlos Mera "}
      <br />
      Inspirado en <i className="fa fa-jedi text-warning" /> Star Wars
      <br />
      <img
        src={imagen}
        alt="Star Wars"
        style={{ width: "50px", height: "50px" }}
      />
    </p>
  </footer>
);
