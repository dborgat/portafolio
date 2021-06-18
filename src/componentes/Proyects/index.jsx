import React from "react";
import S from "./proyects.module.css";

const Proyects = () => {
  return (
    <div className={S.proyectsContainer}>
      <div className={S.cardOmdb}>
        <div className={S.info}>
          <h1 className={S.title}>OMBD</h1>
          <p className={S.description}>
            Proyecto en el cual emulamos desde 0 una web que contiene películas
            al estilo OMDB. En este proyecto utilizamos REACT y una api externa
            para tener el contenido.
          </p>
          <a
            href={"https://github.com/dborgat/omdb"}
            target="_blank"
            rel="noreferrer"
            className={S.butonRepo}
          >
            <button className={S.button}> REPO DE GITHUB</button>
          </a>
        </div>
      </div>
      <div className={S.cardEcommerce}>
        <div className={S.info}>
          <h1 className={S.title}>E-Commerce</h1>
          <p className={S.description}>
            En 2 semanas junto con un equipo de 5 personas logramos armar un E-
            commerce desde 0! Manejando mongoDB y REACT!
          </p>
          <a
            href={"https://github.com/dborgat/E-commerce"}
            target="_blank"
            rel="noreferrer"
            className={S.butonRepo}
          >
            <button className={S.button}> REPO DE GITHUB</button>
          </a>
        </div>
      </div>
      <div className={S.cardEstacionar}>
        <div className={S.info}>
          <h1 className={S.title}>EstacionAr</h1>
          <p className={S.description}>
            Proyecto en el cual emulamos desde 0 una web que contiene películas
            al estilo OMDB. En este proyecto utilizamos REACT y una api externa
            para tener el contenido.
          </p>
          <a
            href={"https://github.com/dborgat/EstacionAr"}
            target="_blank"
            rel="noreferrer"
            className={S.butonRepo}
          >
            <button className={S.button}> REPO DE GITHUB</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
