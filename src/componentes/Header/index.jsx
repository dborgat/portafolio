import React from "react";
import { Link } from "react-router-dom";
import S from "./header.module.css";

const Header = () => {
  return (
    <div>
      <div className={S.buttonContainer}>
        <Link to="/">
          <button className={S.boton}> SOBRE <span className={S.tagSpan}>MI</span></button>
        </Link>
        <Link to="/proyects">
          <button className={S.boton}> PROYE<span className={S.tagSpan}>CTOS</span></button>
        </Link>
        <Link to="/contact">
          <button className={S.boton}> CONT<span className={S.tagSpan}>ACTO</span></button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
