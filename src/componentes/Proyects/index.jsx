import React from "react";
import S from "./proyects.module.css";

const Proyects = () => {
  return (
    <div className={S.proyectsContainer}>
      <div className={S.cards}>
        <div className={S.card}>
          <h2 className={S.cardTitle}>OMBD</h2>
          <img
            src={`${"https://i.postimg.cc/141nr0Gw/samuel-regan-asante-w-Mka-MXTJjl-Q-unsplash.jpg"}`}
            alt=""
          ></img>
          <p className={S.cardDesc}>Proyecto en el cual emulamos desde 0 una web que contiene películas al estilo OMDB. En este proyecto utilizamos REACT y una api externa para tener el contenido.</p>
        </div>
        <div className={S.card}>
          <h2 className={S.cardTitle}>E-Commerce</h2>
          <img
            src={`${"https://i.postimg.cc/3JknS3gw/cardmapr-nl-h-TUZW7-E7krg-unsplash.jpg"}`}
            alt=""
          ></img>
          <p className={S.cardDesc}>En 2 semanas junto con un equipo de 5 personas logramos armar un E- commerce desde 0! Manejando mongoDB y REACT!</p>
        </div>
        <div className={S.card}>
          <h2 className={S.cardTitle}>EstacionAr</h2>
          <img
            // src={`${"https://i.postimg.cc/NfnPBKgT/20210101-194326.jpg"}`}
            src={`${"https://i.postimg.cc/NFq1f2NJ/anne-nygard-Fw-RTLAj-Te-E0-unsplash.jpg"}`}
            alt=""
          ></img>
          <p className={S.cardDesc}>
            Proyecto el cual fue ideado para la etapa profesional del bootcamp.
            Se trata de una aplicación mobile hecha con REACT NATIVE + FIREBASE
            para saber dónde estacionar, cuanto tiempo tenés, etc. El mismo lo
            llevamos a cabo un equipo de 5 personas utilizando SCRUM como
            metodología agil.
          </p>
        </div>
      </div>
      <div className={S.buttonContainer}>
        <a
          href={"https://github.com/dborgat/omdb"}
          target="_blank"
          rel="noreferrer"
        >
          <button className={S.button}> REPO DE GITHUB</button>
        </a>
        <a
          href={"https://github.com/dborgat/E-commerce"}
          target="_blank"
          rel="noreferrer"
        >
          <button className={S.button}> REPO DE GITHUB</button>
        </a>
        <a
          href={"https://github.com/dborgat/EstacionAr"}
          target="_blank"
          rel="noreferrer"
        >
          <button className={S.button}> REPO DE GITHUB</button>
        </a>

      </div>
    </div>
  );
};

export default Proyects;
