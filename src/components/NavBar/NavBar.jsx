import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="aqua-green navBar  d-flex align-items-center">
    <div className="container-sm   d-flex justify-content-between">
      Nutrisimple
      <ul className="lista-navBar col-4">
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Contacto</li>
      </ul>
    </div>
    </div>
  );
};

export default NavBar;
