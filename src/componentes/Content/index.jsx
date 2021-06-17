import React from "react";
import S from "./content.module.css";

const Content = () => {
  return (
    <div className={S.container}>
      <h1 className={S.tag}> {`</`}<span className={S.tagSpan}>{`>`}</span> </h1>
      <h3 className={S.title}>David Borgat | <span className={S.subtitle}>FullStack Dev</span></h3>
      <p className={S.paragraph}>
        amante de la <span className={S.tagSpan}>teconolgía</span> encontre en la programación un lugar a <span className={S.tagSpan}>dónde aprender</span> y seguir creciendo son moneda corriente. 
        Soy <span className={S.tagSpan}>egresado de P5</span> a donde <span className={S.tagSpan}>conocí</span> a <span className={S.tagSpan}>FELI</span> que si por favor la conoces, le decís que la quiero muchisimo y que no paro <span className={S.tagSpan}>de pensar en ella?</span>
      </p>
    </div>
  );
};

export default Content;
