import React from "react";
import { Link } from "react-router-dom";
import S from "./header.module.css";

const Header = () => {
  return (
    <div>
      <div className={S.buttonContainer}>
        <Link to="/">
          <button className={S.boton}> SOBRE MÍ </button>
        </Link>
        <Link to="/proyects">
          <button className={S.boton}> PROYECTOS </button>
        </Link>
        <Link to="/contact">
          <button className={S.boton}> CONTACTO </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
